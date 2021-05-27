import { useState, useEffect } from 'react';

const Progress = ({ done }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const newStyle = {
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, []);

  return (
    <div className="cnt-progress">
      <h3 className="small-font highlight">
        Next Goal: 20$ (5 weekly textures){' '}
        <img
          loading="lazy"
          src="/down-arrow.svg"
          height="32px"
          width="32px"
          alt="arrow down"
        />
      </h3>
      <div className="progress">
        <div className="progress-done" style={style}>
          <h4 className="btn-font">{done}%</h4>
        </div>
      </div>
    </div>
  );
};

export default Progress;
