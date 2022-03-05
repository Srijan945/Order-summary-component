import React from "react";
import Button from "./Button";

function CardFooter(){
    return (
        <div className="cardFooter">
            <Button />
            <p className="cardFooter__p">Cancel Order</p>
        </div>
    );
}

export default CardFooter;