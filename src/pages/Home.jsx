import Navigationbar from "../components/Navigationbar"
import styled from 'styled-components'
import Logo from '../assets/logoPng.png'
import BgImg from '../assets/bgImage.png'
import About from "../components/About"
import Services from "../components/Services"
import Mentorship from "../components/Mentorship"
import Founder from "../components/Founder"
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import PaymentNotificationHandler from '../components/PaymentNotificationHandler'
import { Button } from 'react-bootstrap'

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
    color: #030303;
    background-color: #A8963E;
    border-radius: 22px;
    width: 305px ;
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

function Home() {
  return (
    <HomeContainer>
      <Navigationbar />
      <PaymentNotificationHandler />

      <LogoContainer>
        <img src={Logo} alt="FX Blueprint logo" />
      </LogoContainer>

      <Slogan>
        "BUILDING WEALTH AND <br /> EXPANDING KNOWLEDGE"
      </Slogan>
      <ViewButton>
        <Button>
          View Services
        </Button>
      </ViewButton>

      <ImageBg>
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
