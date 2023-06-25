import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SingleFact.css";

export default function SingleFact(props) {
  return (
    <Col>
      <Row className="single-fact py-3 py-md-2 px-1 text-center text-md-start">
        <Col sm="4">
          <span className="icon mb-2 mb-md-0">
            <img src={props.icon} className="img-fluid" />
          </span>
        </Col>
        <Col
          sm="8"
          className="d-md-flex flex-md-column justify-content-md-center"
        >
          <h4 className="mb-0">{props.num}</h4>
          <p className="mb-0 lead">{props.title}</p>
        </Col>
      </Row>
    </Col>
  );
}
