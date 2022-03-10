import React from 'react';
const backg = `${process.env.PUBLIC_URL}/cover_bg_3.jpg`;


function Content() {
    return (
        <div className="qbootstrap-hero " data-section="home">
            <div className="qbootstrap-overlay"></div>
            <div className="qbootstrap-cover text-center" style={{ backgroundImage: "url(" + backg + ")" }}>
                <div className="display-t">
					<div className="display-tc">
                        <h1 >All the shekinat Questions will go here</h1>
                        {/*TO-DO
                        //Questions component that will be imported here*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;