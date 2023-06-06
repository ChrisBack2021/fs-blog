import axios from "axios"
import "./write.css"
import { useContext, useState } from "react"
import { Context } from "../../context/Context"
import { useNavigate } from "react-router-dom"

export default function Write() {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState("")
    const [categories, setCategories] = useState("")
    const { user } = useContext(Context)


    const newPost = {
        username: user.username,
        title,
        desc,
        categories
    }

    const api = process.env.REACT_APP_BACKEND_SERVER || "http://localhost:8080/api"

    const nav = useNavigate()

    const filePost = async () => {
        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "uxqhmpcy")
        data.append("cloud_name", "dm2ebszpf")
        return fetch("https://api.cloudinary.com/v1_1/dm2ebszpf/image/upload", {
            method: "post",
            body: data
        })
            .then((res) => res.json())
            .then((data) => { newPost.photo = data.url })
    }


    async function formSubmit(e) {
        e.preventDefault()
        await filePost()
        await fetch(`${api}/posts`, {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: user.username,
                title: newPost.title,
                desc: newPost.desc,
                photo: newPost.photo,
                categories: newPost.categories
            })
        })
        nav("/")
    }


    return (
        <div className="write">
            {file ?
                <img className="writeImg" src={URL.createObjectURL(file)} alt="" /> : ""
            }
            <form className="writeForm" onSubmit={formSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="imageInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" name="image" id="imageInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Begin blog post here" type="text" className="writeInput writeText" onChange={e => setDesc(e.target.value)} />
                </div>
                <div>
                    <p className="categoryList">Choose category</p>
                    <select name="categories" className="categoriesSelect" value={categories} onChange={e => setCategories(e.target.value)}>
                        <option value="JavaScript">Javascript</option>
                        <option value="React">React</option>
                        <option value="Theory">Theory</option>
                        <option value="C#">C#</option>
                        <option value="Selenium">Selenium</option>
                    </select>
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    )
}
