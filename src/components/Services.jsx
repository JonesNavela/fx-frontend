import styled from 'styled-components';
import Card from './Card';
import backgroundImage from '../assets/logoPng.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

const HeaderText = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #FFFFFF;
  margin: 20px 0;
`;

const ImageBg = styled.div`
  display: block;
  margin-top: 20px;
  width: 100%;
  padding: 20px;

  @media (max-width: 767px) {
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const ImageText = styled.p`
  margin: 10px 0;
  color: #FFFFFF;
  font-size: 18px;
  text-align: left;
`;

function Services() {
  return (
    <Container id="services">
      <HeaderText>SERVICES</HeaderText>
      <ImageBg>
        <ImageText>The Fx Blueprint services provide signal packages as well as an outstanding mentorship program which helps our clients improve their knowledge of the trading industry.</ImageText>
        <ImageText>In addition to technical and educational information, we also provide practical information, market insights, and real-life testimonials. Our services aim to expand and enhance our clients' skill sets and improve their trading experience.</ImageText>
      </ImageBg>

      <Card title="CURRENCY PAIRS + GOLD" period="Monthly" price={300} payUrl="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=16866297&item_name=CURRENCY_PAIRS+_GOLD_MONTHLY&email_confirmation=1&confirmation_address=mutenjejustin2@gmail.com&item_description=CURRENCY+PAIRS+and+GOLD+Monthly&return_url=https://fxblueprint.co.za&cancel_url=https://fxblueprint.co.za&amount=300" />
      <Card title="CURRENCY PAIRS + GOLD" period="LIFETIME" price={700} />
      <Card title="INDICE SIGNALS" period="Monthly" price={400} />
      <Card title="INDICE SIGNALS" period="LIFETIME" price={700} />
    </Container>
  );
}

export default Services;
