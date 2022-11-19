import {Button, Form, Input, Logo, StyledLink} from '../../components/Form'
import Container from '../../components/Container'

export default function Register() {
    return (
    <Container>
        <Logo>MyWallet</Logo>
        <Form>
            <Input placeholder="Nome"></Input>
            <Input placeholder="E-mail"></Input>
            <Input placeholder="Senha"></Input>
            <Input placeholder="Confirme a senha"></Input>
            <Button>Entrar</Button>
        </Form>
        <StyledLink to='/'>Já tem um conta? Entre agora!</StyledLink>
    </Container>
    )
};
