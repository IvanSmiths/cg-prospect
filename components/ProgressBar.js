import { useState, useEffect } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';

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
        <FaArrowAltCircleDown className="arrow-progress" />
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
