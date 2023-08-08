import React from 'react';
import "./DtpWithAnimals.css";
import "./MediaDtpWithAnimals.css";
import Table from "./TableAnimal/Table";
import {data, data1} from "./DataForTable";
import Img from "../../utils/img/img_dtpWithAnimals/img.png";
import Img1 from "../../utils/img/img_dtpWithAnimals/img(1).png";
import Img2 from "../../utils/img/img_dtpWithAnimals/img03.png";
import Img3 from "../../utils/img/img_dtpWithAnimals/img02.png";
import Img4 from "../../utils/img/img_dtpWithAnimals/img01.png";
import Img5 from "../../utils/img/img_dtpWithAnimals/img(1).png";
import Img6 from "../../utils/img/img_dtpWithAnimals/img_4.png";
import Img7 from "../../utils/img/img_dtpWithAnimals/img_2.png";
import Img8 from "../../utils/img/img_dtpWithAnimals/img_3.png";

function DtpWithAnimals() {
    return (
        <div>
            <section className="container_dtpWithAnimal">
                <div className="first_section_dtpWithAnimal_left">
                    <h1 className="container_dtpWithAnimal_main_title">ДТП с животными</h1>
                    <h3 className="container_dtpWithAnimal_third_title">Первоначально при любом ДТП!</h3>
                    <p className="first_section_dtpWithAnimal_left_text">Если в ходе движения автомобиля причинен вред
                        жизни или здоровью гражданина, его имуществу либо
                        имуществу организации (далее — вред), то имеет место дорожно-транспортное происшествие (ДТП).
                        Полагаем, если на автомобиле совершен наезд на животное, то в любом случае причиняется вред.
                        Следовательно, это ДТП.</p>

                        <p className="first_section_dtpWithAnimal_left_text">В связи с этим водитель должен:</p>
                    <div className="first_section_dtpWithAnimal_left_list">
                        <ol>
                            <li><span>остановить автомобиль сразу после столкновения</span></li>
                            <li><span>включить аварийную сигнализацию и выставить знак аварийной остановки. <p className="first_section_dtpWithAnimal_left_list_notice">На заметку!</p> <p>Знак нужно выставить на расстоянии не менее 15 метров от автомобиля в населенном пункте и не менее 40 метров — вне населенных пунктов.</p></span>
                            </li>
                            <li><span>принять меры по оказанию необходимой помощи пострадавшим (при их наличии), в т.ч. вызвать скорую медицинскую помощь</span>
                            </li>
                            <li><span>вызвать ГАИ</span></li>
                            <li><span>до прибытия сотрудников ГАИ принять все возможные меры по сохранению следов и предметов, относящихся к ДТП, их ограждению и организации объезда места ДТП</span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="first_section_dtpWithAnimal_right">
                    <img className="first_section_dtpWithAnimal_right_first_img"
                        src={Img} alt="dtpWithAnimal"/>
                    <img className="first_section_dtpWithAnimal_right_second_img"
                        src={Img1} alt="dtpWithAnimal"/>
                    <div className="first_section_dtpWithAnimal_right_block">
                        <h3 className="first_section_dtpWithAnimal_right_notice">Обратите внимание!</h3>
                        <p className="first_section_dtpWithAnimal_right_text">За оставление места ДТП в случаях, когда это запрещено законодательными актами, предусмотрены
                            штраф в размере от 5 до 25 БВ или лишение права управления транспортными средствами сроком
                            до 2 лет.</p>
                    </div>
                </div>
            </section>
            <section className="container_dtpWithAnimal second_section_dtpWithAnimal">
                <div className="second_section_dtpWithAnimal_right_block">
                    <img src={Img2} alt="dtpWithAnimal" className="second_section_dtpWithAnimal_right_block_first_img"/>
                    <img src={Img3} alt="dtpWithAnimal" className="second_section_dtpWithAnimal_right_block_second_img"/>
                    <img src={Img4} alt="dtpWithAnimal" className="second_section_dtpWithAnimal_right_block_third_img"/>
                </div>
                <div className="second_section_dtpWithAnimal_left_block">
                    <h2 className="container_dtpWithAnimal_second_title">ДТП с <span className="second_section_dtpWithAnimal_left_block_notice">домашним</span> животными</h2>
                    <div className="second_section_dtpWithAnimal_left_block_text">
                        <p>Согласно ст.137 Гражданского кодекса Республики Беларусь, к животным применяются правила об
                            имуществе, поскольку иное не установлено законодательством и не вытекает из особенностей
                            этого объекта. Тоесть животное – это имущество со всеми правами и обязанностями по его
                            содержанию.
                        </p>
                        <p>Нарушение правил содержания животных может повлечь привлечение владельца к административной
                            ответственности в виде штрафа от 1 до 15 базовых величин, а если это повлекло причинение
                            вреда имуществу, например, автомобилю, то предполагает помимо штрафных санкций от 10 до 30
                            базовых еще и административный арест до 15 суток (ст.16.30 КоАП). Возмещение вреда владельцу
                            автомобиля при этом также может иметь место, если правила выгула животных будут
                            нарушены.</p>
                        <p>В свою очередь, правила выгула предполагают его совершение только в специально
                            предназначенных для этого местах, определенных местными исполнительными и распорядительными
                            органами. Владельцам домашних животных будет полезно ознакомиться с правилами содержания
                            домашних собак, кошек, а также отлова безнадзорных животных в населенных пунктах,
                            утвержденными постановлением Совмина №834.</p>
                        <p>С безнадзорными (бездомными) животными, все понятно: у них хозяев нет, поэтому отвечать за
                            них будет некому.</p>
                    </div>
                </div>
            </section>
            <section className="container_dtpWithAnimal third_section_dtpWithAnimal">
                <div className="third_section_dtpWithAnimal_left">
                    <h2 className="container_dtpWithAnimal_second_title">ДТП с <span>дикими</span> животными</h2>
                    <div className="third_section_dtpWithAnimal_left_text_top">
                        <p>В результате ДТП животное может погибнуть. В таком случае, если водитель будет признан
                            виновным в этом ДТП, то ему нужно будет возместить ущерб от гибели сбитого животного.
                            Например, если под колесами автомобиля погибнет лось, то сумма возмещения составит 300 БВ,
                            если дикий кабан — 120 БВ.</p>
                        <p> Восстанавливать автомобиль придется за свой счет. Обязательная страховка гражданской
                            ответственности в этой ситуации не работает, т.к. нет страхового случая. Деньги на ремонт
                            транспортного средства возможно получить только при наличии договора комплексного
                            внутреннего страхования или, другими словами, при наличии КАСКО. Для этого нужно обратиться
                            с письменным заявлением в страховую организацию, с которой у вас заключен соответствующий
                            договор страхования. К заявлению следует приложить письменные объяснения обстоятельств ДТП,
                            а также справку, выданную ГАИ на месте ДТП.</p>
                    </div>
                    <div className="third_section_dtpWithAnimal_left_text_bottom">
                        <p><span>На заметку!</span></p>
                        <p>Наличие вины водителя в ДТП будет зависеть от ряда обстоятельств:</p>
                        <ul className="third_section_dtpWithAnimal_left_text_bottom_list">
                            <li>отреагировал ли он на предупреждение о действии знака «Дикие животные»</li>
                            <li>избрал ли безопасную для движения скорость</li>
                            <li>в каком состоянии он управлял автомобилем и т.п.</li>
                        </ul>
                    </div>
                    <div className="third_section_dtpWithAnimal_left_text_bottom_block">
                        <p>Отметим, что ни в коем случае нельзя забирать себе тушу погибшего животного. Перемещение
                            (транспортировка) и разделка диких животных, в т.ч. погибших, без предусмотренных
                            законодательством документов запрещается. За нарушение этого правила предусмотрена
                            ответственность как в виде штрафа, так и виде лишения свободы.</p>
                    </div>
                </div>
                <div className="third_section_dtpWithAnimal_right">
                    <img src={Img5} alt="dtpWithAnimal"/>
                    <img src={Img6} alt="dtpWithAnimal"/>
                    <img src={Img7} alt="dtpWithAnimal"/>
                    <img src={Img8} alt="dtpWithAnimal"/>
                </div>
            </section>
            <section className="container_dtpWithAnimal forth_section_dtpWithAnimal">
                <h2 className="container_dtpWithAnimal_second_title forth_section_dtpWithAnimal_main_title" >Таксы для исчисления размера вреда, причиненного
                    охотничьим ресурсам в РФ</h2>
                <div className="forth_section_dtpWithAnimal_with_tables">
                    <div className="forth_section_dtpWithAnimal_with_table">
                        <Table data={data}/>
                    </div>
                    <div className="forth_section_dtpWithAnimal_with_table for_mobile">
                        <Table data={data1}/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DtpWithAnimals;