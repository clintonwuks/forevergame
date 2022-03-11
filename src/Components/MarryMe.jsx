import { QuizContext } from '../question/Context';
import React, { useContext } from 'react';
import { backg } from './Questions'

function MarryMe() {
    const { gameState, setGameState } = useContext(QuizContext);

    return (
        <div className="qbootstrap-hero ">
            <div className="qbootstrap-overlay"></div>
            <div className="qbootstrap-cover text-center" style={{ backgroundImage: "url(" + backg + ")" }}>
                <div className="display-t">
                    <div className="display-tc">
                        <button onClick={() => {
                            setGameState("game")
                        }}><h1 >Slap!! Marry Me</h1></button>
                        {/*TO-DO
                        //Questions component that will be imported here*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarryMe;