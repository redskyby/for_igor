import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar({items}) {
    return (
        <div className="menu_header">
            <div className="nav_links">
                <NavLink to={"/"}>Главная</NavLink>
            </div>
            <div className="nav_links">
                <NavLink to={"/dtpWillHappened"}>ДТП что делать?</NavLink>
            </div>
            <div className="nav_links">
                <NavLink to={"/dtpWithAnimals"}>ДТП с животными</NavLink>
            </div>
            <div className="nav_links">
                <NavLink to={"/medicalSupport"}>Медицинская поомщь при ДТП</NavLink>
            </div>
            <div className="nav_links">
                <NavLink to={"/contacts"}>Контакты</NavLink>
            </div>
        </div>
    );
}

export default Navbar;