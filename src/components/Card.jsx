import styled from "styled-components"
import { Button } from 'react-bootstrap'

const Container = styled.div`
padding: 20px;
display: flex;
justify-content: center;
`

const CardComponent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  background-color: white;
  color: black;
  border-radius: 12px;
`

const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 19;
  font-weight: bold;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  
  button {
    background-color: #A8963E;
    color: white;
    font-size: 14px;
    font-weight: bold;
    width: 120px;
    margin: 5px;
  }
`

function Card({ title, period, price, payUrl }) {
  return (
    <Container>
      <CardComponent>
        <CardTitle>{title}</CardTitle>
        <CardTitle>{period}</CardTitle>
        <CardTitle>R{price}</CardTitle>
        <ButtonContainer>
            <Button>
              <a style={{ textDecoration: 'none', color: 'white'}} href={payUrl}>BUY ME</a>
            </Button>
        </ButtonContainer>
    </CardComponent>
    </Container>
  )
}

export default Card