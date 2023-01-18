import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import axios from "axios"
import "./singlepost.css"
import { Context } from "../../context/Context"

export default function SinglePost() {

    const location = useLocation()
    const path = (location.pathname.split('/')[2])
    const [post, setPost] = useState({})
    const publicFolder = "http://localhost:5000/images/"
    const { user } = useContext(Context)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/" + path)
            setPost(res.data)
        }
        getPost()
    },[path])

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${post._id}`, { data: { username: user.username } })
            window.location.replace("http://localhost:3000/")
        } catch (error) {
            
        }
    }

  return (
      <div className="singlePost">
          <div className="singlePostWrapper">
              {post.photo && (
              <img src={publicFolder + post.photo} alt="" className="singlePostImg" />
             )}
          </div>
          <h1 className="singlePostTitle">
              {post.title}
              {post.username === user?.username ?
                  <div className="singlePostEdit">
                      <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                      <i className="singlePostIcon fa-sharp fa-solid fa-trash" onClick={handleDelete}></i>
                  </div> : ""
               }       
          </h1>
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
          <p className="singlePostDesc">
                {post.desc}
          </p>
      </div>
  )
}
