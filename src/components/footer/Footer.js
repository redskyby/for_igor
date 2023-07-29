import React from 'react';
import './Footer.css'
import img32 from "../../utils/img/imgs_main_page/f2/image32.png";
import Logo from "../../utils/img/logo.svg";
import Button from "../../utils/button/Button";
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <section>
                <div>
                    <img src={img32} alt="Превью игры"/>
                </div>
                <div>
                    <h2>Скачать игру</h2>
                    <h2><span>Game 09 2020</span></h2>
                </div>
                <div>
                    <p>Первоначальное название проекта «Soul of a Hero» было заменено автором на «Help And Not Die» -
                        HAND</p>
                    <p>Заготовка игры для ознакомления, в архиве rar.78Mb с сайта файлообменника ru.files.fm</p>
                    <Button type="button" placeholder="скачать игру" name="Скачать игру"/>
                </div>
                <div>
                    <img src={Logo} alt="Логотип"/>
                </div>
            </section>
            <section>
                <div className="container_first">
                    <div className="container_first_block">
                        <div><a href="tel:+375 29 758–50–06">+375 29 758–50–06</a></div>
                        <p>Башун Олег Гарикович</p>
                        <p>Автор проекта</p>
                    </div>

                    <div className="container_first_block">
                        <div><a href="mailto:AlehBashun@gmail.com">AlehBashun@gmail.com</a></div>
                        <p>Буду рад Вашим предложениям и замечаниям по проекту</p>
                    </div>
                    <div className="container_first_block">
                        <h3>Поддержать проект</h3>
                        <p>Номер карты 4320370045671627 04/26</p>
                        <p>Для ЕРИП 964221025444/1627</p>
                        <p>IBAN BY47BAPB30140000964221025444</p>
                    </div>
                </div>
                <div className="container_second">
                    <div>
                        <p>© Башун Олег Гарикович 2018–2023</p>
                    </div>
                    <div>
                        <NavLink className="menu_header_link" to={"/"}>Главная</NavLink>
                        <NavLink className="menu_header_link" to={"/dtpWillHappened"}>ДТП, что делать?</NavLink>
                        <NavLink className="menu_header_link" to={"/dtpWithAnimals"}>ДТП с животными</NavLink>
                        <NavLink className="menu_header_link" to={"/medicalSupport"}>Медицинская поомщь при
                            ДТП</NavLink>
                        <NavLink className="menu_header_link" to={"/contacts"}>Контакты</NavLink>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;