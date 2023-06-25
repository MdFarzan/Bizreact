import { Component } from "react";
import { Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css";

export default class TestimonialSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoPlay: true,
    };

    return (
      <section className="mt-2 py-4 py-lg-5" style={{ background: "#f6f6f6" }}>
        <div className="testimonial-wrap position-relative">
          <img
            src="testimonial/left-quote.png"
            className="position-absolute quote"
          />
          <Slider {...settings}>
            <div className="w-100">
              <div className="test-header text-center">
                <div className="avtar-wrap text-center">
                  <img src="services/ux.png" className="img-fluid mx-auto" />
                </div>
                <h4>Suresh Kumar</h4>
                <h6>Designer</h6>
                <p className="mt-3 px-3 px-md-4">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <div className="star-rating d-flex justify-content-center mt-4">
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                </div>
              </div>
            </div>
            <div className="w-100">
              <div className="test-header text-center">
                <div className="avtar-wrap text-center">
                  <img src="services/ux.png" className="img-fluid mx-auto" />
                </div>
                <h4>Suresh Kumar</h4>
                <h6>Designer</h6>
                <p className="mt-3 px-3 px-md-4">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <div className="star-rating d-flex justify-content-center mt-4">
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                </div>
              </div>
            </div>
            <div className="w-100">
              <div className="test-header text-center">
                <div className="avtar-wrap text-center">
                  <img src="services/ux.png" className="img-fluid mx-auto" />
                </div>
                <h4>Suresh Kumar</h4>
                <h6>Designer</h6>
                <p className="mt-3 px-3 px-md-4">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <div className="star-rating d-flex justify-content-center mt-4">
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                </div>
              </div>
            </div>
            <div className="w-100">
              <div className="test-header text-center">
                <div className="avtar-wrap text-center">
                  <img src="services/ux.png" className="img-fluid mx-auto" />
                </div>
                <h4>Suresh Kumar</h4>
                <h6>Designer</h6>
                <p className="mt-3 px-3 px-md-4">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <div className="star-rating d-flex justify-content-center mt-4">
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                </div>
              </div>
            </div>
            <div className="w-100">
              <div className="test-header text-center">
                <div className="avtar-wrap text-center">
                  <img src="services/ux.png" className="img-fluid mx-auto" />
                </div>
                <h4>Suresh Kumar</h4>
                <h6>Designer</h6>
                <p className="mt-3 px-3 px-md-4">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <div className="star-rating d-flex justify-content-center mt-4">
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                  <img src="testimonial/star.png" className="star-rating" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
