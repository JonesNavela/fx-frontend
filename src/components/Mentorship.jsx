import { styled } from "styled-components"
import Card from './Card'

const HeaderText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 38px;
  color: #FFFFFF;
  font-weight: bold;
  padding-top: 10px;
  margin: 8px;
`

const Text = styled.p`
  margin: 8px;
  color: #FFFFFF;
  font-size: 19px;
  text-align: left;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ListText = styled.ul`
  color: #FFFFFF;
  font-size: 16px;
  text-align: left;
`

function Mentorship() {
  return (
    <>
      <HeaderText>MENTORSHIP</HeaderText>

      <Text>Our mentorship program offers two different programs which are suitable for both beginners and those who are more experienced.</Text>
      <Text>Our programs are not only constructed to teach but also to inspire and motivate our clients Both programs are specially formulated to improve our clients trading strategies as well as expanding out clients market insight and trading knowledge.</Text>
      
      <HeaderText>MENTORSHIP PROGRAM 3 DAY CYCLE (BEGINNER PROGRAM)</HeaderText>
      <Text>Our beginner mentorship program on a three day cycle is a specifically designed system made and modified by the FX BLUEPRINT team in hopes to help those who are new to the forex trading industry.</Text>
      <Text>With the aid of this mentor ship program you will gain clear direction on how to become consistent in your trading as well as developing different strategies to use when trading in the market.</Text>

      <HeaderText>What is included:</HeaderText>

      <ListWrapper>
        <ListText>
          <li>INTRODUCTION TO BROKERS</li>
          <li>INTRODUCTION TO META TRADER (MT4/MT5) </li>
          <li>WHAT IS LEVERAGE AND PIPS</li>
          <li>WHAT IS CANDLESTICKS</li>
          <li>WHAT IS SUPPORT AND RESISTANCE</li>
          <li>WHAT ARE KEY LEVELS</li>
          <li>WHAT ARE TIMEFRAMES</li>
          <li>HOW TO ENTER AND EXIT TRADES</li>
          <li>BUYSTOPS AND SELLSTOPS</li>
          <li>TAKE PROFIT AND STOPLOSS</li>
          <li>RISK MANAGEMENT </li>
          <li>THE FX BLUEPRINT BEGINNER HOLY GRAIL</li>
        </ListText>
      </ListWrapper>

      <HeaderText>MENTORSHIP PROGRAM</HeaderText>
      <Card title={"BEGINNER PROGRAM"} period={"(3 DAY CYCLE)"} price={800} />
      <Card title={"STANDARD PROGRAM"} period={"(3 DAY CYCLE)"} price={1000} />

      <HeaderText>TRADING SESSIONS</HeaderText>
      <Card title={"FOREX LESSONS"} period={"(3 HOURS)"} price={400} />

    </>
  )
}

export default Mentorship