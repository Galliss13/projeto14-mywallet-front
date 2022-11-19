import styled from "styled-components";
import { sidePurple } from "../../constants/colors";

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 330px;
    height: 46px;
    background-color: ${sidePurple};
    border: none;
    border-radius: 5px;
    color: #fff;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    font-family: 'Raleway', sans-serif;
`

export default Button