import styled from 'styled-components'
// import Logo from '../assets/logoPng.png'
import Card from './Card'

// const Text = styled.p`
//   padding: 10px;
//   color: #fff;
//   font-size: 16px;
//   text-align: left;
// `

const HeaderText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 38px;
  color: #FFFFFF;
  font-weight: bold;
  padding-top: 10px;
  padding-top: 2px;
`

const ImageBg = styled.div`
  margin-top: 30px;
  position: relative;
  width: 100%;
`

const ImageText = styled.p`
  margin: 8px;
  color: #FFFFFF;
  font-size: 19px;
  text-align: left;
`;

function Services() {
  return (
    <>
      <HeaderText>SERVICES</HeaderText>
      <ImageBg>
        <ImageText>The Fx Blueprint services provide signal packages as well as an outstanding mentorship program which helps our clients improve there knowledge on the trading industry.</ImageText>
        <ImageText>In addition to technical and educational information we also provide practical information, market insight and real-life testimonials
          Our services seek to expand and enhance our clients skill set and to improve there trading experience.</ImageText>
      </ImageBg>

      <Card title={"CURRENCY PAIRS + GOLD"} period={"Monthly"} price={300} />
      <Card title={"CURRENCY PAIRS + GOLD"} period={"LIFETIME"} price={700} />
      <Card title={"INDICE SIGNALS"} period={"Monthly"} price={400} />
      <Card title={"INDICE SIGNALS"} period={"LIFETIME"} price={700} />
    </>
  )
}

export default Services