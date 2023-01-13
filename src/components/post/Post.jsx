import "./post.css"

export default function Post() {
  return (
      <div className="post">
          <img className="postImg" src="https://placekitten.com/300/300" alt="" />
          <div className="postInfo">
              <div className="postCats">
                  <span className="postCat">Music</span>
                  <span className="postCat">Life</span>
              </div>
              <span className="postTitle">
                  Lorem ipsum 
              </span>
              <hr />
              <span className="postDate">1 hour ago</span>
          </div>
          <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptas distinctio quis numquam, amet dicta quos in voluptate eius. Autem, dolorem? Magnam, autem? Excepturi doloremque magnam ipsum mollitia quibusdam dolor!</p>
      </div>
  )
}
