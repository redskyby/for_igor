import React, {useState} from 'react';
import Button from "../../../utils/button/Button";
import Result from "./Result/Result";
import "./Form.css"

function Form() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Выбранное значение:', selectedOption);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div>
                <label className="form_label">
                    <input
                        className="form_input"
                        type="radio"
                        value="option1"
                        checked={selectedOption === 'option1'}
                        onChange={handleOptionChange}
                    />
                    Отличная и интересная идея!
                </label>
            </div>
            <div>
                <label className="form_label">
                    <input
                        className="form_input"
                        type="radio"
                        value="option2"
                        checked={selectedOption === 'option2'}
                        onChange={handleOptionChange}
                    />
                    Так себе, скучно
                </label>
            </div>
            <div>
                <label className="form_label">
                    <input
                        className="form_input"
                        type="radio"
                        value="option3"
                        checked={selectedOption === 'option3'}
                        onChange={handleOptionChange}
                    />
                    Уже такое есть
                </label>
            </div>
            <div className="form_in_360px">
                <button type="submit" className="form_button">Отправить</button>
                <Button type="button" placeholder="Давай, поиграй" name="Давай, поиграй" />
            </div>
            <div>
                <button type="button" className="form_show_result">Результаты опроса</button>
            </div>
            {selectedOption && <Result selectedOption={selectedOption} />}
        </form>
    );
}

export default Form;