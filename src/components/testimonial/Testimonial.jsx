import React from 'react';
import './Testimonial.css';
import Slider from "react-slick";
import ReviewCard from './ReviewCard';

export default function Testimonial() {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className='testimonial-container'>
        <div className='testimonial-heading'>
            <h2>
                REVIEWS
            </h2>
            <span>
                Clients Speak
            </span>
        </div>
        <div className='testimonial-slider-container'>
            <Slider {...settings}>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
            </Slider>
        </div>
    </div>
  )
}
