import databaseJson from "../../data/database.json";
import styled from 'styled-components';
import "./Indicator.module.css";

const database = Object.values(databaseJson);

const Dot = styled.div`
width: ${(props) => (props.active ? "20px" : "10px")};
height: ${(props) => (props.active ? "10px" : "10px")};
border-radius: ${(props) => (props.active ? "20%" : "50%")};
background-color: ${(props) => (props.active ? "black" : "grey")};
transition: background-color 0.3s ease-in-out;
`;

const IndicatorContainer = styled.div`
    display: flex;
    gap: 0.5em;
    justify-content: center;
    margin-top: 1em;
`;

export function Indicator({step, setStep}) {
    if (!Array.isArray(database)) { return console.log("array is not an array") }
    return (
        console.log(`i'm in .map`),
        <IndicatorContainer>
            {
                database.map((_, index) => (
                    <Dot key={index}
                    active={index === step}
                    onClick={ () => setStep(index) }
                    />
                ))
            }
        </IndicatorContainer>
    )
}


