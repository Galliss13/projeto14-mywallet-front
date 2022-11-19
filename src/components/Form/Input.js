import styled from "styled-components";

const Input = styled.input`
    position: relative;
    margin-bottom: 15px;
    width: 326px;
    height: 58px;
    background-color: #FFFFFF;
    border: none;
    border-radius: 5px;
    ::placeholder {
        position: absolute;
        left: 12px;
        top: 18px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
`

export default Input