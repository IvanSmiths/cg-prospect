import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const VerticalCarousel = ({ data, leadingText }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const halfwayIndex = Math.ceil(data.length / 2);
  const itemHeight = 62;
  const shuffleThreshold = halfwayIndex * itemHeight;
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === 'next') {
        if (prevIndex + 1 > data.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return data.length - 1;
      }

      return prevIndex - 1;
    });
  };

  return (
    <section className="carousel-cnt">
      <div className="carousel-heading-cnt">
        <h3 className="big-font italic highlight-main">#CGPROSPECT</h3>
        <p className="small-font">
          If you are using CG Prospect's textures, use the hashtag #cgprospect
          on Instagram! Get the chance of having your render here for a month.
        </p>
      </div>
      <div className="outer-container">
        <div className="carousel-wrapper">
          <button
            type="button"
            className="carousel-button prev"
            onClick={() => handleClick('prev')}
          >
            <img
              src="/chevronUp.svg"
              alt="arrow up"
              height="20px"
              width="20px"
            />
          </button>

          <div className="carousel">
            <div className="leading-text">
              <h4 className="medium-font">{leadingText}</h4>
            </div>
            <div className="slides">
              <div className="carousel-inner">
                {data.map((item, i) => (
                  <div key={item.id} className="artists-cnt">
                    <h5
                      onClick={() => setActiveIndex(i)}
                      className={cn('carousel-item medium-font', {
                        active: activeIndex === i,
                        visible:
                          Math.abs(determinePlacement(i)) <=
                          visibleStyleThreshold,
                      })}
                      style={{
                        transform: `translateY(${determinePlacement(i)}px)`,
                      }}
                    >
                      {item.introline}
                      <img
                        className="artist-image"
                        height="40px"
                        width="40px"
                        src={item.icon}
                        alt={`${item.introline}, an artist`}
                      />
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="carousel-button next"
            onClick={() => handleClick('next')}
          >
            <img
              src="/chevronDown.svg"
              alt="arrow down"
              height="20px"
              width="20px"
            />
          </button>
        </div>
        <div className="content">
          <img
            width="200px"
            height="200px"
            className="carousel-img"
            src={data[activeIndex].content.image}
            alt={`render of ${data[activeIndex].introline}`}
          />
          <p className="small-font">{data[activeIndex].content.copy}</p>
          <a
            target="blank"
            className="btn highlight a2"
            rel="noopener"
            href={data[activeIndex].link}
          >
            Give it a like!
          </a>
        </div>
      </div>
    </section>
  );
};

VerticalCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  leadingText: PropTypes.string.isRequired,
};

export default VerticalCarousel;
