import React from 'react';
import "./Contact.css"
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
                        <div>
                            <p>Телефон</p>
                            <p><span>+375 29 758 50 06</span></p>
                        </div>
                        <div>
                            <p>Viber</p>
                            <p><span>+375 29 656 14 22</span></p>
                        </div>
                    </div>
                    <div className="first_section_contact_block">
                        <div>
                            <p>Email</p>
                            <a href="mailto:AlehBashun@gmail.com"><span>AlehBashun@gmail.com</span></a>
                        </div>
                        <div>
                            <p>Буду рад Вашим предложениям и замечаниям по проекту</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>

            </section>
        </div>
    );
}

export default Contacts;