import database from "/public/assets/database.json";
import styled from 'styled-components';
import "./Indicator.module.css";

const Dot = styled.div`
width: 10px;
height: 10px;
border-radius: 50%;
background-color: ${(props) => (props.active ? "black" : "grey")};
border: 1px solid red;
transition: background-color 0.3s ease-in-out;
`;

const IndicatorContainer = styled.div`
    display: flex;
    gap: 0.5em;
    justify-content: center;
    margin-top: 1em;
    background-color: blue;
`;

export function Indicator({ arrayProp = [], step }) {
    if (!Array.isArray(arrayProp)) { return console.log("array prop is not an array") }
    return (
        console.log(`i'm in .map`),
        <IndicatorContainer>
            {
                arrayProp.map((_, index) => (
                    <Dot key={index} active={index === step} />
                ))
            }
        </IndicatorContainer>
    )
}

