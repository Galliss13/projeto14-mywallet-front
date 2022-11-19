import styled from "styled-components";

const TransactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 330px;
    height: 446px;
    background-color: #fff;
    border-radius: 5px;
`
const Moviment = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 95%;
    height: 35px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`
const Date = styled.span`
    position: absolute;
    left: 0px;
    color: #C6C6C6;
`
const Description = styled.span`
    position: absolute;
    left: 50px;
    color: #000000;
`
const Value = styled.span`
    position: absolute;
    right: 0px; 
    color: #C70000;
`
const ThereAreNotMovements = styled.p`
    text-align: center;
    color: #868686;
`

export {
    TransactionContainer,
    Moviment,
    Date,
    Description,
    Value,
    ThereAreNotMovements
}