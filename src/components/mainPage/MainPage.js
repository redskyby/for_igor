import React from 'react';
import Button from "../../utils/button/Button";

function MainPage(props) {
    return (
        <main>
            <section>
                <h1>Как вы будете действовать в чрезвычайных ситуациях</h1>
                <h2>Цель проекта <span>HAND:</span></h2>
                <p>Формирование, на основе виртуального опыта и переживаний, знаний и навыков направленных на обдуманное, грамотное и предсказуемое поведение и действия при чрезвычайных проишествиях и ДТП.</p>
            </section>
            <section>
                <h2>Готовы ли вы?</h2>
                <div>
                    <p>Стань Героем в чрезвычайной ситуации!</p>
                    <p>Грамотно спасать других и не погибнуть самому!</p>
                </div>
            </section>
            <section>
                <div></div>
                <Button type="button" placeholder="скачать игру" name="Скачать игру"/>
            </section>
        </main>
    );
}

export default MainPage;