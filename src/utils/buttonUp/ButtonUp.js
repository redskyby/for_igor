import React, {useEffect, useState} from 'react';
import "./ButtonUp.css";
import { animateScroll as scroll } from 'react-scroll';
import img1 from './../img/ButtonUp/Vector11.png';

function ButtonUp() {
    const [isVisible, setIsVisible] = useState(false);


    const handleScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const scrollThreshold = 0.85; // 70% пролистанного экрана

        setIsVisible(scrollY > windowHeight * scrollThreshold);
    };
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <img src={img1} alt="Вверх"/>
        </div>
    );
}

export default ButtonUp;