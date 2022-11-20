import Container from "../../components/Container";
import { Form, Input, Button } from "../../components/Form";
import Header from "./Header";

export default function Trade() {
    return (
        <Container>
            <Header/>
            <Form>
                <Input placeholder="Valor"></Input>
                <Input placeholder="Descrição"></Input>
                <Button>Salvar entrada</Button>
            </Form>
        </Container>
    )
};
