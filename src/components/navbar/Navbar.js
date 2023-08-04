import React from 'react';
import "./Navbar.css"
import {NavLink} from "react-router-dom";
import Logo from "../../utils/img/logo.svg";

function Navbar({items}) {
    return (
        <nav className="menu">
            <div className="menu_logo">
                <img src={Logo} alt="Help not to die"/>
            </div>
            <div className="menu_header_links_with_text">
                <div className="menu_header_links">
                    <NavLink className="menu_header_link" to={"/"}>Главная</NavLink>
                    <NavLink className="menu_header_link" to={"/dtpWillHappened"}>ДТП, что делать?</NavLink>
                    <NavLink className="menu_header_link" to={"/dtpWithAnimals"}>ДТП с животными</NavLink>
                    <NavLink className="menu_header_link" to={"/medicalSupport"}>Медицинская помощь при ДТП</NavLink>
                    <NavLink className="menu_header_link" to={"/contacts"}>Контакты</NavLink>
                </div>
                <div className="menu_header_text">
                    <p className="menu_header_text_first">Help And Not Die</p>
                    <p className="menu_header_text_second">Помочь и не погибнуть</p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;