import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";
import { useNavigate } from "react-router-dom";
import "./Slider.scss";

const Slider = () => {
  
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = sliderData.length;
  const auotoScroll = true;
  let slideInterval;
  const intervalTime = 5000;
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (auotoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }

    return () => clearInterval(slideInterval);
  }, [currentSlide, intervalTime, auotoScroll]);

  return (
    <div className="slider">
      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;

        return (
          <div
            key={index}
            className={index === currentSlide ? "slide current" : "slide"}
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" />
                <div className="content">
                  <span className="span1"></span>
                  <span className="span2"></span>
                  <span className="span3"></span>
                  <span className="span4"></span>
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <a
            href="https://wa.me/<917044910991>?text=I%20am%20interested%20in%20your%20photography%20services."
            className="btn btn-dark"
            target="_blank"
             rel="noopener noreferrer"
          >
            Book Now
          </a>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Slider;
