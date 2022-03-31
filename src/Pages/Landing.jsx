import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Content from '../Components/Content';
import MarryMe from '../Components/MarryMe';
import EndComp from '../Components/EndComp';
import '../landing.css'
import { QuizContext } from '../question/Context'


function Landing() {
    const [gameState, setGameState] = useState("marry");
    const [score, setCurrScore] = useState(0);

    return (
        <div className="qbootstrap-hero">
            <QuizContext.Provider value={{ gameState, setGameState, score, setCurrScore }}>
                <Header />
                {gameState === "game" && < Content />}
                {gameState === "marry" && < MarryMe />}
                {gameState === "end" && < EndComp />}
                <Footer />
            </QuizContext.Provider >
        </div>
    );
}

export default Landing;