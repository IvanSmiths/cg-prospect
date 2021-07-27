import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = () => {
  const SliderData = [
    {
      link: 'https://cg-prospect.creator-spring.com/listing/cgp-t-shirt?product=1429',
      image: '/3d-merch.jpg',
      alt: 'Shirt of CG Prospect',
      author: 'Ivan Smiths',
    },
    {
      link: 'https://cg-prospect.creator-spring.com/listing/cgp-t-shirt?product=1430',
      image: '/3d-merch-2.jpg',
      alt: 'Shirt of CG Prospect',
      author: ' Cg Prospect',
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight
        className="right-arrow arrow"
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <a key={index} href={slide.link} target="_blank" rel="noopener">
            {index === current && (
              <div className={index === current ? 'slide active' : 'slide'}>
                <img
                  loading="lazy"
                  height="550"
                  width="550"
                  src={slide.image}
                  alt={slide.alt}
                  className="image-merch"
                />
              </div>
            )}
          </a>
        );
      })}
    </div>
  );
};

export default ImageSlider;
