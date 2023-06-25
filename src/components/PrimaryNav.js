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
          <Navbar.Brand>BIZREACT</Navbar.Brand>
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
              <LinkContainer to="/service/web-design">
                <NavDropdown.Item>Web Design</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/service/web-development">
                <NavDropdown.Item>Web Development</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/service/ui-ux">
                <NavDropdown.Item>UI/Ux</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/service/graphic-design">
                <NavDropdown.Item>Graphic Design</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/service/crm-development">
                <NavDropdown.Item>CRM Development</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/service/marketing-software">
                <NavDropdown.Item>Marketing Software</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/contact">
              <Nav.Link className="px-3">Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/contact">
              <Nav.Link className="btn bg-dark text-white px-3 m-0">
                Get A Quote
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PrimaryNav;
