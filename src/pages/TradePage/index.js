import Container from "../../components/Container";
import { Form, Input, Button } from "../../components/Form";
import Header from "./Header";
import api from "../../services/api"
import AuthContext from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Trade() {
    const { auth } = useContext(AuthContext)
    const { type } = useParams()
    const navigate = useNavigate()

    const [tradeForm, setTradeForm] = useState({
        value:'',
        description:'',
        type:`${type}`
    })

    function changeTrade(e) {
        setTradeForm({...tradeForm, [e.target.name]: e.target.value})
    }

    function submitTrade (e) {
        e.preventDefault()
        const promise = api.postMoviment(tradeForm, auth.token)
        promise.then(res => {
            navigate('/home')
        })
        promise.catch(err => {
            console.log(err);
        })
    }

    function isDeposit (type) {
        if (type === 'deposit') {
            return true
        } else if (type === 'outflow') {
            return false
        }
    }

    return (
        <Container>
            <Header isDeposit={isDeposit(type)} />
            <Form onSubmit={submitTrade}>

                <Input 
                value={tradeForm.value}
                onChange={changeTrade}
                name='value'
                type={'number'}
                placeholder="Valor"
                required
                ></Input>

                <Input 
                value={tradeForm.description}
                onChange={changeTrade}
                name='description'
                type={'text'}
                placeholder="Descrição"
                required
                ></Input>
                <Button type="submit">Salvar entrada</Button>

            </Form>
        </Container>
    )
};
