import database from "/database.json";

export function Card() {
    const initialStateFun = () => database[0];
    const [step, setStep] = useState(initialStateFun);
    const currentData = database[step];

    return (
        <div className="card">
            <img className="card-image" src={currentData.image} alt="image1"></img>



        </div>
    )
}

export default Card;


// <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>