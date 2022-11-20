import {AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"
import { Container, TradeButton } from "./style"

export default function NewTransaction() {
    return (
        <Container>
            <TradeButton to='/trade/deposit'>
                <AiOutlinePlusCircle color="#fff" size={20}></AiOutlinePlusCircle>
                <p>Nova <br></br> Entrada</p>
            </TradeButton>
            <TradeButton to='/trade/outflow'>
                <AiOutlineMinusCircle color="#fff" size={20}></AiOutlineMinusCircle>
                <p>Nova <br></br> Saída</p>
            </TradeButton>
        </Container>
    )
};
