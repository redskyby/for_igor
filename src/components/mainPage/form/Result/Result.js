import React from 'react';
import {useSelector} from "react-redux";
import "./Result.css";

function Result({selectedOption , showResult}) {



    const opinion1 = useSelector(state => state.voteToolkit.opinion1);
    const opinion2 = useSelector(state => state.voteToolkit.opinion2);
    const opinion3 = useSelector(state => state.voteToolkit.opinion3);


    return (
        <div className={`result_container ${showResult ? 'result_visible' : ''}`}>
            <div>
                <p>Отличная и интересная идея! ({opinion1})</p>
                <div className="result_container_row">
                    <span style={{width: `${opinion1}%`}}></span>
                </div>
            </div>
            <div>
                <p>Так себе,скучно ({opinion2})</p>
                <div className="result_container_row">
                    <span style={{width: `${opinion2}%`}}></span>
                </div>
            </div>
            <div>
                <p>Уже есть такая ({opinion3})</p>
                <div className="result_container_row">
                    <span style={{width: `${opinion3}%`}}></span>
                </div>
            </div>
        </div>
    );
}

export default Result;