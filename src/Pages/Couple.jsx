import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import CoupleContent from '../Components/CoupleContent';
import MarryMe from '../Components/MarryMe';
import '../landing.css'
import { QuizContext } from '../question/Context'


function Couple() {

    return (
        <div className="qbootstrap-hero">
            
                <Header />
                <CoupleContent />
                <Footer />
            
        </div>
    );
}

export default Couple;