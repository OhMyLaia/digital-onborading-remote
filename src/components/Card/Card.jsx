// import { data } from "react-router-dom";
import { NavigationControls } from "../NavigationControls/NavigationControls";
import databaseJson from "/public/assets/database.json";
import { useState } from "react";
import "./Card.module.css";
import { Indicator } from "../Indicator/Indicator.jsx";

const database = Object.values(databaseJson);

export function Card() {

    const initialStateFun = () => 0;
    const [step, setStep] = useState(initialStateFun);
    const currentData = database[step];

    console.log("currentData:", currentData);
    console.log("database:", database);

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
        <div className="slider-container">
            <div className={`slider step-${step}`}>
                {database.map((item, index) => (
                    <div key={index} className="slide">
                        <div id={`color${index}`} className="card">
                            <img className="card-image" src={item.image} alt={item.title} />
                            </div>
                            <div className="card-content">
                                <h1>{item.title}</h1>
                                <p className="card-p">{item.description}</p>
                                </div>
                                </div>
                ))}
                {/* <div className="card-image"> */}
                    {/* <div key={"color" + step} id={"color" + step} className="card">
                        <img className="card-image" src={currentData.image} alt="image1"></img>
                    </div>
                    <div className="card-content">
                        <h1>{currentData.title}</h1>
                        <p className="card-p">{currentData.description}</p>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
                <div className="controls">

                <div className="card-indicator">
                    <Indicator
                    step = {step}
                    setStep = {setStep}
                    />
                    <NavigationControls
                        step = {step}
                        setStep = {setStep}
                    />
                </div>
                </div>
                </div>
    )
}

export default Card;