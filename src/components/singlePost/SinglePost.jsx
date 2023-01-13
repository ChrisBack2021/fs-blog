import "./singlepost.css"

export default function SinglePost() {
  return (
      <div className="singlePost">
          Single Post
          <div className="singlePostWrapper">
              <img src="https://placekitten.com/300/300" alt="" className="singlePostImg"/>
          </div>
          <h1 className="singlePostTitle">
              Lorem ipsum dolor 
              <div className="singlePostEdit">
                  <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                  <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
              </div>
          </h1>
          <div className="singlePostInfo">
              <span className="singlePostAuthor">
                  Author: <b>Chris</b>
              </span>
              <span className="singlePostDate">
                  Date: <b>1 hour ago</b>
              </span>
          </div>
          <p className="singlePostDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae fuga, vitae error eius atque? Laboriosam obcaecati impedit recusandae, voluptatibus ullam aperiam. Debitis nam ipsum facilis repellat odit adipisci dolor!
          </p>
      </div>
  )
}
