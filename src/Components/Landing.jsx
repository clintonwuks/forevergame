import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Content from './Content';
import MarryMe from './MarryMe';
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
                <Footer />
            </QuizContext.Provider >
        </div>
    );
}

export default Landing;