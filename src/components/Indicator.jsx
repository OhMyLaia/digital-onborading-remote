import database from "/public/assets/database.json";

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

export function Indicator({step, setStep}) {
    console.log("Indicator received step:", step);

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
            ) : ( <div>
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