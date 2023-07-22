import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    );
}

export default App;
