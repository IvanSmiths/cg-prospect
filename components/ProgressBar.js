import { useState } from 'react';

const Progress = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 700);

  return (
    <div className="cnt-progress">
      <h3 className="small-font highlight">
        Next Goal: 20$ (5 weekly textures){' '}
        <span className="arrow"> &#8675; </span>
      </h3>
      <div className="progress">
        <div className="progress-done" style={style}>
          <h4 className="btn-font">{done}%</h4>
        </div>
      </div>
    </div>
  );
};

const ProgressBar = () => (
  <>
    <Progress done="16" />
  </>
);

export default ProgressBar;
