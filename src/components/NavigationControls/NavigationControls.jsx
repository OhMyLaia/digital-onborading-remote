import database from "/public/assets/database.json";
import "./NavigationControls.module.css"

function NextButton({ onClick, label, classNameLabel }) {
    return (
        <button
            className={classNameLabel}
            onClick={onClick}
        > {label} </button>
    )
}

function PreviousButton({ onClick, label, classNameLabel }) {
    return (
        <button
            className={classNameLabel}
            onClick={onClick}
        > {label} </button>
    )
}

export function NavigationControls({step, setStep}) {
    console.log("NavigationControls received step:", step);

    const nextStep = () => {
        console.log("Next button clicked! Current step:", step);
        step < database.length - 1 ? setStep(step + 1) : step;
    }
    
    const previousStep = () => {
        console.log("Previous button clicked! Current step:", step);
        step > 0 ? setStep(step - 1) : step;
    }

    return (
        <div className="card-buttons">
        {step === 0 ?
            ( <NextButton
                    onClick = {nextStep}
                    label = {"→"}
                    classNameLabel = {"card-next-btn"}
                />
            ) : step == database.length - 1 ? (

                <PreviousButton
                    onClick = {previousStep}
                    label = {"←"}
                    classNameLabel = {"card-prev-btn"}
                />
            ) : ( <div className="card-div-btns">
                    <PreviousButton
                        onClick = {previousStep}
                        label = {"←"}
                        classNameLabel = {"card-prev-btn"}
                    />
                    <NextButton
                        onClick = {nextStep}
                        label = {"→"}
                        classNameLabel = {"card-next-btn"}
                    />
                </div>
            )
        }
    </div>
    )
}