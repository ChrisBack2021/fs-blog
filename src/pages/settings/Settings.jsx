import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
      <div className="settings">
          <div className="settingsWrapper">
              <div className="settingsTitle">
                  <span className="settingsUpdateTitle">Update your account</span>
                  <span className="settingsDeleteTitle">Delete account</span>
              </div>
              <form className="settingsForm">
                  <label>Profile Picture</label>
                  <div className="settingsPP">
                      <img src="https://placekitten.com/300/300" alt="" />
                      <label htmlFor="fileInput">
                          <i className="settingsPPIcon fa-solid fa-user"></i>
                      </label>
                      <input type="file" id="fileInput" style={{display: "none"}} />
                  </div>
                  <label>Username</label>
                  <input type="text" placeholder="Chris"/>
                  <label>Email</label>
                  <input type="email" placeholder="chris@gmail.com" />
                  <label>Password</label>
                  <input type="password" />
                  <buttons className="settingsSubmit">Update</buttons>
              </form>
          </div>
          <Sidebar />
      </div>
  )
}
