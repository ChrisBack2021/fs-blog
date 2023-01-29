import { useRef, useContext } from "react"
import { Link } from "react-router-dom"
import "./login.css"
import axios from "axios"
import { Context } from "../../context/Context"

export default function Login() {

  const userRef = useRef()
  const passwordRef = useRef()
  const { dispatch, isFetching } = useContext(Context)

  const api = process.env.REACT_APP_BACKEND_SERVER || "http://localhost:8080/api"

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: "LOGIN_START" })
    try {
      const res = await axios.post(`${api}/auth/login`, {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" })
    }
  }

  console.log(isFetching)
  return (
    <div className="login">
      <span className="loginTitle">Log in</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter your username..." className="loginInput" ref={userRef} />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." className="loginInput" ref={passwordRef} />
        <button className="loginButton" type="submit" disabled={isFetching}>Log in</button>
      </form>
      <button className="registerButton">
        <Link to="/register" className="link">Register</Link>
      </button>
    </div>
  )
}
