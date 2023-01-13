import { Link } from "react-router-dom"
import "./topbar.css"

export default function Topbar() {
    const user = false
    return (
        <div className="top">
            <div className="topLeft">
                {/* Social media icons */}
                <i className="topIcon fa-brands fa-facebook-f"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" > Home </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/" > About </Link>
                    </li>

                    <li className="topListItem">
                        <Link className="link" to="/" > Contact </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write" > Write </Link>
                    </li>
                    <li className="topListItem">
                        {user && "Log out"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
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
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
