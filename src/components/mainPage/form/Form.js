import React, {useState} from 'react';
import Button from "../../../utils/button/Button";
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
                <label>
                    <input
                        type="radio"
                        value="option1"
                        checked={selectedOption === 'option1'}
                        onChange={handleOptionChange}
                    />
                    Отличная и интересная идея
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="option2"
                        checked={selectedOption === 'option2'}
                        onChange={handleOptionChange}
                    />
                    Так себе, скучно
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="option3"
                        checked={selectedOption === 'option3'}
                        onChange={handleOptionChange}
                    />
                    Уже такое есть
                </label>
            </div>
            <div>
                <button type="submit">Отправить</button>
                <Button type="button" placeholder="Давай, поиграй" name="Давай, поиграй" />
            </div>
        </form>
    );
}

export default Form;