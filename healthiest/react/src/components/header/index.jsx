
import "../header/header.css"
import {useLocation,useParams} from 'react-router-dom'
import { useState } from "react";

export default function Header(){
    const location = useLocation();
    const [searchOpen, setSearchOpen] = useState(false)
    const { id } = useParams();

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
                {location.pathname === "/login" ? (
                    <ul>
                        <li>
                            <a className="nav-current">Login</a>
                        </li>
                    </ul>
                ) : location.pathname === "/dashboard" ?(
                    <ul>
                        <li>
                            <a href="/dashboard" className="nav-current">INÍCIO</a>
                        </li>
                        <li>
                            <a href="/recipe" className="nav">RECEITAS</a>
                        </li>
                        <li>
                            <a href="/profile" className="nav">PERFIL</a>
                        </li>
                    </ul>
                ) : location.pathname === `/recipe/${id}` ?(
                    <ul>
                        <li>
                            <a href="/dashboard" className="nav">INÍCIO</a>
                        </li>
                        <li>
                            <a href="/recipe" className="nav-current">RECEITAS</a>
                        </li>
                        <li>
                            <a href="/profile" className="nav">PERFIL</a>
                        </li>
                    </ul>
                ) : location.pathname === `/recipe` ?(
                    <ul>
                        <li>
                            <a href="/dashboard" className="nav">INÍCIO</a>
                        </li>
                        <li>
                            <a href="/recipe" className="nav-current">RECEITAS</a>
                        </li>
                        <li>
                            <a href="/profile" className="nav">PERFIL</a>
                        </li>
                    </ul>
                ) : location.pathname === `/profile` ?(
                    <ul>
                        <li>
                            <a href="/dashboard" className="nav">INÍCIO</a>
                        </li>
                        <li>
                            <a href="/recipe" className="nav">RECEITAS</a>
                        </li>
                        <li>
                            <a href="/profile" className="nav-current">PERFIL</a>
                        </li>
                    </ul>
                ) : null }
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