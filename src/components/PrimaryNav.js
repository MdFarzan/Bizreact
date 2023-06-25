import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./PrimaryNav.css";
import { LinkContainer } from "react-router-bootstrap";

function PrimaryNav() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary justify-content-center"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>LOGO</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-auto">
            <LinkContainer to="/">
              <Nav.Link className="px-3">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="px-3">About Us</Nav.Link>
            </LinkContainer>
            <NavDropdown
              className="px-3"
              title="Services"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Web Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">UI/Ux</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Graphic Design
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                CRM Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Marketing Software
              </NavDropdown.Item>
            </NavDropdown>

            <LinkContainer to="/contact">
              <Nav.Link className="px-3">Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/contact">
              <Nav.Link>Get A Quote</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PrimaryNav;