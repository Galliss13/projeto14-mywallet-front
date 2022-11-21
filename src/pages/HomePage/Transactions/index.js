import { TransactionContainer, Moviment, Date, Description, Value, ThereAreNotMovements } from "./style";
import api from "../../../services/api";
import { useState, useContext } from "react"
import AuthContext from "../../../contexts/AuthContext";

export default function Transactions() {

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
    <TransactionContainer>
      
      {moviments ? moviments.map((m) => (
      <Moviment key={m._Id}>
        <Date>{m.date}</Date>
        <Description>{m.description}</Description>
        <Value>{m.value}</Value>
      </Moviment>
      )) : 
      <ThereAreNotMovements>
        Não há registros de entrada ou saída
      </ThereAreNotMovements>
      }
    </TransactionContainer>
  );
}


