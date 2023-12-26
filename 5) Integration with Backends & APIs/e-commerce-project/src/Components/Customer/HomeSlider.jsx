import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from '../../api/constant'
import Slider from "react-slick";

export default function SimpleSlider(){

  const settings = {
    //   dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // destructure for slider
  const [slider, setslider] = useState("");

  useEffect(() => {
    axios.get(BASE_URL+"slider")
      .then((res) => { setslider(res.data) })
  }, [])

  return (
    <div>
      <Slider {...settings} className="homeslider">

        {slider && slider.map((item) => { 
        return (

        <div className="slider-container m-0 p-0">
          <img src={item.sliderimg} />
        </div>

        )
        })}
      </Slider>
    </div>
  );
}
