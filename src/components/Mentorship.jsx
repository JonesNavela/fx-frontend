import { styled } from "styled-components";
import Card from './Card';
import backgroundImage from '../assets/logoPng.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
  width: 100%;
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
  text-align: center; /* Center the text horizontally */
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
AOS.init();

function Mentorship() {
  return (
    <Container>
      <HeaderText data-aos="zoom-in" data-aos-duration="3000">MENTORSHIP</HeaderText>

      <Text data-aos="zoom-in" data-aos-duration="3000">Our mentorship program offers two different programs suitable for both beginners and experienced traders. These programs are designed not only to teach but also to inspire and motivate our clients. Both programs aim to improve trading strategies, market insight, and trading knowledge.</Text>
      
      <HeaderText data-aos="zoom-in" data-aos-duration="3000">MENTORSHIP PROGRAM 3 DAY CYCLE (BEGINNER PROGRAM)</HeaderText>
      <Text data-aos="zoom-in" data-aos-duration="3000">Our beginner mentorship program on a three-day cycle is specifically designed for those new to the forex trading industry. It provides clear direction on becoming consistent in trading and developing effective strategies for the market.</Text>
      <ListSection data-aos="fade-right" data-aos-duration="3000">
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

      <HeaderText data-aos="zoom-in" data-aos-duration="3000">MENTORSHIP PROGRAM</HeaderText>
      <ProgramWrapper data-aos="fade-right" data-aos-duration="3000">
        <Card title={"BEGINNER PROGRAM"} period={"(3 DAY CYCLE)"} price={800} payUrl="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=16866297&item_name=MENTORSHIP+BEGINNER+PROGRAM&email_confirmation=1&confirmation_address=mutenjejustin2@gmail.com&item_description=MENTORSHIP+BEGINNER+PROGRAM+(3+DAY+CYCLE)&return_url=https://fxblueprint.co.za&cancel_url=https://fxblueprint.co.za&notify_url=https://fxblueprint.co.za&amount=800" />
        <Card title={"STANDARD PROGRAM"} period={"(3 DAY CYCLE)"} price={1000} payUrl="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=16866297&item_name=MENTORSHIP+STANDARD+PROGRAM&email_confirmation=1&confirmation_address=mutenjejustin2@gmail.com&item_description=MENTORSHIP+STANDARD+PROGRAM+(3+DAY+CYCLE)&return_url=https://fxblueprint.co.za&cancel_url=https://fxblueprint.co.za&notify_url=https://fxblueprint.co.za&amount=1000" />
      </ProgramWrapper>

      <HeaderText data-aos="zoom-in" data-aos-duration="3000">TRADING SESSIONS</HeaderText>
      <Card data-aos="fade-right" data-aos-duration="3000" title={"FOREX LESSONS"} period={"(3 HOURS)"} price={400} payUrl="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=16866297&item_name=TRADING+SESSIONS+-+FOREX+LESSONS&email_confirmation=1&confirmation_address=mutenjejustin2@gmail.com&item_description=TRADING+SESSIONS+-+FOREX+LESSONS+-+3+hours&return_url=https://fxblueprint.co.za&cancel_url=https://fxblueprint.co.za&notify_url=https://fxblueprint.co.za&amount=400" />
    </Container>
  );
}

export default Mentorship;
