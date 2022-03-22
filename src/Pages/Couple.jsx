import React, { useState } from 'react';

import Header from '../Components/Header';
import CoupleContent from '../Components/CoupleContent';
import MarryMe from '../Components/MarryMe';
import '../landing.css'
import { QuizContext } from '../question/Context'


function Couple() {

    return (
        <div className="">
            
                <Header />
                <CoupleContent />
               
            
        </div>
    );
}

export default Couple;