import React from 'react';
import "./MainPage.css";
import Button from "../../utils/button/Button";
import img from "../../utils/img/imgs_main_page/f1/img.png";
import img1 from "../../utils/img/imgs_main_page/f1/img(1).png";
import img2 from "../../utils/img/imgs_main_page/f1/img(2).png";
import img3 from "../../utils/img/imgs_main_page/f1/img(3).png";
import img4 from "../../utils/img/imgs_main_page/f1/img(4).png";
import img5 from "../../utils/img/imgs_main_page/f1/img(5).png";
import img30 from "../../utils/img/imgs_main_page/f2/image30.png";
import img31 from "../../utils/img/imgs_main_page/f2/image31.png";
import img32 from "../../utils/img/imgs_main_page/f2/image32.png";
import video from "../../utils/img/imgs_main_page/f3/video.png";
import card1 from "../../utils/img/imgs_main_page/f5/card1.png";
import card2 from "../../utils/img/imgs_main_page/f5/card2.png";
import card3 from "../../utils/img/imgs_main_page/f5/card2.png";
import card4 from "../../utils/img/imgs_main_page/f5/card3.png";


function MainPage() {
    return (
        <main>
            <section className="first_section">
                <div className="first_section_block1">
                    <div className="first_section_block1_left">
                        <h1>Как вы будете действовать в чрезвычайных ситуациях</h1>
                        <h2>Цель проекта <span>HAND:</span></h2>
                        <p className="first_section_text">Формирование, на основе виртуального опыта и переживаний,
                            знаний и навыков направленных на
                            обдуманное, грамотное и предсказуемое поведение и действия при чрезвычайных проишествиях и
                            ДТП.</p>
                    </div>
                    <div className="first_section_block2_right">
                        <h2>Готовы ли вы?</h2>
                        <div className="first_section_block2_right_text">
                            <p className="first_section_text">Стань Героем в чрезвычайной ситуации!</p>
                            <p className="first_section_text">Грамотно спасать других и не погибнуть самому!</p>
                        </div>
                    </div>
                </div>
                <div className="first_section_with_img_and_button">
                    <div className="first_section_with_img">
                        <img src={img} alt="img"/>
                        <img src={img1} alt="img"/>
                        <img src={img2} alt="img"/>
                        <img src={img3} alt="img"/>
                        <img src={img4} alt="img"/>
                        <img src={img5} alt="img"/>
                    </div>
                    <Button type="button" placeholder="скачать игру" name="Скачать игру"/>
                </div>
            </section>
            <section className="second_section">
                <h2>Ознакомительная версия игры</h2>
                <div>
                    <img src={img30} alt=""/>
                    <img src={img31} alt=""/>
                    <img src={img32} alt=""/>
                </div>
                <div>
                    <p>Содержание игры, кроме получения необходимых в реальной жизни навыков и знаний, может привлечь
                        аудиторию новизной и неординарностью событий и переживаний, решением сложных и серьёзных задач
                        имевших место в реальной жизни.</p>
                    <div>
                        <p>На данный момент проект в разработке. Дорабатывается игра по обучению действиям при
                            чрезвычайных проишествиях и ДТП.</p>
                        <p>Автор проекта Башун Олег Гарикович</p>
                        <p>Все права защищены</p>
                    </div>
                    <Button type="button" placeholder="скачать игру" name="Скачать игру"/>
                    <div>
                        <p>Скачать «Hand Game 09 2020» в архиве (rar.78Mb)</p>
                        <p>ссайта файлообменника ru.files.fm</p>
                    </div>
                </div>
            </section>
            <section className="third_section_with_video">
                <video controls="controls" poster={video}>
                    <source src="" type=""/>
                    Тег video не поддерживается вашим браузером.
                </video>
            </section>
            <section className="fourth_section">
                <div>
                    <form action="">
                        <h1>Ваше мнение по проекту</h1>

                    </form>
                </div>
                <div>
                    <p>Автор проекта</p>
                    <p>«Help And Not Die»</p>
                    <h2>Олег</h2>
                    <h2>Башун</h2>
                </div>
                <div>
                    <div>
                        <p>Отвечаю онлайн</p>
                        {/*<a href="/"></a>*/}
                        {/*<a href="/"></a>*/}
                        {/*<a href="/"></a>*/}
                    </div>
                    <a href="https://AlehBashun@gmail.com">AlehBashun@gmail.com</a>
                </div>
            </section>
            <section className="fifth_section">
                <h2>Интересные источники</h2>
                <div>
                    <div>
                        <img src={card1} alt="Статистика аварийности"/>
                        <p>Статистика аварийности</p>
                    </div>
                    <div>
                        <img src={card2} alt="Сайт МЧС РБ"/>
                        <p>Сайт МЧС РБ</p>
                    </div>
                    <div>
                        <img src={card3} alt="Сайт МВД РБ"/>
                        <p>Сайт МВД РБ</p>
                    </div>
                    <div>
                        <img src={card4} alt="Проект ”Мой ключ”"/>
                        <p>Проект <br/>”Мой ключ”</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default MainPage;