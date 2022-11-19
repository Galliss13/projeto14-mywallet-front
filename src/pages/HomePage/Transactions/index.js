import { TransactionContainer, Moviment, Date, Description, Value, ThereAreNotMovements } from "./style";
export default function Transactions() {
  return (
    <TransactionContainer>
      
      <Moviment>
        <Date>30/11</Date>
        <Description>Almoço com a mãe</Description>
        <Value>39,90</Value>
      </Moviment>

      <Moviment>
        <Date>30/11</Date>
        <Description>Almoço com a mãe</Description>
        <Value>39,90</Value>
      </Moviment>

      <ThereAreNotMovements>
        Não há registros de entrada ou saída
      </ThereAreNotMovements>

    </TransactionContainer>
  );
}


