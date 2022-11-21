import {IoExitOutline} from "react-icons/io5"
import { Link } from "react-router-dom"
import { HeaderContainer, Welcome } from "./style"

export default function Header() {
    return (
        <HeaderContainer>
            <Welcome>Olá, Fulano</Welcome>
            <Link to='/'>
                <IoExitOutline onClick={() => localStorage.clear()} size={30} color='#fff' fontWeight={100}/>
            </Link>
        </HeaderContainer>
    )
};


