import React from "react";
import './App.css';
import { Route, Routes , HashRouter} from "react-router-dom";
// import {BrowserRouter, Route, Routes , HashRouter} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import MainPage from "./mainPage/MainPage";
import DtpWillHappened from "./dtpWillHappened/DtpWillHappened";
import MedicalSupport from "./medicalSupport/MedicalSupport";
import DtpWithAnimals from "./dtpWithAnimals/DtpWithAnimals";
import Contacts from "./contacts/Contacts";
import "./App.css"
import ButtonUp from "../utils/buttonUp/ButtonUp";
function App() {
    return (
        <HashRouter>
            <div className="app">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/dtpWillHappened" element={<DtpWillHappened/>}/>
                    <Route path="/dtpWithAnimals" element={<DtpWithAnimals/>}/>
                    <Route path="/medicalSupport" element={<MedicalSupport/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Routes>
                <Footer/>
                <ButtonUp/>
            </div>
        </HashRouter>

    );
}

export default App;
