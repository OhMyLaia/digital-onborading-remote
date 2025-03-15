import database from "/public/assets/database.json";
import { useState } from "react";

export function Card() {
    const initialStateFun = () => 0;
    const [step, setStep] = useState(initialStateFun);
    const currentData = database[step];

    const nextStep = () => {
        step < database.length - 1 ? setStep(step + 1) : null;
    }

    const previousStep = () => {
        step > 0 ? setStep(step - 1) : null;
    }

    (!currentData) ? new Error(console.log("could not find any data")) : currentData;
    (!currentData.image) ? new Error(console.log("could not find any image")) : currentData;

    return (
        <div className="card">
            <img className="card-image" src={currentData.image} alt="image1"></img>
            <h1>{currentData.title}</h1>
            <p>{currentData.description}</p>

            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>


        </div>
    )
}

export default Card;