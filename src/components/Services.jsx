import styled from 'styled-components';
import Card from './Card';
import backgroundImage from '../assets/logoPng.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

AOS.init();

function Services() {
  return (
    <Container id="services">
      <HeaderText data-aos="zoom-in" data-aos-duration="3000">SERVICES</HeaderText>
      <ImageBg>
        <ImageText data-aos="fade-right" data-aos-duration="3000">The Fx Blueprint services provide signal packages as well as an outstanding mentorship program which helps our clients improve their knowledge of the trading industry.</ImageText>
        <ImageText data-aos="fade-right" data-aos-duration="3000">In addition to technical and educational information, we also provide practical information, market insights, and real-life testimonials. Our services aim to expand and enhance our clients' skill sets and improve their trading experience.</ImageText>
      </ImageBg>

      <Card data-aos="fade-right" data-aos-duration="3000" title="CURRENCY PAIRS + GOLD" period="Monthly" price={300} payUrl="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=16866297&item_name=CURRENCY_PAIRS+_GOLD_MONTHLY&email_confirmation=1&confirmation_address=mutenjejustin2@gmail.com&item_description=CURRENCY+PAIRS+and+GOLD+Monthly&return_url=https://fxblueprint.co.za&cancel_url=https://fxblueprint.co.za&amount=300" />
      <Card data-aos="fade-right" data-aos-duration="3000" title="CURRENCY PAIRS + GOLD" period="LIFETIME" price={700} payUrl="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=16866297&item_name=CURRENCY+PAIRS+and+GOLD+(Lifetime)&email_confirmation=1&confirmation_address=mutenjejustin2@gmail.com&item_description=CURRENCY+PAIRS+and+GOLD+(Lifetime)&return_url=https://fxblueprint.co.za&cancel_url=https://fxblueprint.co.za&notify_url=https://fxblueprint.co.za&amount=700" />
      <Card data-aos="fade-right" data-aos-duration="3000" title="INDICE SIGNALS" period="Monthly" price={400} payUrl="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=16866297&item_name=INDICE+SIGNALS+(Monthly)&email_confirmation=1&confirmation_address=mutenjejustin2@gmail.com&item_description=INDICE+SIGNALS+(Monthly)&return_url=https://fxblueprint.co.za&cancel_url=https://fxblueprint.co.za&notify_url=https://fxblueprint.co.za&amount=400" />
      <Card data-aos="fade-right" data-aos-duration="3000" title="INDICE SIGNALS" period="LIFETIME" price={700} payUrl="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=16866297&item_name=INDICE+SIGNALS+(Lifetime)&email_confirmation=1&confirmation_address=mutenjejustin2@gmail.com&item_description=INDICE+SIGNALS+(Lifetime)&return_url=https://fxblueprint.co.za&cancel_url=https://fxblueprint.co.za&notify_url=https://fxblueprint.co.za&amount=700" />
      <Card data-aos="fade-right" data-aos-duration="3000" title="TEST SIGNALS" period="LIFETIME" price={5} payUrl="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=16866297&item_name=Test+Item&email_confirmation=1&confirmation_address=mutenjejustin2@gmail.com&item_description=Test+item+for+testing+payment&return_url=https://fxblueprint.co.za&cancel_url=https://fxblueprint.co.za&notify_url=https://fxblueprint.co.za&amount=5" />
    </Container>
  );
}

export default Services;
