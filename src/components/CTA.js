import { Col, Container, Row } from "react-bootstrap";
import "./CTA.css";
import ContactForm from "./ContactForm";
import LeftTitle from "./LeftTitle";

export default function CTA(){
    return (
        <section className="mt-2 py-4 py-lg-5 cta">
        <Container>
        <Row>
            <Col md="6" lg="6" className="d-flex align-items-center">
                <Row>
                    <Col md={12} className="mb-5">
                        <Row>
                            <Col md="2"><span class="icon d-block"><img className="img-fluid" src="services/ux.png" alt="icon" /></span></Col>
                            <Col md="9">
                            <h5 className="mb-0">Call Us</h5>
                            <a class="heading" href="tel:+91 9999 999 999">+91 9999 999 999</a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} className="mb-5">
                        <Row>
                            <Col md="2"><span class="icon d-block"><img className="img-fluid" src="services/ux.png" alt="icon" /></span></Col>
                            <Col md="9">
                            <h5 className="mb-0">Mail Us</h5>
                            <a class="heading" href="mail:site@mail.com">site@mail.com</a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} className="mb-5">
                        <Row>
                            <Col md="2"><span class="icon d-block"><img className="img-fluid" src="services/ux.png" alt="icon" /></span></Col>
                            <Col md="9">
                            <h5 className="mb-0">Reach Us</h5>
                            <a class="heading" href="tel:+91 9999 999 999">44K Tower B, California, USA</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col md="6" lg="6" >
            <LeftTitle title="Please fill this form" subtitle="Want a callback?"></LeftTitle>
            <div className="mt-4">
                <ContactForm />
                </div>
            </Col>
        </Row>
        </Container>
        </section>
    )
}