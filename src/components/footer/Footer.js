import React from 'react';
import './Footer.css'
import img32 from "../../utils/img/imgs_main_page/f2/image32.png";
import Logo from "../../utils/img/logo.svg";
import Telephone from "../../utils/img/imgs_footer/icon_telephone.png";
import Email from "../../utils/img/imgs_footer/icon_email.png";
import Button from "../../utils/button/Button";
import {NavLink} from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';

function Footer() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <footer className="footer">
            <section className="footer_first_section">
                <div className="footer_first_section_with_img">
                    <img src={img32} alt="Превью игры"/>
                </div>
                <div className="footer_first_section_with_text_and_button">
                    <div>
                        <h2>Скачать игру</h2>
                        <h2><span>Hand Game 09 2020</span></h2>
                    </div>
                    <div className="footer_first_section_with_text">
                        <p className="footer_first_section_with_text_first">Первоначальное название проекта «Soul of a
                            Hero» было заменено автором на «Help And Not Die»
                            -
                            HAND</p>
                        <p className="footer_first_section_with_text_second">Заготовка игры для ознакомления, в архиве
                            rar.78Mb с сайта файлообменника ru.files.fm</p>
                        <Button type="button" placeholder="скачать игру" name="Скачать игру"/>
                    </div>
                </div>
                <div>
                    <img src={Logo} alt="Логотип"/>
                </div>
            </section>
            <section className="footer_second_section">
                <div className="container_first">
                    <div className="container_first_block">
                        <div className="container_first_block_text">
                            <img src={Email} alt="email"/>
                            <a className="container_first_block_telephone"
                               href="tel:+375 29 758–50–06">+375 29 758–50–06</a>
                        </div>
                        <div className="container_first_block_text_bottom">
                            <p className="container_first_block_text_p">Башун Олег Гарикович</p>
                            <p className="container_first_block_text_p">Автор проекта</p>
                        </div>
                    </div>
                    <div className="container_first_block">
                        <div className="container_first_block_text">
                            <img src={Telephone} alt="номер телефона"/>
                            <a className="container_first_block_telephone"
                               href="mailto:AlehBashun@gmail.com">AlehBashun@gmail.com</a>
                        </div>
                        <div className="container_first_block_text_bottom">
                            <p className="container_first_block_text_p">Буду рад Вашим предложениям</p>
                            <p className="container_first_block_text_p">и замечаниям по проекту</p>
                        </div>
                    </div>
                    <div className="container_first_block">
                        <div className="container_first_block_text">
                            <h3>Поддержать проект</h3>
                        </div>
                        <div className="container_first_block_text_bottom">
                            <p className="container_first_block_text_p">Номер карты 4320370045671627 04/26</p>
                            <p className="container_first_block_text_p">Для ЕРИП 964221025444/1627</p>
                            <p className="container_first_block_text_p">IBAN BY47BAPB30140000964221025444</p>
                        </div>
                    </div>
                </div>
                <div className="container_second">
                    <div className="container_second_text">
                        <p>© Башун Олег Гарикович 2018–2023</p>
                    </div>
                    <div className="container_second_links">
                        <NavLink onClick={scrollToTop} className="container_second_link" to={"/"}>Главная</NavLink>
                        <NavLink onClick={scrollToTop} className="container_second_link" to={"/dtpWillHappened"}>ДТП, что делать?</NavLink>
                        <NavLink onClick={scrollToTop} className="container_second_link" to={"/dtpWithAnimals"}>ДТП с животными</NavLink>
                        <NavLink onClick={scrollToTop} className="container_second_link" to={"/medicalSupport"}>Медицинская помощь при
                            ДТП</NavLink>
                        <NavLink onClick={scrollToTop} className="container_second_link" to={"/contacts"}>Контакты</NavLink>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;