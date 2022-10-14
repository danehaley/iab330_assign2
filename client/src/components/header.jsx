import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="app-header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to="/">
              HealthView
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/patients">
                Patients
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/bookings">
                Bookings
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/maintenance">
                Maintenance
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
