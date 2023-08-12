import React, {useState} from 'react';
import "./Navbar.css";
import "./MediaNavbar.css";
import {NavLink} from "react-router-dom";
import Logo from "../../utils/img/img_navBar/logo.svg";
import Mobile_menu from "../../utils/img/img_navBar/icon_menu.png";
import Mobile_close from "../../utils/img/img_navBar/align_right.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="menu" onClick={()=>setIsOpen(false)}>
            <div className="menu_logo" >
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
                <div className="menu_header_links_with_text_mobile_menu" >
                    {!isOpen ? <img
                        src={Mobile_menu}
                        alt="Menu"
                        onClick={(e)=> {
                            e.stopPropagation()
                            setIsOpen(!isOpen)
                        }
                    }
                    />
                        : <img
                            src={Mobile_close}
                            alt="Menu"
                            onClick={(e)=> {
                                e.stopPropagation()
                                setIsOpen(!isOpen)
                            }
                            }
                        />
                    }
                    <div className={isOpen ?"blur_mobile_nav active_menu" : "blur_mobile_nav"}/>
                        <div className={isOpen ? "menu_header_links_mobile active_menu" : "menu_header_links_mobile"}
                            onClick={()=> setIsOpen(false)}
                        >

                            <NavLink className="menu_header_link" to={"/"}>Главная</NavLink>
                            <NavLink className="menu_header_link" to={"/dtpWillHappened"}>ДТП, что делать?</NavLink>
                            <NavLink className="menu_header_link" to={"/dtpWithAnimals"}>ДТП с животными</NavLink>
                            <NavLink className="menu_header_link" to={"/medicalSupport"}>Медицинская помощь при
                                ДТП</NavLink>
                            <NavLink className="menu_header_link" to={"/contacts"}>Контакты</NavLink>
                        </div>
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