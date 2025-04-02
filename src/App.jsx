import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Services from "./components/pages/Services.jsx";
import Products from "./components/pages/Products.jsx";
import SignUp from "./components/pages/SignUp.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/pages/Login.jsx";

function App() {

    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/services' element={<Services/>}/>
                    <Route path='/products' element={<Products/>}/>
                    <Route path='/sign-up' element={<SignUp/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App
