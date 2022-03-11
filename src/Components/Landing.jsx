import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Content from './Content';
import MarryMe from './MarryMe';
import '../landing.css'
import { QuizContext } from '../question/Context'


function Landing() {
    const [gameState, setGameState] = useState("game");

    return (
        <div className="qbootstrap-hero">
            <QuizContext.Provider value={{ gameState, setGameState }}>
                <Header />
                {gameState === "game" && < Content />}
                {gameState === "marry" && < MarryMe />}
                <Footer />
            </QuizContext.Provider >
        </div>
    );
}

export default Landing;