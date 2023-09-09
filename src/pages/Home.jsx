import Navigationbar from "../components/Navigationbar"
import styled from 'styled-components'
import Logo from '../assets/main.png'
import BgImg from '../assets/bgImage.png'
import About from "../components/About"
import Services from "../components/Services"
import Mentorship from "../components/Mentorship"
import Founder from "../components/Founder"
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import PaymentNotificationHandler from '../components/PaymentNotificationHandler'
import { Button } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomeContainer = styled.div`
  background-color: #060606 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 200px;
  }
`

const Slogan = styled.div`
  display: flex;
  justify-content: center;
  color: #FFFFFF;
  font-size: 25px;
  font-weight: bold;
`

const ViewButton = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;

  button {
    font-size: 17px
    font-weight: bold;
    color: white  #A8963E !important;
    background-color: #A8963E !important;
    border-radius: 22px;
    width: 21vh;
  }
`

const ImageBg = styled.div`
  margin-top: 30px;
  position: relative;
  background-image: url('${BgImg}');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
`

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FFFFFF;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

AOS.init();

function Home() {
  return (
    <HomeContainer>
      <Navigationbar />
      <PaymentNotificationHandler />

      <LogoContainer data-aos="zoom-in" data-aos-duration="3000">
        <img src={Logo} alt="FX Blueprint logo" />
      </LogoContainer>

      <Slogan data-aos="zoom-in-down" data-aos-duration="3000">
        "BUILDING WEALTH AND <br /> EXPANDING KNOWLEDGE"
      </Slogan>
      <ViewButton data-aos="fade-right" data-aos-duration="3000">
        <Button>
         <a href="#services" style={{ textDecoration: 'none', color: 'white'}}>View Services</a>
        </Button>
      </ViewButton>

      <ImageBg data-aos="fade-right" data-aos-duration="3000">
        <Text>ABOUT US</Text>
      </ImageBg>
      <About />
      <Founder />
      <Services />
      <Mentorship />
      <Reviews />
      <Footer />
    </HomeContainer>
  )
}

export default Home
