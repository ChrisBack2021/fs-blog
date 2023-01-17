import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Log in</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="Enter your email..." className="loginInput" />
        <label>Username</label>
        <input type="text" placeholder="Enter your username..." className="loginInput" />
        <label>Password</label>
        <input type="text" placeholder="Enter your password..." className="loginInput" />
        <button className="loginButton">Log in</button>
      </form>
      <button className="registerButton">
        <Link to="/register" className="link">Register</Link>
      </button>
    </div>
  )
}
