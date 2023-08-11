import React from 'react';
import "./MedicalSupport.css";
import "./MediaMedicalSupport.css";
import BlockForMedicalSupport from "./BlockForMedicalSupport/BlockForMedicalSupport";
import {dataForBlock} from "./DataForBlock";
import img1 from "../../utils/img/img_MedicalSupport/s1/img01.png";
import img2 from "../../utils/img/img_MedicalSupport/s1/img02.png";
import img3 from "../../utils/img/img_MedicalSupport/s1/img03.png";
import img4 from "../../utils/img/img_MedicalSupport/s1/img04.png";
import img5 from "../../utils/img/img_MedicalSupport/s2/image92.png";
import img6 from "../../utils/img/img_MedicalSupport/s4/img1.png";
import img7 from "../../utils/img/img_MedicalSupport/s4/img2.png";
import img8 from "../../utils/img/img_MedicalSupport/s5/01.png";
import img9 from "../../utils/img/img_MedicalSupport/s5/02.png";
import img10 from "../../utils/img/img_MedicalSupport/s5/03.png";
import img11 from "../../utils/img/img_MedicalSupport/s5/04.png";
import img12 from "../../utils/img/img_MedicalSupport/s5/05.png";
import img13 from "../../utils/img/img_MedicalSupport/s5/06.png";
import img14 from "../../utils/img/img_MedicalSupport/s5/07.png";
import img15 from "../../utils/img/img_MedicalSupport/s5/08.png";
import img16 from "../../utils/img/img_MedicalSupport/s5/09.png";
import img17 from "../../utils/img/img_MedicalSupport/s5/10.png";

