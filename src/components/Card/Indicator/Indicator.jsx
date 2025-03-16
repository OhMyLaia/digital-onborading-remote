import database from "/public/assets/database.json";
import styled from 'styled-components';

const Dot = styled.div`
width: 10px;
height: 10px;
border-radius: 50%;
background-color: ${(props) => (props.active ? "black" : "grey")}
transition: background-color 0.3s ease-in-out;
`;

const IndicatorContainer = styled.div`
    display: flex;
    gap: 0.5em;
    justify-content: center;
    margin-top: 1em;
`;

export function Indicator({ arrayProp = [], step }) {
    if (!Array.isArray(arrayProp)) { return console.log("array prop is not an array") }
    return (
        <IndicatorContainer>
            {
                arrayProp.map((_, index) => (
                    <Dot key={index} active={index === step} />
                ))
            }
        </IndicatorContainer>
    )
}

