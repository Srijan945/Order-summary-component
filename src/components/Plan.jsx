import React from "react";

function Plan(){
    return (
        <div className="plan">
            <div className="plan__item1">
                <img className="item1__img" src="images/icon-music.svg" alt="music" />
            </div>
            <div className="plan__item2">
                <p className="item2__p1">Annual Plan</p>
                <p className="item2__p2">$59.99/year</p>
            </div>
            <div className="plan__item3">
                <p className="item3__p">Change</p>
            </div>
        </div>
    );
}

export default Plan;