// import { data } from "react-router-dom";
import { Indicator } from "./Indicator";
import database from "/public/assets/database.json";
import { useState } from "react";


export function Card() {

    const initialStateFun = () => 0;
    const [step, setStep] = useState(initialStateFun);
    const currentData = database[step];

    (!currentData) ? console.error("could not find any data") : currentData;
    (!currentData.image) ? console.error("could not find any image") : currentData;

    return (
        <div className="card-image">
            <div className="card">
                <img className="card-image" src={currentData.image} alt="image1"></img>
            </div>
            <div className="card-content">
                <h1>{currentData.title}</h1>
                <p>{currentData.description}</p>
            </div>
            <div className="card-directions">
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
            </div>
            <Indicator
            step = {step}
            setStep = {setStep}
            />
        </div>
    )
}

export default Card;