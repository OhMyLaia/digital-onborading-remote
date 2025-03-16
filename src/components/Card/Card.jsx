// import { data } from "react-router-dom";
import { NavigationControls } from "../NavigationControls/NavigationControls";
import database from "/public/assets/database.json";
import { useState } from "react";
import "./Card.module.css";
import { Indicator } from "./Indicator/Indicator";


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
                <p className="card-p">{currentData.description}</p>
            </div>
        </div>
        <div className="card-indicator">
            <Indicator
            array = {currentData}
            step = {step}
            ></Indicator>
        </div>
        <div className="card-directions">
            <NavigationControls
                step = {step}
                setStep = {setStep}
            />
        </div>
        </div>
    )
}

export default Card;