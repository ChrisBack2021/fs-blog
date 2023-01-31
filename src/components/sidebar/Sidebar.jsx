import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./sidebar.css"

export default function Sidebar() {

    const [cats, setCats] = useState([])


    useEffect(() => {
        const getCats = async () => {
            const api = process.env.REACT_APP_BACKEND_SERVER || "http://localhost:8080/api"
            const res = await axios.get(`${api}/categories`)
            setCats(res.data)
        }
        getCats()
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar">
                <span className="sidebarTitle">What is this project and who am I?</span>
                <p className="sidebarParagraph">My name is Chris and I am a tech enthusiast that is using this project as a way to keep track of all the new technologies I am learning. The technologies can be seperated by the categories as seen below. </p>
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
            {/* Currently inactive socials */}
            {/* <div className="sidebarItem">
                <span className="sidebarTitle">Follow us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-f"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div> */}
        </div>
    )
}
