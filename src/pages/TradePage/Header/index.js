import { HeaderContainer, NewTrade } from "./style"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { Link } from "react-router-dom"

export default function Header(props) {
    const {isDeposit} = props
    
    return (
        <HeaderContainer>
            <NewTrade>Nova {isDeposit ? 'Entrada' : 'Saída'}</NewTrade>
            <Link to='/home'>
                <AiOutlineArrowLeft size={30} color='#fff' fontWeight={100}></AiOutlineArrowLeft>
            </Link>
        </HeaderContainer>
    )
};


