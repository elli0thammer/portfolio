import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {About} from "./about-me/About";
import {MySkills} from "./skills/MySkills";

function App() {
    return (
        <div className="App">
            <Header/>

            <About/>

            <MySkills/>
        </div>
    );
}

export default App;
