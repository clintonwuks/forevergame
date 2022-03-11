import { QuizContext } from '../question/Context';
import React, { useContext } from 'react';
export const backg = `${process.env.PUBLIC_URL}/cover_bg_3.jpg`;


function Questions() {
    const { gameState, setGameState } = useContext(QuizContext);
    return (
        <div className="qbootstrap-hero" style={{ backgroundImage: "url(" + backg + ")" }}>
            <div className="qbootstrap-overlay"></div>
            <div className="qbootstrap-cover text-center" >
                <div className="display-t">
                    <div className="display-tc">
                        <button onClick={() => {
                            setGameState("marry");
                        }}><h1 >All the shekinat Questions will go here</h1></button>
                        {/*TO-DO
                        //Questions component that will be imported here*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;