import { useContext, useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import "./singlepost.css"
import { Context } from "../../context/Context"

export default function SinglePost() {

    const location = useLocation()
    const path = (location.pathname.split('/')[2])
    const [post, setPost] = useState({})
    const { user } = useContext(Context)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)
    const nav = useNavigate()

    const api = process.env.REACT_APP_BACKEND_SERVER || "http://localhost:8080/api"
    const apiPublicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
        const getPost = async () => {
            const api = process.env.REACT_APP_BACKEND_SERVER || "http://localhost:8080/api"
            const res = await axios.get(`${api}/posts/` + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`${api}/posts/${post._id}`, { data: { username: user.username } })
            nav("/")
        } catch (error) {

        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`${api}/posts/${post._id}`, {
                username: user.username,
                title,
                desc
            })
            setUpdateMode(false)
        } catch (error) {

        }
    }

    function formatDescription(desc) {
        // Split the description into an array of paragraphs
        const paragraphs = desc.split("\n\n");

        // If the description is only one paragraph, return it as is
        if (paragraphs.length === 1) {
            return <p>{desc}</p>;
        }

        // If the description has multiple paragraphs, create a new paragraph
        // tag and line break between each paragraph
        let formattedDesc = [];
        paragraphs.forEach((paragraph, index) => {
            if (index === paragraphs.length - 1) {
                formattedDesc.push(<p key={index}>{paragraph}</p>);
            } else {
                formattedDesc.push(<p key={index}>{paragraph}</p>);
                formattedDesc.push(<br key={`${index}-br`} />);
            }
        });

        return formattedDesc;
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img src={post.photo} alt="" className="singlePostImg" />
                )}
                {updateMode ? (
                    <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e) => setTitle(e.target.value)} />
                ) : (
                    <h1 className="singlePostTitle">
                        {title}
                        {post.username === user?.username ?
                            <div className="singlePostEdit">
                                <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                                <i className="singlePostIcon fa-sharp fa-solid fa-trash" onClick={handleDelete}></i>
                            </div> : ""
                        }
                    </h1>
                )}
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">
                        <b>{new Date(post.createdAt).toDateString()}</b>
                    </span>
                </div>
                {updateMode ? (
                    <textarea className="singlePostDescInput" value={desc} onChange={(e) => setDesc(e.target.value)} />
                ) :
                    (
                        <p className="singlePostDesc">
                            {formatDescription(desc)}
                        </p>
                    )
                }
                {updateMode ? <button className="singlePostButton" onClick={handleUpdate}>Update</button> : ""}
            </div>
        </div>
    )
}
