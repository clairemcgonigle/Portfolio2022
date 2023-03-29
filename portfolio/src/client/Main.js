import React, {useState} from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import { render } from "react-dom";

import Home from "./Home";
import AboutMe from "./aboutMe";
import Fulbright from "./fulbright";
import SideProject from "./sideProject";
import Header from "./components/header";
import RecipePage from "./recipePage";

const defaultRecipe = {
    "name": "",
    "recipe": "",
    "recipeSpanish": "",
};

const Main = () => {
    // let [state, setState] = useState(
    //     Object.assign(defaultRecipe, window.__PRELOADED_STATE__)
    // );

    return (
        <BrowserRouter>
            <div style={styles.background}>
                <div style={styles.content}>
                    <Header/>
                    <Routes>
                        <Route exact path={"/"} element={<Home/>}/>
                        <Route path={"/aboutMe"} element={<AboutMe/>}/>
                        <Route path={"/fulbright"} element={<Fulbright/>}/>
                        <Route path={"/recipe_book"} element={<SideProject/>}/>
                        <Route

                            path={"/recipe_book/:recipe"} element={<RecipePage/>}
                           // render={(p) => <RecipePage {...p} currentRecipe={state.name} />}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

const styles = {
    background: {
        margin: 0,
    },

    content: {
        height: '100vh',
        width: '100%',
        backgroundAttachment: 'fixed'
    },

}

export default Main;