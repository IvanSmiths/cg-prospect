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
      <ul className="cnt-progress-text">
        <li className="small-font highlight">{t('home:patreon-sub')} 0</li>
        <li className="small-font highlight">
          {t('home:patreon-progress1')}0$
        </li>
        <li className="small-font highlight">
          {t('home:patreon-progress')}20$ (2 {t('home:patreon-progress2')}){' '}
          <img
            loading="lazy"
            src="/down-arrow.svg"
            height="32px"
            width="32px"
            alt="arrow down"
          />
        </li>
      </ul>
      <div className="progress">
        <div className="progress-done" style={style}>
          <h4 className="btn-font">{done}%</h4>
        </div>
      </div>
    </div>
  );
};

export default Progress;
