import styled from "styled-components"

const Text = styled.p`
  padding: 10px;
  color: #fff;
  font-size: 16px;
  text-align: left;
`

// const HeaderText = styled.p`
//   display: flex;
//   justify-content: center;
//   font-size: 38px;
//   color: #FFFFFF;
//   font-weight: bold;
//   padding-top: 10px;
// `

function About() {
  return (
    <div id="about">
      <Text>Fx Blueprint is a wealth institute which assists forex traders in choosing the most efficient and profitable trading strategies. The goal of our business is to offer the best services that can assist our client stepping into the forex trading industry We believe that your success is a direct testament of our own. </Text>
      <Text>In light of this, our trading mentors are genuine traders with real-life outcomes. We wish to provide you with every resource and instrument you need to become successful in forex trading</Text>
    </div>
  )
}

export default About