import {IonIcon} from "@ionic/react"
import { HeaderContainer, Welcome } from "./style"

export default function Header() {
    return (
        <HeaderContainer>
            <Welcome>Olá, Fulano</Welcome>
            <IonIcon name="exit-outline" color="#fff" size="10px"></IonIcon>
        </HeaderContainer>
    )
};


