import { TransactionContainer, Moviment, Date, Description, Value, ThereAreNotMovements } from "./style";

export default function Transactions(props) {
  const {moviments} = props
  return (
    <TransactionContainer>
      
      {moviments ? moviments.map((m) => {
      <Moviment>
        <Date>{m.date}</Date>
        <Description>{m.description}</Description>
        <Value>{m.value}</Value>
      </Moviment>
      }) : 
      <ThereAreNotMovements>
        Não há registros de entrada ou saída
      </ThereAreNotMovements>
    }
    </TransactionContainer>
  );
}


