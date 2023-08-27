import styled from 'styled-components';
import FounderImage from '../assets/founder.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  // background-color: #222222;
  color: #ffffff;
`;

const HeaderText = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 200px;
  height: 170px;
  border-radius: 50%; /* Adjusted to 50% for a circular shape */
  margin-bottom: 10px;
`;

const TitleText = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
`;

function Founder() {
  return (
    <Container id="founder">
      <HeaderText>CEO & FOUNDER</HeaderText>
      <Image src={FounderImage} alt="Founder" />
      <TitleText>"TENDAI JUSTIN MUTENJE"</TitleText>
      <Text>
        I've been in the forex trading business for five years now, and throughout
        the moment, I've learned a lot about various trading methods and strategies.
        Since I do feel that this is one of my callings.
      </Text>
      <Text>
        I have come to love what I do. I enjoy closing profitable accounts in the
        late afternoons as well as the early mornings of CPI and NFP. This has
        become my daily bread. I don't consider myself a product of anything apart
        from myself.
      </Text>
    </Container>
  );
}

export default Founder;
