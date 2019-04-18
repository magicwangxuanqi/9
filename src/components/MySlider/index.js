import React from "react";
// import { } from 'antd';
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "./index.scss";

class MySlider extends React.Component {
  componentDidMount() {
    const galleryTop = new Swiper(".gallery-top", {
      loop: true,
      loopedSlides: 3, //looped slides should be the same
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
  render() {
    return (
      <div className="my-slider">
        {/* <!-- Swiper --> */}
        <div
          className="swiper-container gallery-top"
          style={{ height: "80%", width: "100%" }}
        >
          <div className="swiper-wrapper">
            {[1, 2, 3].map(item => {
              return (
                <div className="swiper-slide" key={item}>
                  <img src={require(`../../assets/${item}.jpg`)} alt="" />
                </div>
              );
            })}
          </div>
          {/* <!-- Add Arrows --> */}
          <div className="swiper-button-next swiper-button-white" />
          <div className="swiper-button-prev swiper-button-white" />
        </div>
      </div>
    );
  }
}

export default MySlider;
