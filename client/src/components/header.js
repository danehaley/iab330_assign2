import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <header className="app-header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HealthView</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#patients">Patients</Nav.Link>
            <Nav.Link href="#booking">Booking</Nav.Link>
            <Nav.Link href="#maintenace">Maintenance</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
