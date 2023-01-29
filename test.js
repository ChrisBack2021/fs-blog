import axios from "axios"
import "./write.css"
import { useContext, useState } from "react"
import { Context } from "../../context/Context"

export default function Write() {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")
    const { user } = useContext(Context)


    // const postImage = () => {
    //     const data = new FormData()
    //     data.append("file", image)
    //     data.append("upload_preset", "uxqhmpcy")
    //     data.append("cloud_name", "dm2ebszpf")
    //     newPost.photo = data.url
    // }

    const handleSubmit = async (e) => {
        const api = process.env.REACT_APP_BACKEND_SERVER
        e.preventDefault()
        const newPost = {
            username: user.username,
            title,
            desc,
            photo: image
        }
        if (image) {
            const data = new FormData()
            data.append("file", image)
            data.append("upload_preset", "uxqhmpcy")
      
            axios.post("https://api.cloudinary.com/v1_1/dm2ebszpf/image/upload", data).then((response) => console.log(response.data.secure_url))
            
            try {
                const res = await axios.post(`${api}/posts`, newPost)
                window.location.replace("http://localhost:3000/post/" + res.data._id)
                console.log(newPost)
            } catch (error) {
                console.log(error)
            }

        }
        await axios.post(`${api}/posts`)
    }


return (
    <div className="write">
        {image ?
            <img className="writeImg" src={URL.createObjectURL(image)} alt="" /> : ""
        }
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="imageInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" name="image" id="imageInput" style={{ display: "none" }} onChange={(e) => setImage(e.target.files[0])} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story" type="text" className="writeInput writeText" onChange={e => setDesc(e.target.value)} />
            </div>
            <button className="writeSubmit" type="submit">
                Publish
            </button>
        </form>
    </div>
)
}
