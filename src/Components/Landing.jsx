import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Content from './Content';

function Landing() {
    return (
        <div className="wrapper">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default Landing;