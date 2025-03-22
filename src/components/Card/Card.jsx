import databaseJson from "../../data/database.json";
import "./Card.module.css";

export function Card( {step, setStep}) {

    // const initialStateFun = () => 0;
    // const [step, setStep] = useState(initialStateFun);

    const database = Object.values(databaseJson);
    console.log("database:", database);


    const currentData = database[step];

    console.log("currentData:", currentData);
    console.log("database:", database);

    // if (!currentData) {
    //     console.error("could not find any data")
    //     return null;
    // }

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
            </div>
        </div>
        </div>
    )};

