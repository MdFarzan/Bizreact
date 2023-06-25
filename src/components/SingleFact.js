import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SingleFact.css";

export default function SingleFact(props) {
  return (
    <Col>
      <Row className="single-fact py-2 px-1">
        <Col sm="4">
          <span className="icon">
            <img src={props.icon} className="img-fluid" />
          </span>
        </Col>
        <Col
          sm="8"
          className="d-md-flex flex-md-column justify-content-md-center"
        >
          <h4>{props.num}</h4>
          <p className="mb-0">{props.title}</p>
        </Col>
      </Row>
    </Col>
  );
}
