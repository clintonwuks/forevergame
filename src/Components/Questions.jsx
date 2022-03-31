import qBank from '../question/index';
import React, { useState, useContext } from 'react';
import { QuizContext } from '../question/Context'

export const backg = `${process.env.PUBLIC_URL}/assets/images/cover_bg_2.jpg`;


function Questions() {
    const { score, setCurrScore } = useContext(QuizContext);
    const { setGameState } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
            if (currQuestion === 3) {
                if (qBank[currQuestion].correct.match( optionChosen)) {
                    setCurrScore(score + 1);
                    setCurrQuestion(0);
                    setCurrScore(0);
                    console.log(currQuestion);
                    setGameState("end");
                    return 0;
                }
                
                //setCurrQuestion(currQuestion + 1);
            } else
                if (qBank[currQuestion].correct.match(optionChosen)) {
                    console.log(currQuestion);
                    setCurrScore(score + 1);
                    console.log(currQuestion);
                    setCurrQuestion(currQuestion + 1);
                }
    };

    return (
        <div className="qbootstrap-hero" style={{ backgroundImage: "url(" + backg + ")" }}>
            <div className="qbootstrap-overlay"></div>
            <div className="qbootstrap-cover text-center" >
                <div className="display-t">
                    <div className="display-tc fs-1">
                        <h1 className="text-white fw-bold "> {qBank[currQuestion].question} </h1>
                        <div className="options">
                            <button onClick={() => {
                                setOptionChosen(qBank[currQuestion].answers[0]);
                            }}><h5>{qBank[currQuestion].answers[0]}</h5>
                            </button>
                            <button onClick={() => {
                                setOptionChosen(qBank[currQuestion].answers[1]);
                            }}><h5>{qBank[currQuestion].answers[1]}</h5>
                            </button>
                            <button onClick={() => {
                                setOptionChosen(qBank[currQuestion].answers[2]);
                            }}><h5>{qBank[currQuestion].answers[2]}</h5>
                            </button>
                            <button onClick={() => {
                                setOptionChosen(qBank[currQuestion].answers[3]);
                            }}><h5>{qBank[currQuestion].answers[3]}</h5>
                            </button>
                        </div>
                        {currQuestion === qBank.length - 1 ? (
                            <button onClick={() => {
                                nextQuestion();
                            }}><h5>Finish Game</h5></button>
                        ) : (
                                <button onClick={() => {
                                    nextQuestion();
                                }}><h5>Next Question</h5>
                                </button>
                                )}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;