function MedicalSupport() {
    return (
        <div>
            <section className="containerForMedicalSupport first_section_MedicalSupport">
                <div className="first_section_MedicalSupport_left">
                    <div className="first_section_MedicalSupport_left_text">
                        <h1>Первая помощь пострадавшим при ДТП,медицинская помощь</h1>
                        <h2>Необходимая последовательность действий и основные требования при оказании первой помощи
                            пострадавшим, медицинской помощи</h2>
                    </div>
                    <div className="first_section_MedicalSupport_left_imgs">
                        <img src={img1} alt="MedicalSupport"/>
                        <img src={img2} alt="MedicalSupport"/>
                        <img src={img3} alt="MedicalSupport"/>
                        <img src={img4} alt="MedicalSupport"/>
                    </div>
                </div>
                <div className="first_section_MedicalSupport_right">
                    <ol className="first_section_MedicalSupport_right_list">
                        <li className="first_section_MedicalSupport_right_list_li">
                            <span><h3>Обеспечение личной безопасности!</h3> Остановите автомобиль на обочине или крае проезжей части, так чтобы любой появившейся на дороге транспорт (выезжающий из-за поворота или из низины, имел достаточное время и расстояние чтобы увидеть вас и исключить столкновение. </span>
                            <span>Включите аварийную сигнализацию, наденьте светоотражающий жёлтый жилет и выставите знак аварийной остановки (предупреждение возможного наезда и столкновений от проезжающего рядом транспорта).</span>
                            <span>Основной подход — любые действия которые могут привести к новым жертвам или усугубить ситуацию — не разумны: «Лучше один труп, чем два!». Если опасности не заметит человек, пытающийся оказать помощь пострадавшим лицам находящимся в повреждённой машине, то ещё одним пострадавшим станет больше и, возможно, уже некому будет вызвать «скорую помощь» и (или) службу спасения. Всегда вначале оцените обстановку. Сейчас вы учитесь действовать продуманно, придерживаясь определённых алгоритмов, и отступление от них может стоить жизни не только пострадавшему, но и вам и другим спасателям.</span>
                        </li>
                        <li className="first_section_MedicalSupport_right_list_li">
                            <span><h3>Оцените ситуацию на расстоянии,</h3> если не видите возможных угроз (резкое возгорание-взрыв, смещение объектов, падение линий электропередач, деревьев или других объектов и событий способных нанести вам вред) возьмите аптечку и огнетушитель (чтобы не расходовать драгоценное время на возвращение за ними при начале горения или определения необходимости срочной медицинской помощи) и подойдите ближе к повреждённому транспорту и пострадавшим.</span>
                        </li>
                        <li className="first_section_MedicalSupport_right_list_li">
                            <span> <h3>Оцените ситуацию вблизи,</h3> если не видите возможных угроз (резкое возгорание-взрыв, смещение объектов, падение линий электропередач, деревьев или других объектов и событий способных нанести вам вред). Приступайте к помощи.</span>
                        </li>
                        <li className="first_section_MedicalSupport_right_list_li">
                            <span><h3>Если двигатель автомобиля продолжает работать,</h3> а пострадавший водитель не может заглушить двигатель, выключите двигатель, повернув ключ зажигания или нажав кнопку START/STOP.</span>
                        </li>
                        <li className="first_section_MedicalSupport_right_list_li">
                            <span><h3>Определите количество пострадавших</h3> и их состояние. При наличии любого из факторов:</span>
                            <ul className="first_section_MedicalSupport_right_list_list">
                                <li><span>пассажиров с жалобами на очень плохое самочувствие, боли</span></li>
                                <li><span>пассажиров бес сознания</span></li>
                                <li><span>пассажиров с явными признаками повреждений и ранения</span></li>
                                <li><span>пассажиров не способных самостоятельно выбраться</span></li>
                            </ul>
                            <p className="first_section_MedicalSupport_right_list_list_text">Немедленно вызывайте скорую
                                помощь и службу спасения на место ДТП (тел. 101 и 103, или
                                общий номер 112).</p>
                            <p className="first_section_MedicalSupport_right_list_list_text">После того как вы
                                дозвонились в службу скорой помощи или службу спасения вам необходимо
                                говорить быстро, но чётко.</p>
                            <p className="first_section_MedicalSupport_right_list_list_text">Вам будут заданы следующие
                                вопросы:</p>
                            <ul className="first_section_MedicalSupport_right_list_list">
                                <li><span>количество пострадавших и их пол (Обязательно укажите количество пострадавших в ДТП,
                                    так как к каждому пострадавшему высылается отдельная бригада)</span></li>
                                <li><span>возраст, если не знаете — указывайте приблизительно (ребёнок, подросток, взрослый,
                                    молодой, среднего возраста, пожилой)</span></li>
                                <li><span>место ДТП: для городов адрес (улица и номер дома рядом или пересечение улиц), вне
                                    населённых пунктов — здесь важна максимальная точность и ориентиры для подъезда
                                    (выделяющиеся объекты рядом, километровые столбы и указатели на обочине дороги), при
                                    наличии программ навигации, то можете продиктовать данные координат или по карте
                                    название других находящихся рядом населённых пунктов и номер дороги</span></li>
                                <li><span>кто вызывает помощь - ваши фамилия, имя, отчество (оставьте свой номер телефона, так
                                    как, возможно, бригаде потребуется уточнить ваше местонахождение)</span></li>
                            </ul>
                        </li>
                        <li className="first_section_MedicalSupport_right_list_li">
                            <span><h3>Если состояние потерпевших стабильное и не ухудшается</h3> (не теряют сознание, нет явных и открытых кровотечений и иных повреждений, требующих эвакуации из транспорта) и нахождение их в повреждённом автомобиле или на проезжей части или обочине не угрожает их здоровью, не двигайте их и контролируйте их состояния до приезда скорой. Любое неквалифицированное извлечение или перемещение пострадавшего из транспорта и с дороги может нанести новые травмы и привести к смерти. Если требуется — укройте пострадавших одеждой или специальным теплосохраняющим покрывалом.</span>
                        </li>
                        <li className="first_section_MedicalSupport_right_list_li">
                            <span><h3>В случае возможного возгорания автомобиля</h3> (автомобиль с бензиновым двигателем сгорает за 5 минут, реальна угроза взрыва), его смещение (опрокидывания) или погружения в воду. Или других угроз для пострадавших. Приступайте к эвакуации пострадавших из транспорта или другого опасного места: ваши действия должны быть продуманными. Неверные действия могут стоить жизни не только пострадавшему, но и вам, и другим лицам рядом. Всегда будьте внимательны на месте происшествия!</span>
                        </li>
                    </ol>
                </div>
            </section>
            <section className="second_section_MedicalSupport">
                <div className="containerForMedicalSupport">
                    <div className="second_section_MedicalSupport_block">

                        <div className="second_section_MedicalSupport_block_img">
                            <img src={img5} alt="MedicalSupport"/>
                        </div>
                        <div className="second_section_MedicalSupport_block_text">
                            <h2>Эвакуация пострадавших.</h2>
                            <div>
                                <p>При ДТП наиболее вероятно повреждение шейного отдела позвоночника. Неправильное
                                    извлечение
                                    пострадавшего может привести к его смерти!</p>
                                <p> Определите уровень сознания: реагирует ли человек на происходящее. Если признаков
                                    нет то
                                    используйте 10% раствора аммиака из аптечки (на кусок ваты или бинта нанесите
                                    немного
                                    раствора и поднесите на 0,5–1 секунду к носовым отверстиям пострадавшего) для
                                    приведения
                                    в
                                    сознание.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="containerForMedicalSupport third_section_ForMedicalSupport_align_right">
                <div className="third_section_ForMedicalSupport">
                    <div className="third_section_ForMedicalSupport_main_title">
                        <h2>Способы перемещения пострадавшего в безопасное место или другой безопасный транспорт</h2>
                        <p>Перемещать пострадавшего до транспорта или в безопасное место можно различными способами,
                            зависящими от характера травм и состояния пострадавшего, количества участников перемещения и
                            их
                            физических возможностей.</p>
                    </div>
                    <div>
                        <BlockForMedicalSupport data={dataForBlock}/>
                    </div>
                </div>
            </section>
            <section className="containerForMedicalSupport forth_section_MedicalSupport">
                <div className="forth_section_MedicalSupport_first_block">
                    <div className="forth_section_MedicalSupport_first_block_left">
                        <img src={img6} alt="MedicalSupport"/>
                    </div>
                    <div className="forth_section_MedicalSupport_first_block_right">
                        <h2>
                            Реанимация при клинической смерти
                        </h2>
                        <p>В случае отсутствия сознания, дыхания и сердцебиения, широкий зрачок, наличие этих симптомов
                            —
                            показание к проведению реанимационных мероприятий по системе ABC (проходимость верхних
                            дыхательных путей, искусственное дыхание, массаж сердца).</p>
                        <h3>Действия:</h3>
                        <p>Пострадавшего положите на спину в безопасном месте на твёрдую поверхность.</p>
                        <p> Ликвидируйте закупорку верхних дыхательных путей. Причиной её могут быть западение языка,
                            инородное тело, отёк и спазм гортани, травма.</p>
                        <p> Положение головы и подбородка: голова назад, подбородок вперёд, нижняя челюсть выдвигается
                            вперёд.</p>
                        <p>Оцените дыхание: если слабое или отсутствует — проводите вентиляцию лёгких рот в рот или рот
                            в нос, используйте приспособления для искусственного дыхания (исключили из последних версий
                            аптечкиL).</p>
                    </div>
                </div>
                <div className="forth_section_MedicalSupport_second_block">
                    <div className="forth_section_MedicalSupport_second_block_left">
                        <img src={img7} alt="MedicalSupport"/>
                    </div>
                    <div className="forth_section_MedicalSupport_second_block_right">
                        <div>
                            <h3>При отсутствии сердцебиения начинайте непрямой массаж сердца.</h3>
                            <p>Точка сжатия грудной клетки — 2 см выше нижнего края грудины по средней линии.</p>
                            <p> Ладонь правой руки — на точке сжатия.</p>
                            <p> Ладонь левой руки лежит поверх ладони правой.</p>
                            <p> Пальцы обеих рук раздвинуты веером и не касаются грудной клетки.</p>
                            <p> Руки прямые.</p>
                            <p> Глубина сжатия более 3,5 см.</p>
                        </div>
                        <div className="forth_section_MedicalSupport_second_block_right_second">
                            <h3>Техника проведения реанимационных мероприятий:</h3>
                            <p>Если помощь оказывается одним человеком, на 2 вдоха — 15 сжатий, если двумя — на 1 вдох 5
                                сжатий. Постоянно контролируйте состояние больного: сужение зрачка на свет, появление
                                пульса на сонной артерии, улучшение цвета кожи, самостоятельное дыхание. Все это
                                свидетельствует об эффективной реанимации.</p>
                            <h4>Помните!</h4>
                            <p>Если больной без сознания, но дыхание и сердцебиение сохранены, то его как единое целое
                                (зафиксировав шейный отдел позвоночника руками или воротником), нужно перевернуть на
                                живот и постоянно следить за проходимостью дыхательных путей, дыханием и сердцебиением.
                                В случае нарушения этих функций немедленно приступать к проведению реанимационных
                                мероприятий.</p>
                            <p>
                                <span>Ваша цель — сохранить жизнь пострадавшего до прибытия медицинских работников!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="containerForMedicalSupport">
                <div className="fifth_section_MedicalSupport">
                    <div className="fifth_section_MedicalSupport_block">
                        <div className="fifth_section_MedicalSupport_block_left">
                            <h2>Ваши действия при определённых повреждениях и состояниях пострадавших</h2>
                            <img src={img8} alt="MedicalSupport"/>
                        </div>
                        <div className="fifth_section_MedicalSupport_block_right">
                            <h2>Кровотечение</h2>
                            <p>При подозрении на внутреннее кровотечение, проявляющееся бледностью кожных покровов,
                                холодным
                                потом, нарастающей слабостью, потерей сознания.</p>
                            <p>Ваши действия — нужно уложить больного на спину с приподнятыми ногами и срочно вызвать
                                врача.</p>
                            <h3>Наружные кровотечения подразделяются на:</h3>
                            <ul className="fifth_section_MedicalSupport_block_right_list">
                                <li><span
                                    className="fifth_section_MedicalSupport_block_right_list_notice">венозное</span><span>— кровь тёмного цвета выделяется непрерывной струёй. Ваши
                                    действия — наложение тугой повязки на раневую поверхность используя стерильный
                                    медицинский бинт из аптечки.</span>
                                </li>
                                <li><span
                                    className="fifth_section_MedicalSupport_block_right_list_notice">артериальной</span><span>— наиболее опасный вид — отличается тем, что кровь
                                    ярко-алого цвета выделяется мощной пульсирующей струёй. Ваши действия — методом
                                    остановки кровотечения является пальцевое прижатие повреждённого сосуда выше места
                                    ранения с последующим наложением тугой повязки стерильным бинтом из аптечки на рану.
                                    В случае, если кровотечение продолжается, наложите кровоостанавливающий жгут из
                                    аптечки — тугой повязки на 1,5 часа с фиксацией времени.</span>
                                </li>
                                <li><span
                                    className="fifth_section_MedicalSupport_block_right_list_notice">капиллярное</span><span> кровотечение отмечается при значительном раневом дефекте
                                    кожного покрова. Кровоточит вся поверхность раны. Ваши действия — наложите тугую
                                    повязку стерильным бинтом из аптечки на рану или используйте стерильные салфетки.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="fifth_section_MedicalSupport_block">
                        <div className="fifth_section_MedicalSupport_block_left">
                            <img src={img9} alt="MedicalSupport"/>
                        </div>
                        <div className="fifth_section_MedicalSupport_block_right">
                            <h2>Переломы</h2>
                            <div>
                                <p>Переломы подразделяются на открытые и закрытые.</p>
                                <p> Признаки закрытого перелома: сильная боль, резкое усиление боли при движении или
                                    попытке опереться на повреждённую конечность, деформацию и отёчность в месте
                                    повреждения.</p>
                                <p> Признаки открытого перелома: деформация и отёчность конечности в месте повреждения,
                                    обязательное наличие раны, из просвета раны могут выступать костные отломки.</p>
                            </div>
                            <h3>Ваши действия:</h3>
                            <ul className="fifth_section_MedicalSupport_block_right_list">
                                <li><span>обезбольте используя охлаждающий гипертермический пакет из аптечки</span></li>
                                <li><span>при наличии раны обработайте её (дезинфицирующими препаратами (Йод 5% из аптечки) по
                                    периметру раны без попадания внутрь раны) и укройте стерильным бинтом</span>
                                </li>
                                <li><span>наложите шину или другой жёсткий плоский или цилиндрический предмет, зафиксировав за
                                    сустав выше и ниже места повреждения не стерильными бинтами из аптечки</span>
                                </li>
                                <li><span>не пытайтесь вправить костные отломки!</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="fifth_section_MedicalSupport_block">
                        <div className="fifth_section_MedicalSupport_block_left">
                            <img src={img10} alt="MedicalSupport"/>
                        </div>
                        <div className="fifth_section_MedicalSupport_block_right">
                            <h2>Ожоги</h2>
                            <div>
                                <p>По степени поражения ожоги подразделяются на 4 степени.</p>
                                <p> 1–2 степень — покраснение кожи, появление пузырей.</p>
                                <p> 3–4 степень — появление участков обугленной кожи с обильным выделением кровянистой
                                    жидкости.</p>
                            </div>
                            <h3>Ваши действия:</h3>
                            <ul className="fifth_section_MedicalSupport_block_right_list">
                                <li><span>при ожогах 1–2 степени как можно быстрее подставьте обожжённую поверхность под струю
                                    холодной воды, наложите чистую сухую повязку используя стерильный бинт, поверх ткани
                                    приложите холод — охлаждающий гипертермический пакет из аптечки</span>
                                </li>
                                <li><span>при ожогах 3–4 степени накройте область ожога стерильным бинтом, поверх ткани
                                    наложите холод (охлаждающий гипертермический пакет из аптечки)</span>
                                </li>
                                <li><span>при обширных ожогах уложите пострадавшего раненой поверхностью вверх, накройте ожог
                                    чистыми бинтами, поверх бинтов — холод(охлаждающий гипертермический пакет из
                                    аптечки), дайте обильное питьё, вызовите «Скорую помощь»</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="fifth_section_MedicalSupport_block">
                        <div className="fifth_section_MedicalSupport_block_left align_img">
                            <img src={img11} alt="MedicalSupport"/>
                        </div>
                        <div className="fifth_section_MedicalSupport_block_right">
                            <h2>Попадание инородного тела в верхние дыхательные пути</h2>
                            <div>
                                <p>Признаки: внезапно появляются кашель, удушье, рвота, обильное слезотечение, лицо
                                    краснеет, затем синеет, потеря сознания.</p>
                                <p> ПОМНИТЕ! Для оказания помощи у вас 3–5 минут.</p>
                            </div>
                            <h3>Ваши действия:</h3>
                            <ul className="fifth_section_MedicalSupport_block_right_list">
                                <li><span>ударьте несколько раз раскрытой ладонью в межлопаточную область. В случае отсутствия
                                    эффекта встаньте за спиной у пострадавшего, обхватите его руками так, чтобы руки,
                                    сложенные в замок, находились у пострадавшего над подложечной областью, и резко
                                    надавите на подложечную область сложенными в замок руками</span>
                                </li>
                                <li><span>если больной без сознания, переверните его на спину, попытайтесь рукой достать
                                    инородное тело и резко надавите на подложечную область</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="fifth_section_MedicalSupport_block">
                        <div className="fifth_section_MedicalSupport_block_left">
                            <img src={img12} alt="MedicalSupport"/>
                        </div>
                        <div className="fifth_section_MedicalSupport_block_right">
                            <h2>Потеря сознания</h2>
                            <div>
                                <p>Причины: высокая температура окружающей среды, недостаток воздуха, эмоциональный
                                    стресс, внутреннее кровотечение, острое сердечно-сосудистое заболевание.</p>

                            </div>
                            <h3>Ваши действия:</h3>
                            <ul className="fifth_section_MedicalSupport_block_right_list">
                                <li><span>проверьте наличие сознания, дыхания, сердцебиения</span></li>
                                <li><span>при их отсутствии начинайте реанимационные мероприятия по системе ABC</span>
                                </li>
                                <li><span>потеря сознания кратковременная (до трёх минут), сердцебиение и дыхание сохранены:
                                    уложите пострадавшего на спину, приподнимите ноги, расстегните воротник сорочки,
                                    ослабьте галстук и поясной ремень, обеспечьте доступ воздуха. Дайте вдохнуть пары
                                    нашатырного спирта</span>
                                </li>
                                <li><span>при потере сознания более трёх минут переверните больного на живот, очистите верхние
                                    дыхательные пути, приложите холод(охлаждающий гипертермический пакет из аптечки) к
                                    голове. Наблюдайте за дыханием, сердцебиением, срочно вызовите медицинскую помощь</span>
                                </li>
                                <li><span>ПОМНИТЕ! Во всех случаях потери сознания нужна квалифицированная медицинская
                                    помощь</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="fifth_section_MedicalSupport_block">
                        <div className="fifth_section_MedicalSupport_block_left">
                            <img src={img13} alt="MedicalSupport"/>
                        </div>
                        <div className="fifth_section_MedicalSupport_block_right">
                            <h2>Cудорожный припадок</h2>
                            <div>
                                <p>Причины: эпилепсия, истерия.</p>
                                <p> Признаки эпилепсии: внезапная потеря сознания с предшествующим криком перед
                                    падением, судороги, пена изо рта с примесью крови, широкие зрачки, сохранённый пульс
                                    на сонной артерии, непроизвольное мочеиспускание.</p>
                            </div>
                            <h3>Ваши действия:</h3>
                            <ul className="fifth_section_MedicalSupport_block_right_list">
                                <li><span>поверните больного на бок</span></li>
                                <li><span>прижмите его плечи к полу</span></li>
                                <li><span>вставьте плотный валик из ткани, резины между коренными зубами</span></li>
                                <li><span>обеспечьте безопасность больного (высок риск травматизации), срочно вызовите
                                    медицинскую помощь</span>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="fifth_section_MedicalSupport_block">
                        <div className="fifth_section_MedicalSupport_block_left">
                            <img src={img14} alt="MedicalSupport"/>
                        </div>
                        <div className="fifth_section_MedicalSupport_block_right">
                            <h2>Боли в грудной клетке</h2>
                            <div>
                                <p>Внимание! Боль носит давящий, жгущий, режущий характер, располагается по центру груди
                                    или
                                    в левой половине грудной клетки, отдаёт в спину, руки, сопровождается слабостью,
                                    холодным потом.</p>
                                <p> Причина: острое сердечно-сосудистое заболевание.</p>
                            </div>
                            <h3>Ваши действия:</h3>
                            <ul className="fifth_section_MedicalSupport_block_right_list">
                                <li><span>обеспечьте больному максимальный покой, доступ свежего воздуха. Срочно вызовите
                                    медицинскую помощь</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="fifth_section_MedicalSupport_block">
                        <div className="fifth_section_MedicalSupport_block_left align_img">
                            <img src={img15} alt="MedicalSupport"/>
                        </div>
                        <div className="fifth_section_MedicalSupport_block_right">
                            <h2>Боли в животе</h2>
                            <div>
                                <p>Причина: нарушение в работе пищеварительного тракта.</p>
                                <p> Если боль вверху живота тупого, опоясывающего характера. Ваши действия: холод,
                                    голод,
                                    покой, приём но-шпы и фестала.</p>
                                <p> Если боль в правом подреберье. Ваши действия: холод, покой, приём но-шпы.</p>
                                <p> Если боль под ложечкой, изжога. Ваши действия: приём маалокса.</p>
                                <p> Если боль вокруг пупка схваткообразная, жидкий стул, тошнота, рвота.</p>
                                <p> ПОМНИТЕ! При болях в животе не следует без консультации врача принимать
                                    обезболивающие
                                    препараты. Боль в животе может быть признаком тяжёлого заболевания органов брюшной
                                    полости. В случае, если эффекта от рекомендуемых мер нет, необходимо обратиться к
                                    врачу.</p>
                            </div>
                        </div>
                    </div>
                    <div className="fifth_section_MedicalSupport_block">
                        <div className="fifth_section_MedicalSupport_block_left fifth_section_MedicalSupport_block_left_group_imgs">
                            <img src={img16} alt="MedicalSupport"/>
                            <img src={img17} alt="MedicalSupport"/>
                        </div>
                        <div className="fifth_section_MedicalSupport_block_right">
                            <h2>Аллергическая реакция</h2>
                            <div>
                                <p>Появление сыпи мелкоточечной на коже, зуд, нарастающая отёчность век, губ.</p>
                                <p>Вызвать аллергическую реакцию может приём лекарств, пищевых продуктов, укус
                                    насекомых.</p>
                            </div>
                            <h3>Ваши действия:</h3>
                            <ul className="fifth_section_MedicalSupport_block_right_list">
                                <li><span>положите холод на место укуса или инъекции</span></li>
                                <li><span>срочно обратитесь к врачу</span></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default MedicalSupport;