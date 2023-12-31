import React from 'react';
import "./DtpWillHappened.css";
import "./MediaDtpWillHappened.css";
import Icon_light from "../../utils/img/img_dtpWillHappened/icon_light.png";
import Frame from "../../utils/img/img_dtpWillHappened/Frame.png";
import Icon from "../../utils/img/img_dtpWillHappened/icon.png";
import Component1 from "../../utils/img/img_dtpWillHappened/Component1.png";
import Icon1 from "../../utils/img/img_dtpWillHappened/icon(1).png";
import Icon2 from "../../utils/img/img_dtpWillHappened/icon(2).png";
import Icon3 from "../../utils/img/img_dtpWillHappened/icon(3).png";
import Image from "../../utils/img/img_dtpWillHappened/image.png";
import Icon4 from "../../utils/img/img_dtpWillHappened/icon(4).png";
import Icon5 from "../../utils/img/img_dtpWillHappened/icon(5).png";
import Icon6 from "../../utils/img/img_dtpWillHappened/icon(6).png";
import Icon7 from "../../utils/img/img_dtpWillHappened/icon(7).png";
import Icon8 from "../../utils/img/img_dtpWillHappened/icon(8).png";
import Image1 from "../../utils/img/img_dtpWillHappened/image(1).png";
import Image2 from "../../utils/img/img_dtpWillHappened/image49.png";

