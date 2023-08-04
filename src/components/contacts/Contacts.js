import React from 'react';
import "./Contact.css"
import telegramm from "../../utils/img/imgs_main_page/f4/telegramm.png";
import viber from "../../utils/img/imgs_main_page/f4/viber.png";
import watsapp from "../../utils/img/imgs_main_page/f4/watsapp.png";

function Contacts() {
    return (
        <div>
            <section className="containerContact">
                <h1>Контакты</h1>
                <div className="first_section_contact">
                    <div className="first_section_contact_block">
                        <p>Адрес</p>
                        <p><span>211440 г. Новополоцк</span></p>
                    </div>
                    <div className="first_section_contact_block">
                        <div className="first_section_contact_block_block">
                            <p>Телефон</p>
                            <p><span>+375 29 758 50 06</span></p>
                        </div>
                        <div className="first_section_contact_block_block">
                            <p>Viber</p>
                            <p><span>+375 29 656 14 22</span></p>
                        </div>
                    </div>
                    <div className="first_section_contact_block">
                        <div className="first_section_contact_block_block">
                            <p>Email</p>
                            <a href="mailto:AlehBashun@gmail.com"><span>AlehBashun@gmail.com</span></a>
                        </div>
                        <div className="first_section_contact_block_block">
                            <p>Буду рад Вашим предложениям и замечаниям по проекту</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="second_section_contact">
                <div className="containerContact">
                    <div className="second_section_contact_with_foto"></div>
                    <div>
                        <h2>Цель проект <span>HAND:</span></h2>
                        <p>Формирование, на основе виртуального опыта и переживаний, знаний и навыков направленных на обдуманное, грамотное и предсказуемое поведение и действия при чрезвычайных проишествиях и ДТП.</p>
                    </div>
                    <div>
                        <div className="">
                            <p>Автор проекта</p>
                            <p>«Help And Not Die»</p>
                            <h2>Олег</h2>
                            <h2>Башун</h2>
                        </div>
                        <div className="">
                            <p>Отвечаю онлайн</p>
                            <div>
                                <a href="*">
                                    <img src={telegramm} alt="telegramm"/>
                                </a>
                                <a href="*">
                                    <img src={watsapp} alt="watsapp"/>
                                </a>
                                <a href="*">
                                    <img src={viber} alt="viber"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Contacts;