import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import{ Card } from "../components/Card/Card";
import { Indicator } from "../components/Indicator/Indicator";
import { NavigationControls } from "../components/NavigationControls/NavigationControls";
import database from "../data/database.json"
import "./SliderView.module.css";
// import database from "/public/assets/database.json"

export const SliderView = () => {

    const initialStateFun = () => 0;
    const [step, setStep] = useState(initialStateFun);
    console.log("SliderView - step:", step);
    const currentData = database[step];
    const navigate = useNavigate();

    console.log("SliderView - database:", database);

    if (!currentData) {
        console.error("could not find any data")
        return null;
    }

    // let slugTitle = currentData.slug;
    // console.log("slugtitle", slugTitle);

    useEffect( () => {
        if (step >= 0 && step < database.length) {
            navigate(`/${currentData.slug}`);
        }
    }, [step, navigate]);
    console.log("SliderView - step:", step);


    console.log("currentData:", currentData);
    console.log("database:", database);

    return (
        <div className="slider-view">
            <div className="controls">
                <div className="card-indicator">
                    <Card
                    step={step}
                    setStep={setStep}
                    />
                    <Indicator 
                    step={step}
                    setStep={setStep}
                    />
                    <NavigationControls
                    step={step}
                    setStep={setStep}
                    />
            </div>
        </div>
    </div>
    )
}
