import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import "./singlepost.css"

export default function SinglePost() {

    const location = useLocation()
    const path = (location.pathname.split('/')[2])
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/" + path)
            setPost(res.data)
        }
        getPost()
    },[path])

  return (
      <div className="singlePost">
          <div className="singlePostWrapper">
              {post.photo && (
              <img src={post.photo} alt="" className="singlePostImg" />
             )}
          </div>
          <h1 className="singlePostTitle">
              {post.title}
              <div className="singlePostEdit">
                  <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                  <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
              </div>
          </h1>
          <div className="singlePostInfo">
              <span className="singlePostAuthor">
                  Author: <b>{post.username}</b>
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
