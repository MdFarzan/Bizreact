import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleFact from "./SingleFact";
import CenterTitle from "./CenterTitle";

export default function WhyUs() {
  return (
    <section className="mt-2 py-4 py-lg-5">
      <Container>
        <Row>
          <Col xs="12">
            <CenterTitle title="Choose Us" subtitle="Why to"></CenterTitle>

            <Row className="mt-3">
              <Col md="6" lg="4">
                <SingleFact
                  num="100 +"
                  icon="why-us/project-management.png"
                  title="Project served"
                />
              </Col>
              <Col md="6" lg="4">
                <SingleFact
                  num="95 +"
                  icon="why-us/costumer.png"
                  title="Happy clients"
                />
              </Col>
              <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 0 }}>
                <SingleFact
                  num="15 +"
                  icon="why-us/professional-services.png"
                  title="Professionals"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
