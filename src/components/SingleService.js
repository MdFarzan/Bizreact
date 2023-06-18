
import Col from 'react-bootstrap/Col';
import './SingleService.css';

export default function SingleService(props){
    return(
        <Col className="p-0 m-0" sm={props.sm} md={props.md} lg={props.lg} xl={props.xl} xxl={props.xxl}>
            <a href={props.link=='' || typeof props.link == 'undefined'?'#':props.link} className="text-decoration-none d-block single-service-wrap text-center bg-white py-5 px-3">
                <span className="icon-wrap"><img src={props.icon} className="img-fluid" /></span>
                <h4>{props.title}</h4>
                <p className="mb-0 text-dark">{props.desc}</p>
            </a>
        </Col>
    )
}