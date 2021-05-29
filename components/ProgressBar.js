import { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';

const Progress = ({ done }) => {
  let { t } = useTranslation();
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
        {t('home:patreon-progress')}{' '}
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
