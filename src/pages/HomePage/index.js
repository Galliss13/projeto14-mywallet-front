import Container from "../../components/Container"
import Header from "./Header"
import Transactions from "./Transactions"
import NewTransaction from "./NewTransaction"
import { useState, useContext } from "react"
import AuthContext from "../../../contexts/AuthContext";
import api from "../../services/api"

export default function Home() {

    const [moviments, setMoviments] = useState(undefined)
    const { auth } = useContext(AuthContext)

    function getMoviments() {
        const promise = api.getMoviments(auth.token)
        promise.then( res => {
            setMoviments(res.data)
        })
        promise.catch (err => {
            console.log(err)
        })
    }

    getMoviments()

    return (
        <Container>
            <Header/>
            <Transactions moviments={moviments} />
            <NewTransaction/>
        </Container>
    )
};
