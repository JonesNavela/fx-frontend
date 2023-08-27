import { Container, Nav, Navbar } from 'react-bootstrap'

function Navigationbar() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container fluid style={{ backgroundColor: '##060606 !important' }}>
        <div>
        <Navbar.Brand href="#home">FX Blueprint</Navbar.Brand>

        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#about">About us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#founder">Founder</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigationbar