import styled from "styled-components";
import { Link } from "react-router-dom"
import { sidePurple } from "../../../constants/colors"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    width: 330px;
`

const TradeButton = styled(Link)`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 155px;
    height: 114px;
    background-color: ${sidePurple};
    border-radius: 5px;
    p {
        position: absolute;
        left: 10px;
        bottom: 10px;
        font-family: 'Raleway';
        font-style: normal;
        text-decoration: none;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #fff;
        position: absolute;
    }
`

export {
    Container,
    TradeButton
}