import React from 'react';
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

function MainPage(props) {
    return (
        <main>
            <section>
                <h1>Как вы будете действовать в чрезвычайных ситуациях</h1>
                <h2>Цель проекта <span>HAND:</span></h2>
                <p>Формирование, на основе виртуального опыта и переживаний, знаний и навыков направленных на
                    обдуманное, грамотное и предсказуемое поведение и действия при чрезвычайных проишествиях и ДТП.</p>
            </section>
            <section>
                <h2>Готовы ли вы?</h2>
                <div>
                    <p>Стань Героем в чрезвычайной ситуации!</p>
                    <p>Грамотно спасать других и не погибнуть самому!</p>
                </div>
            </section>
            <section>
                <div>
                    <img src={img} alt="img"/>
                    <img src={img1} alt="img"/>
                    <img src={img2} alt="img"/>
                    <img src={img3} alt="img"/>
                    <img src={img4} alt="img"/>
                    <img src={img5} alt="img"/>
                    <Button type="button" placeholder="скачать игру" name="Скачать игру"/>
                </div>
            </section>
            <section>
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
            <section>
                <video  controls="controls" poster={video}>
                    <source src="" type=""/>
                    Тег video не поддерживается вашим браузером.
                </video>
            </section>
        </main>
    );
}

export default MainPage;