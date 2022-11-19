import {IonIcon} from "@ionic/react"
import { Container, TradeButton } from "./style"

export default function NewTransaction() {
    return (
        <Container>
            <TradeButton to='/trade/deposit'>
                <IonIcon name="add-circle-outline"></IonIcon>
                <p>Nova <br></br> Entrada</p>
            </TradeButton>
            <TradeButton to='/trade/outflow'>
                <IonIcon name="remove-circle-outline"></IonIcon>
                <p>Nova <br></br> Saída</p>
            </TradeButton>
        </Container>
    )
};
