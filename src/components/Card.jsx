import React, { useState } from "react";
import styled from "styled-components";
import { Button, Modal } from 'react-bootstrap';


const Container = styled.div`
padding: 20px;
display: flex;
justify-content: center;
`

const CardComponent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40vh;
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
    width: 16vh;
    margin: 5px;
  }
`

function Card({ title, period, price, payUrl }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleBuyClick = () => {
    handleShow();
  };

  return (
    <Container>
      <CardComponent>
        <CardTitle>{title}</CardTitle>
        <CardTitle>{period}</CardTitle>
        <CardTitle>R{price}</CardTitle>
        <ButtonContainer>
          <Button onClick={handleBuyClick}>BUY ME</Button>
        </ButtonContainer>
      </CardComponent>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please use your email address on the payment portal in order to receive a confirmation email from us.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ backgroundColor: '#A8963E'}} href={payUrl} onClick={handleClose}>
            Continue to Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}


export default Card