
import "../header/header.css"
import {useLocation} from 'react-router-dom'
import { useState } from "react";

export default function Header(){
    const location = useLocation();
    const [searchOpen, setSearchOpen] = useState(false)


    const open = () => {
        setSearchOpen(!searchOpen)
    }

    return(
        <header>
            <div className="logo">
                <img src="/logo.png" alt="Logo Da Empresa" className="logo-img"/>
                <span className="logo-name">Healthiest</span>
            </div>
            <div className="nav-bar">
                {location.pathname == "/login" ? (
                    <ul>
                        <li>
                            <a className="nav-current">Login</a>
                        </li>
                        <li>
                            <a className="nav">início</a>
                        </li>
                    </ul>
                ) : (
                    null
                )}
            </div>
            <div className="right-menu">
                <div className={"search-container" + " " +(searchOpen ? "open" : "closed")}>
                    <input className={"search-input" + " " + (searchOpen ? null : "hide")} type="text" name="" id="" />
                    <i className="fa-solid fa-magnifying-glass default-icon" onClick={() => open()}></i>
                </div>
                <div className="subscribe-btn">inscrição</div>
            </div>
        </header>
    )
}