"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerCarousel() {
  const [items, setItems] = useState([1]);
  useEffect(() => {
    const handleMouseMove = () => {
      setItems([1, 2, 3]);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div className="custom-container my-5">
      <Slider {...settings}>
        {items.map((each) => (
          <div key={each} className="slider-outer">1</div>
        ))}
      </Slider>
    </div>
  );
}
