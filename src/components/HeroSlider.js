import { Component } from "react";
import { Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class HeroSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Row>
        <Slider {...settings}>
          <div className="w-100">
            <img src="slides/test.jpg" className="img-fluid" />
          </div>
          <div className="w-100">
            <img src="slides/test.jpg" className="img-fluid" />
          </div>
          <div>
            <img src="slides/test.jpg" className="img-fluid" />
          </div>
          <div>
            <img src="slides/test.jpg" className="img-fluid" />
          </div>
        </Slider>
      </Row>
    );
  }
}
