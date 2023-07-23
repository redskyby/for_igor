import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import MainPage from "./mainPage/MainPage";
import DtpWillHappened from "./dtpWillHappened/DtpWillHappened";
import MedicalSupport from "./medicalSupport/medicalSupport";
import DtpWithAnimals from "./dtpWithAnimals/DtpWithAnimals";
import Contacts from "./contacts/Contacts";

function App() {
    return (
        <BrowserRouter>
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
            </div>
        </BrowserRouter>

    );
}

export default App;
