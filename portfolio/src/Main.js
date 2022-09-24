import React, {useEffect, useState} from "react";
import {Navigate, Route, BrowserRouter, Routes} from "react-router-dom";

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Header from "./components/header";

const Main = () => {
        return (
            <BrowserRouter>
                <div style={styles.background}>
                    <div style={styles.content}>
                <Header/>
                <Routes>
                    <Route exact path={"/"} element={<Home/>}/>
                    <Route path={"/stuff"} element={<Stuff/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
}

const styles = {
    background: {
        // backgroundSize: 'cover',
        // backgroundColor: '#E7ECEF',
        margin: 0,
    },

    content: {
        height: '100vh',
        width: '100%',
        backgroundAttachment: 'fixed'
    },

}

export default Main;