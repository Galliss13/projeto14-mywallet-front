import Container from "../../components/Container"
import Header from "./Header"
import Transactions from "./Transactions"
import NewTransaction from "./NewTransaction"


export default function Home() {

    return (
        <Container>
            <Header/>
            <Transactions/>
            <NewTransaction/>
        </Container>
    )
};