function DtpWillHappened() {
    return (
        <div>
            <section className="first_section_DtpWillHappened">
                <div className="container">
                    <h1 className="container_title">Что делать после ДТП</h1>
                    <div className="container_table">
                        <div className="container_table_left">
                            <div>
                                <div className="container_table_block">
                                    <div className="container_table_block_number_and_img">
                                        <p className="container_table_block_number">1</p>
                                        <img src={Icon_light} alt="Icon_light" className="container_table_block_img"/>
                                    </div>
                                    <div className="container_table_for_title">
                                        <h2 className="container_table_block_title">Включить аварийную сигнализацию</h2>
                                    </div>
                                </div>

                                <div className="container_table_block">
                                    <div className="container_table_block_number_and_img">
                                        <p className="container_table_block_number">2</p>
                                        <img src={Frame} alt="Frame"/>
                                    </div>
                                    <div className="container_table_for_title">
                                        <h2 className="container_table_block_title">Установить знак аварийной
                                            остановки</h2>
                                        <p>Он устанавливается на расстоянии не менее 15 метров от транспортного
                                            стредства в
                                            населенных
                                            пунктах и 30 м —вне населенных пунктов</p>
                                    </div>
                                </div>

                                <div className="container_table_block">
                                    <div className="container_table_block_number_and_img">
                                        <p className="container_table_block_number">3</p>
                                        <img src={Icon} alt="Icon"/>
                                    </div>
                                    <div className="container_table_for_title">
                                        <h2 className="container_table_block_title">Осмотреть себя и пассажиров</h2>
                                        <p>Убедитесь, что с вами, вашими пассажирами, а так же людьми в другой машине
                                            все в
                                            порядке.
                                            Если люди получили травмы, необходимо немедленно вызвать Скорую помощь и, по
                                            по
                                            возможности,
                                            оказать первую медицинскую помощь</p>
                                    </div>
                                </div>

                                <div className="container_table_block point_contact">
                                    <div className="container_table_block_number_and_img">
                                        <p className="container_table_block_number">4</p>
                                        <img src={Component1} alt="Component1"/>
                                    </div>
                                    <div className="container_table_for_title">
                                        <h2 className="container_table_block_title">Вызвать Скорую помощь (если это
                                            необходимо) и сотрудника ГИБДД</h2>
                                        <p>(если повреждения автомобилей минимальны, то можно обойтись и без этого)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container_table_right">
                            <div>
                                <div className="container_table_block">
                                    <div className="container_table_block_number_and_img">
                                        <p className="container_table_block_number">5</p>
                                        <img src={Icon1} alt="Icon1"/>
                                    </div>
                                    <div className="container_table_for_title">
                                        <h2 className="container_table_block_title">Позвонить в свою страховую компанию
                                            и сообщить о ДТП</h2>
                                        <p>Попросите страховую компанию вызвать аварийного комиссара (если подобная
                                            услуга
                                            предоставляется)</p>
                                    </div>
                                </div>

                                <div className="container_table_block">
                                    <div className="container_table_block_number_and_img">
                                        <p className="container_table_block_number">6</p>
                                        <img src={Icon2} alt="Icon2"/>
                                    </div>
                                    <div className="container_table_for_title">
                                        <h2 className="container_table_block_title">Заполнить бланк извещения о ДТП</h2>
                                        <p>Лучше всего, если в этом вам поможет аварийный комиссар</p>
                                    </div>
                                </div>

                                <div className="container_table_block">
                                    <div className="container_table_block_number_and_img">
                                        <p className="container_table_block_number">7</p>
                                        <img src={Icon3} alt="Icon3"/>
                                    </div>
                                    <div className="container_table_for_title">
                                        <h2 className="container_table_block_title">Сфотографировать поврежденные авто
                                            со всех строн</h2>
                                        <p>Постарайтесь, чтобы в кадры попали помимо машин дорожные знаки, сфетофор и
                                            так
                                            далее</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="second_section_dttWillHappened">
                <div className="second_section_dttWillHappened_container">
                    <h2 className="second_section_dttWillHappened_container_main_title">Для вызова с <span>мобильного телефона</span> воспользуйтесь
                        одним из этих номеров</h2>
                    <div className="second_section_dttWillHappened_row">
                        <div className="second_section_dttWillHappened_row_block">
                            <p className="second_section_dttWillHappened_row_block_number">112</p>
                            <p className="second_section_dttWillHappened_row_block_text">Номер работает, даже когда на счёту закончились деньги или сим-карта заблокирована</p>
                        </div>
                        <div className="second_section_dttWillHappened_row_block">
                            <p className="second_section_dttWillHappened_row_block_number">02</p>
                            <p className="second_section_dttWillHappened_row_block_text">Для набора номера с мобильного телефона надо набрать +8 — код города — 02</p>
                        </div>
                        <div className="second_section_dttWillHappened_row_block">
                            <p className="second_section_dttWillHappened_row_block_number">102</p>
                            <p className="second_section_dttWillHappened_row_block_text">В России уже начался переход на трехзначные номера экстренных служб (уже действует в Украине, Белоруси и Казахстане)</p>
                        </div>
                    </div>
                    <div className="second_section_dttWillHappened_second_block">
                        <div className="second_section_dttWillHappened_second_block_img">
                            <img src={Image} alt="112"/>
                        </div>
                        <div className="second_section_dttWillHappened_second_block_text">
                            <h3>Дозвонившись в ГАИ, автомобилист должен сообщить оператору следующую информацию</h3>
                            <div>
                                <ol className="second_section_dttWillHappened_second_block_list">
                                    <li className="second_section_dttWillHappened_second_block_list_with_number"><span>Место происшествия:</span>
                                        <ul className="second_section_dttWillHappened_second_block_list_list">
                                            <li><span>если ДТП произошло в городе, следует сообщить адрес</span></li>
                                            <li><span>если авария произошла за чертой города, то сообщается название трассы и
                                                номер километра. Также желательно сообщить название ближайшего
                                                населенного пункта
                                            </span></li>
                                            <li><span>если рядом с местом ДТП находятся какие-либо достопримечательности, то о
                                                них следует упомянуть в телефонном разговоре. Эта информация поможет
                                                сотрудникам ГАИ сориентироваться
                                            </span></li>
                                        </ul>
                                    </li>
                                    <li className="second_section_dttWillHappened_second_block_list_with_number"><span>Количество участников происшествия</span></li>
                                    <li className="second_section_dttWillHappened_second_block_list_with_number"><span>Наличие пострадавших и их количество</span></li>
                                </ol>
                            </div>

                            <div className="second_section_dttWillHappened_second_block_text_after_block">
                                <p>Если в аварии пострадали люди, то помимо ГИБДД нужно позвонить в скорую помощь.
                                    Оператору
                                    сообщаем о количестве пострадавших, месте аварии и характере полученных травм.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="third_section_dtpWillHappened">
                <h1 className="third_section_dtpWillHappened_main_title">Передвигать машины и «отъезжать в
                    сторонку» <span
                        className="third_section_dtpWillHappened_main_title_subtitle1">разрешается</span> только в трех
                    случаях <span
                        className="third_section_dtpWillHappened_main_title_subtitle2">(см. пункт 2.5 ПДД)</span></h1>
                <div className="container_table">
                    <div className="container_table_left">

                        <div className="container_table_block">
                            <div className="container_table_block_number_and_img">
                                <p className="container_table_block_number">1</p>
                                <img src={Icon4} alt="Icon4"/>
                            </div>
                            <div className="container_table_for_title">
                                <h2 className="container_table_block_title">Если есть пострадавший, которого надо
                                    срочно
                                    доставить в больницу</h2>
                                <p>а других возможностей для этого нет (после приезда в больницу участник ДТП оязан
                                    вернуться на
                                    место аварии и дождаться полиции</p>
                            </div>
                        </div>

                        <div className="container_table_block">
                            <div className="container_table_block_number_and_img">
                                <p className="container_table_block_number">2</p>
                                <img src={Icon5} alt="Icon5"/>
                            </div>
                            <div className="container_table_for_title">
                                <h2 className="container_table_block_title">Если машины в результате аварии</h2>
                                <p>полностью перекрыли движение (в этом случае вы можете отъехать в сторону)</p>
                            </div>
                        </div>


                        <div className="container_table_block">
                            <div className="container_table_block_number_and_img">
                                <p className="container_table_block_number">3</p>
                                <img src={Icon6} alt="Icon6"/>
                            </div>
                            <div className="container_table_for_title">
                                <h2 className="container_table_block_title">Если все участники аварии согласны с
                                    обстоятельствами ДТП</h2>
                                <p>и нет пострадавших, то можно приехать на пост ГИБДД и там заявить об аварии (пункт
                                    2.6 ПДД).
                                    До этого момента участники аварии должны составить подробную схему ДТП с описанием
                                    всех
                                    обстоятельств аварии (время, видимость, погодные условия и так далее), подписать ее
                                    и
                                    сделать фото и видео съемку</p>
                            </div>
                        </div>
                    </div>


                    <div className="container_table_right right_table_in_second_section_dtpWillHappened">
                        <div className="container_table_block">
                            <div className="container_table_block_number_and_img">
                                <img src={Icon7} alt="Icon7"/>
                            </div>
                            <div className="container_table_for_title">
                                <h2 className="container_table_block_title"><span
                                    className="right_table_in_second_section_dtpWillHappened_span">Важно</span></h2>
                                <p>если при ДТП вас начинают запугивать, шантажировать, угрожать и предлагают решить
                                    вопрос на
                                    месте, конпенсировав ущерб, знайте — перед вами мошенники. Не поддавайтесь на их
                                    провокации,
                                    вызывайте ГИБДД и сохраняйте спокойствие</p>
                            </div>
                        </div>

                        <div className="container_table_block">
                            <div className="container_table_block_number_and_img">
                                <img src={Icon8} alt="Icon7"/>
                            </div>

                            <div className="container_table_for_title">
                                <h2 className="container_table_block_title"><span
                                    className="right_table_in_second_section_dtpWillHappened_span">Внимание</span></h2>
                                <p>Оставление водителем место ДТП влечет лишения права управления транспортными
                                    средствами на
                                    строк от одного года до полутора лет или административный арест на срок до 15
                                    суток</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fourth_section_dtpWillHappened">
                <div className="fourth_section_dtpWillHappened_container">
                    <div className="fourth_section_dtpWillHappened_container_text">
                        <h1 className="fourth_section_dtpWillHappened_container_main_title">Подытожим</h1>
                        <p>Первым делом водитель должен предупредить остальных участников дорожного движения об
                            опасности — включить аварийную световую сигнализацию и выставить на дорогу знак аварийной
                            остановки.</p>
                        <p> Затем внимание нужно уделить пострадавшим. Если оказать им необходимую помощь или вызвать
                            скорую невозможно, следует принять меры по доставке раненых в ближайшее медучреждение на
                            попутном транспорте. Если последнее невыполнимо, то возможно покинуть место ДТП для доставки
                            пострадавшего на авто, участвовавшем в аварии (это должно быть безопасно). Однако прежде
                            водителю необходимо при свидетелях зафиксировать положение машин и относящихся к
                            происшествию предметов и следов, в том числе торможения. Это поможет дальнейшему
                            расследованию. Далее важно записать фамилии и адреса очевидцев ДТП, сообщить о произошедшем
                            в милицию.</p>
                    </div>

                    <div className="fourth_section_dtpWillHappened_container_img">
                        <img src={Image1} alt="Image1"/>
                    </div>
                </div>
            </section>
            <section className="sixth_section_dtpWillHappened">
                <div className="sixth_section_dtpWillHappened_with_img">
                    <img src={Image2} alt="Image2"/>
                </div>
                <div className="sixth_section_dtpWillHappened_right_side">
                    <div className="sixth_section_dtpWillHappened_main_title_h1">
                        <h1>Как еще <span>легально</span> покинуть место ДТП?</h1>
                    </div>
                    <div>
                        <p className="sixth_section_dtpWillHappened_title_text">Для этого должны одновременно
                            выполняться следующие условия:</p>
                        <ul className="sixth_section_dtpWillHappened_list">
                            <li><span>в ДТП вред причинен только имуществу участников</span></li>
                            <li><span>в аварию попали два ТС, а их водители вправе управлять транспортом соответствующей категории
                            и не в претензии к физическому состоянию друг друга</span>
                            </li>
                            <li><span>есть действующие договоры обязательного страхования гражданской ответственности владельцев
                            ТС</span>
                            </li>
                            <li><span>водители согласны с обстоятельствами причинения имущественного вреда, перечнем видимых
                            повреждений, которые внесены в бланки извещения о ДТП</span>
                            </li>
                            <li><span>повреждения каждой машины оценены на сумму до 400 евро</span></li>
                        </ul>
                        <p className="sixth_section_dtpWillHappened_title_text">Если одно из этих условий не
                            выполняется, то покидать место ДТП его участники не имеют
                            права.</p>
                        <div>
                            <h2 className="sixth_section_dtpWillHappened_main_title_h2">Что грозит нарушителям?</h2>
                            <p className="sixth_section_dtpWillHappened_title_text">За оставление водителем места ДТП,
                                когда это запрещено, предусмотрено наказание — штраф
                                от 5
                                до 25 базовых величин или лишение права управления сроком до 2 лет. Водителя, который
                                заведомо оставил потерпевшего в опасном для здоровья или жизни состоянии, привлекут к
                                уголовной ответственности.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DtpWillHappened;