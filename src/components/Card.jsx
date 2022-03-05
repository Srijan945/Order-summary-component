import React from "react";
import CardImage from "./CardImage";
import Heading from "./Heading";
import Plan from "./Plan";
import CardFooter from "./CardFooter";

function Card(){
    return(
        <div className="card">
				<CardImage />
				<Heading />
				<Plan />
				<CardFooter />
		</div>
    );
}

export default Card;