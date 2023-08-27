import styled from 'styled-components'
import FounderImage from '../assets/founder.jpg'

const HeaderText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 38px;
  color: #FFFFFF;
  font-weight: bold;
  margin-top: 40px;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 200px;
    height: 170px;
    border-radius: 60%;
  }
`

const TitleText = styled.p`
  display: flex;
  justify-content: center;
  color: white;
  margin-top: 10px;

  font-size: 12px;
  font-weight: bold;
`

const Text = styled.p`
  margin: 8px;
  color: #FFFFFF;
  font-size: 19px;
  text-align: center;
`;

function Founder() {
  return (
   <>
      <HeaderText>CEO & FOUNDER</HeaderText>
      <ImageContainer>
        <img src={FounderImage} alt="" />
      </ImageContainer>

      <TitleText>"TENDAI JUSTIN MUTENJE"</TitleText>
      
      <Text>I've been in the forex trading business for five years now, and throughout the moment, I've learned a lot about various trading methods and strategies. Since I do feel that this is one of my callings.</Text>
      <Text>I have come to love what I do. I enjoy closing profitable accounts in the late afternoons as well as the early mornings of CPI and NFP. This has become my daily bread. I don't consider myself a product of anything apart from myself.</Text>
   </>
  )
}

export default Founder