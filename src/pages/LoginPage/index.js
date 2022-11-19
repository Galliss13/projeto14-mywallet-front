import {Button, Form, Input, Logo, StyledLink} from '../../components/Form'
import Container from '../../components/Container'

export default function Login() {
    return (
        <Container>
            <Logo>MyWallet</Logo>
            <Form>
                <Input placeholder="E-mail"></Input>
                <Input placeholder="Senha"></Input>
                <Button>Entrar</Button>
            </Form>
            <StyledLink to='/register'>Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    )
};
