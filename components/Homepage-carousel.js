import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = () => {
  const SliderData = [
    {
      link: 'https://www.google.com',
      image:
        'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'A render with Cg Prospect textures',
      author: 'Ivan Smiths',
    },
    {
      link: 'https://www.amazon.com',
      image:
        'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80',
      alt: 'A render with Cg Prospect textures',
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
    <section className="slider-renders-cnt">
      <h3 className="big-font italic highlight-main">#CGPROSPECT</h3>
      <p className="small-font">
        If you are using CG Prospect's textures, use the hashtag #cgprospect on
        Instagram! Get the chance of having your render here for a month.
      </p>
      <div className="slider">
        <FaArrowAltCircleLeft
          className="left-arrow arrow"
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className="right-arrow arrow"
          onClick={nextSlide}
        />
        {SliderData.map((slide, index) => {
          return (
            <a key={index} href={slide.link} target="_blank" rel="noopener">
              {index === current && (
                <div className={index === current ? 'slide active' : 'slide'}>
                  <h3 className="small-font highlight render-instagram">
                    Render by: {slide.author}
                  </h3>
                  <img
                    loading="lazy"
                    height="400"
                    width="800"
                    src={slide.image}
                    alt={slide.alt}
                    className="image"
                  />
                </div>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ImageSlider;
