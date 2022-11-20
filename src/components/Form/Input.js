import styled from "styled-components";

const Input = styled.input`
    position: relative;
    padding-left: 10px;
    margin-bottom: 15px;
    width: 326px;
    height: 58px;
    background-color: #FFFFFF;
    border: none;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    ::placeholder {
        position: absolute;
        left: 12px;
        top: 18px;
    }
    :focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`

export default Input