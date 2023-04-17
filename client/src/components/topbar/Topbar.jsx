import "./topbar.css"
import { Search, Person, Chat, Notifications, Logout, } from "@mui/icons-material"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { Button } from "@mui/material"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css



export default function Topbar() {
    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const handleLogout = () => {
        confirmAlert({
            title: 'Log Out?',
            message: 'Are you sure want to log out?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        localStorage.clear();
                        window.location.reload();
                    },
                    style: { background: "green" }

                },
                {
                    label: 'No',
                    style: { background: "#d00101" }
                }
            ]
        });
    }
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">MiSocial</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friend,post and videos" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        <span className="topbarLink">HomePage</span>
                    </Link>
                    <Link to={`/profile/${user.username}`} style={{ textDecoration: "none", color: "white" }} >
                        <span className="topbarLink">Timeline</span>
                    </Link>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconbadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconbadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconbadge">3</span>
                    </div>
                    <div >
                        <Button onClick={handleLogout} style={{ color: "white" }} ><Logout /></Button>
                    </div>
                </div>
                <div>
                    <Link to={`/profile/${user.username}`} >
                        <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" className="topbarImg" />
                    </Link>
                </div>
            </div>
        </div>
    )
}