import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftTitle from "./LeftTitle";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

export default function AboutUs(props) {
  return (
    <section className="mt-2 py-4 py-lg-5">
      <Container>
        <Row>
          <Col md={5} className="border-1">
            <img src="about-us/about-us.jpg" className="img-fluid" />
          </Col>
          <Col md={7} className="border-1">
            <LeftTitle title="Know about Us" subtitle="Welcome to our site" />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>

            {(typeof props.showButton == "undefined" ||
              props.showButton == 1) && (
              <LinkContainer to="/about">
                <Button variant="primary">Read More</Button>
              </LinkContainer>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
