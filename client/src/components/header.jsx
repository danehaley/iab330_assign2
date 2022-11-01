import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GiHealthNormal } from "react-icons/gi";

export default function Header() {
  return (
    <header className="header">
      <Navbar bg="dark" variant="dark" position="sticky">
        <Container>
          <Navbar.Brand className="d-flex">
            <GiHealthNormal alt="brand" className="my-auto me-2" />
            <Link className="nav-link" to="/">
              HealthView
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
              <Link className="nav-link" to="/">
                Overview
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/maintenance">
                Maintenance
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/patients">
                Patients
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
