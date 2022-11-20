import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 80px;
`

const NewTrade = styled.p`
    width: 100%;
    height: 31px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #fff;
`

export {
    HeaderContainer,
    NewTrade
}