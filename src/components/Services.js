import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CenterTitle from "./CenterTitle";
import SingleService from "./SingleService";

export default function Services() {
  return (
    <section className="mt-2 py-4 py-lg-5" style={{ background: "#f6f6f6" }}>
      <Container>
        <Row>
          <Col sm={12}>
            <CenterTitle
              title="Service"
              subtitle="We provide best value"
            ></CenterTitle>
            <Row className="mt-4">
              <SingleService
                sm="12"
                md="3"
                lg="4"
                xl="4"
                xxl="4"
                icon="services/ux.png"
                title="Web Design"
                desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
              />
              <SingleService
                sm="12"
                md="3"
                lg="4"
                xl="4"
                xxl="4"
                icon="services/app-development.png"
                title="Web Development"
                desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
              />
              <SingleService
                sm="12"
                md="3"
                lg="4"
                xl="4"
                xxl="4"
                icon="services/programming.png"
                title="UI/Ux"
                desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
              />
              <SingleService
                sm="12"
                md="3"
                lg="4"
                xl="4"
                xxl="4"
                icon="services/graphic-designer.png"
                title="Graphic Design"
                desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
              />
              <SingleService
                sm="12"
                md="3"
                lg="4"
                xl="4"
                xxl="4"
                icon="services/customer-royalty.png"
                title="CRM Development"
                desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
              />
              <SingleService
                sm="12"
                md="3"
                lg="4"
                xl="4"
                xxl="4"
                icon="services/bullhorn.png"
                title="Marketing Software"
                desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
