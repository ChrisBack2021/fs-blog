import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"
import "./topbar.css"

export default function Topbar() {
    const { user, dispatch } = useContext(Context)
    const apiPublicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className="top">
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" > Home </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write" > Write </Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "Log out"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link to="/settings">
                            <img className="topImg" src={user.profilePic} alt="" />
                        </Link>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">Log in</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">Register</Link>
                            </li>
                        </ul>
                    )
                }
                {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
            </div>
        </div>
    )
}
