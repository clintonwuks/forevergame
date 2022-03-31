import React from 'react';
const backg = `${process.env.PUBLIC_URL}/assets/images/couple-4copy.jpg`;


function EndComp() {

    return (
        <div className="qbootstrap-hero ">
            <div className="qbootstrap-overlay-1"></div>
            <div className="qbootstrap-cover text-center" style={{ backgroundImage: "url(" + backg + ")" }}>
                <div className="display-t">
                    <div className="display-tc">
                        <span>
                            <h3 >DFKMMMM!!!</h3>
                            {/*TO-DO
                            //Questions component that will be imported here*/}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EndComp;