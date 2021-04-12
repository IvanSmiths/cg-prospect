import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = () => {
  const SliderData = [
    {
      link: 'https://www.google.com',
      image:
        'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      link: 'https://www.amazon.com',
      image:
        'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80',
    },
    {
      link: 'https://www.google.com',
      image:
        'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    },
    {
      link: 'https://www.google.com',
      image:
        'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
    },
    {
      link: 'https://www.google.com',
      image:
        'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
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
        Instagram! You'll receive a message, asking if you want your render to
        be here.
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
              <div className={index === current ? 'slide active' : 'slide'}>
                {index === current && (
                  <img
                    height="auto"
                    width="800"
                    src={slide.image}
                    alt="travel image"
                    className="image"
                  />
                )}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ImageSlider;
