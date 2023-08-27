import { styled } from "styled-components";
import Card from './Card';
import backgroundImage from '../assets/logoPng.png'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
    display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderText = styled.p`
  font-size: 38px;
  color: #FFFFFF;
  font-weight: bold;
  margin: 8px;
  padding-left: 50%;
  padding-right: 50%;
  text-align: center;
`;

const Text = styled.p`
  margin: 8px;
  color: #FFFFFF;
  font-size: 19px;
  text-align: left;
`;

const ListText = styled.ul`
  color: #FFFFFF;
  font-size: 16px;
  text-align: left;
  padding-left: 20px;
`;

const ProgramWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ListSection = styled.section`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 20px;
  margin: 20px 0;

  background-color: rgba(0, 0, 0, 0.2);
`;


function Mentorship() {
  return (
    <Container>
      <HeaderText>MENTORSHIP</HeaderText>

      <Text>Our mentorship program offers two different programs suitable for both beginners and experienced traders. These programs are designed not only to teach but also to inspire and motivate our clients. Both programs aim to improve trading strategies, market insight, and trading knowledge.</Text>
      
      <HeaderText>MENTORSHIP PROGRAM 3 DAY CYCLE (BEGINNER PROGRAM)</HeaderText>
      <Text>Our beginner mentorship program on a three-day cycle is specifically designed for those new to the forex trading industry. It provides clear direction on becoming consistent in trading and developing effective strategies for the market.</Text>
      <ListSection>
        <Text>What's included:</Text>
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
      </ListSection>

      <HeaderText>MENTORSHIP PROGRAM</HeaderText>
      <ProgramWrapper>
        <Card title={"BEGINNER PROGRAM"} period={"(3 DAY CYCLE)"} price={800} />
        <Card title={"STANDARD PROGRAM"} period={"(3 DAY CYCLE)"} price={1000} />
      </ProgramWrapper>

      <HeaderText>TRADING SESSIONS</HeaderText>
      <Card title={"FOREX LESSONS"} period={"(3 HOURS)"} price={400} />
    </Container>
  );
}

export default Mentorship;
