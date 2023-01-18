import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./sidebar.css"

export default function Sidebar() {

    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("http://localhost:5000/api/categories")
            setCats(res.data)
        }
        getCats()
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar">
                <span className="sidebarTitle">About me</span>
                <img src="https://placekitten.com/300/300" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci similique, corporis deserunt culpa tempora quam sequi minus facere quasi earum sunt, mollitia ratione? Quam dolor magnam iste harum ipsam sit.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {cats.map(c => (
                        <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">
                            {c.name}
                            </li>
                        </Link>    
                    ))}

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-f"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
