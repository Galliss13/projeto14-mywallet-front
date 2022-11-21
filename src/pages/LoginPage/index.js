import {Button, Form, Input, Logo, StyledLink} from '../../components/Form'
import Container from '../../components/Container'
import AuthContext from '../../contexts/AuthContext'
import api from '../../services/api'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login() {

    const {authLogin, auth} = useContext(AuthContext)
    const navigate = useNavigate()
    const [loginForm, setLoginForm] = useState({email:'', password:''})

    useEffect(() => {
        if (auth?.token) {
            navigate('/home')
        }
    }, [])
    
    function submitForm (e) {
        e.preventDefault()

        const promise = api.login({...loginForm})
        promise.then((res) => {
            authLogin(res.data)
            navigate('/home')
        })
        promise.catch((err) => {
            console.log(err)
        })
    }
    
    function changeInput (e) {
        setLoginForm({...loginForm, [e.target.name]: e.target.value})
    }

    return (
        <Container>
            <Logo>MyWallet</Logo>
            <Form onSubmit={submitForm}>

                <Input 
                type={'email'}
                name='email'
                value={loginForm.email}
                onChange={changeInput}
                placeholder="E-mail"
                required>
                </Input>
                
                <Input 
                type={'password'}
                name='password'
                value={loginForm.password}
                onChange={changeInput}
                placeholder="Senha"
                required>
                </Input>

                <Button type={'submit'}>Entrar</Button>
            </Form>
            <StyledLink to='/register'>Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    )
};
