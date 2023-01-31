import { useContext, useState } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import { Context } from "../../context/Context"
import "./settings.css"
import axios from "axios"

export default function Settings() {
    const { user, dispatch } = useContext(Context)
    const apiPublicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const api = process.env.REACT_APP_BACKEND_SERVER


    const [file, setFile] = useState(null)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false) 

    const updatedUser = {
        userId: user._id,
        username,
        email,
        password
    }

    const filePost = async () => {
        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "uxqhmpcy")
        data.append("cloud_name", "dm2ebszpf")
        return fetch("https://api.cloudinary.com/v1_1/dm2ebszpf/image/upload", {
            method: "put",
            body: data
        })
            .then((res) => res.json())
            .then((data) => { updatedUser.profilePic = data.url })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await filePost()
        dispatch({ type: "UPDATE_START" })
        try {
            const res = await axios.put(`${api}/users/${user._id}`, updatedUser)
            setSuccess(true)
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
            console.log(updatedUser)
        } catch (error) {
            console.log(error)
            dispatch({ type: "UPDATE_FAILURE" })
        }
    }
    console.log(user)
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={file ? user.profilePic : ""} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="settingsSubmit" type="submit">Update</button>
                    {success ? <span style={{ textAlign: "center", marginTop: "20px" }}>Profile has been updated!</span> : ""}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
