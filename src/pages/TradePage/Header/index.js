import { HeaderContainer, NewTrade } from "./style"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { Link } from "react-router-dom"
export default function Header() {
    return (
        <HeaderContainer>
            <NewTrade>Nova entrada</NewTrade>
            <Link to='/home'>
                <AiOutlineArrowLeft size={30} color='#fff' fontWeight={100}></AiOutlineArrowLeft>
            </Link>
        </HeaderContainer>
    )
};


