import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./register.css"
import axios from "axios"

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const api = process.env.REACT_APP_BACKEND_SERVER


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post(`${api}/auth/register`, {
        username,
        email,
        password
      })
      res.data && window.location.replace('/login')
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" placeholder="Enter your email..." className="registerInput" onChange={e => setEmail(e.target.value)} />
        <label>Username</label>
        <input type="text" placeholder="Enter your username..." className="registerInput" onChange={e => setUsername(e.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." className="registerInput" onChange={e => setPassword(e.target.value)} />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="loginButton">
        <Link to="/login" className="link">Log in</Link>
      </button>
      {error === true ? <span>Username or email has been taken. Please retry again.</span> : ''}
    </div>
  )
}
