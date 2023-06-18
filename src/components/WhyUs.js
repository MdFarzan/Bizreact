import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleFact from './SingleFact';
import CenterTitle from './CenterTitle';


export default function WhyUs(){
    return(
        <section className="mt-2 py-4 py-lg-5">
            <Container>
                <Row>
                    <Col xs="12">
                        <CenterTitle title="Choose Us" subtitle="Why to"></CenterTitle>

                        <Row className="mt-3">
                            <Col md="3" lg="4">
                            <SingleFact num="1234+" icon="services/ux.png" title="Project served" />
                            </Col>
                            <Col md="3" lg="4">
                            <SingleFact num="1234+" icon="services/ux.png" title="Project served" />
                            </Col>
                            <Col md="3" lg="4">
                            <SingleFact num="1234+" icon="services/ux.png" title="Project served" />
                            </Col>
                            <Col md="3" lg="4">
                            <SingleFact num="1234+" icon="services/ux.png" title="Project served" />
                            </Col>
                            <Col md="3" lg="4">
                            <SingleFact num="1234+" icon="services/ux.png" title="Project served" />
                            </Col>
                            <Col md="3" lg="4">
                            <SingleFact num="1234+" icon="services/ux.png" title="Project served" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}