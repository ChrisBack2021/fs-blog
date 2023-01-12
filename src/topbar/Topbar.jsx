import "./topbar.css"

export default function Topbar() {
  return (
      <div className="top">
          <div className="topLeft">
              {/* Social media icons */}
              <i className= "topIcon fa-brands fa-facebook-f"></i>
              <i className= "topIcon fa-brands fa-twitter"></i>
              <i className= "topIcon fa-brands fa-instagram"></i>
          </div>
          <div className="topCenter">
              <ul className="topList">
                  <li className="topListItem">Home</li>
                  <li className="topListItem">About</li>
                  <li className="topListItem">Contact</li>
                  <li className="topListItem">Write</li>
                  <li className="topListItem">Log out</li>
              </ul>
          </div>
          <div className="topRight">
              <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
          </div>
      </div>
  )
}
