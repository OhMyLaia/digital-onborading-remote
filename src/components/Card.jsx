// import { data } from "react-router-dom";
import { Indicator } from "./Indicator";
import database from "/public/assets/database.json";
import { useState } from "react";


export function Card() {

    const initialStateFun = () => 0;
    const [step, setStep] = useState(initialStateFun);
    const currentData = database[step];

    if (!currentData) {
        console.error("could not find any data")
        return null;
    }

    if (!currentData.image) {
        console.error("could not find any image");
        return null;
    }

    return (
        <div>
        <div className="card-image">
            <div key={"color" + step} id={"color" + step} className="card">
                <img className="card-image" src={currentData.image} alt="image1"></img>
            </div>
            <div className="card-content">
                <h1>{currentData.title}</h1>
                <p id="card-p">{currentData.description}</p>
            </div>
        </div>
            <div className="card-directions">
                <Indicator
                    step={step}
                    setStep={setStep}
                />
            </div>
        </div>
    )
}

export default Card;