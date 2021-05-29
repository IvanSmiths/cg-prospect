import useTranslation from 'next-translate/useTranslation';

function Stats() {
  let { t } = useTranslation();
  return (
    <section className="stats">
      <div className="container-cards">
        <div className="card">
          <img
            loading="lazy"
            src="/maps.svg"
            height="60"
            width="60"
            alt="An icon showing maps"
          />
          <h2 className="btn-font highlight">{t('home:stats-card-title1')}</h2>
          <p className="small-font">{t('home:stats-card-desc1')}</p>
        </div>
        <div className="card card-patreon">
          <img
            loading="lazy"
            src="/hand.svg"
            height="60"
            width="60"
            alt="An icon showing a hand"
          />
          <h2 className="btn-font highlight">{t('home:stats-card-title2')}</h2>
          <p className="small-font">{t('home:stats-card-desc2')}</p>
          <a
            target="_blank"
            rel="noopener"
            className="btn-line"
            style={{ color: 'black', border: 'black 2px solid' }}
            href="https://www.patreon.com"
          >
            {t('home:stats-card-btn')}
          </a>
        </div>
        <div className="card">
          <img
            loading="lazy"
            src="/cube.svg"
            height="60"
            width="60"
            alt="An icon showing a cube"
          />
          <h2 className="btn-font highlight">{t('home:stats-card-title3')}</h2>
          <p className="small-font">{t('home:stats-card-desc3')}</p>
        </div>
      </div>
      <h3 className="font-color-inverse stats-title big-font">
        {t('home:stats-title')}
      </h3>
      <div className="container-numbers">
        <div className="numbers">
          <h4 className="medium-font font-color-inverse">
            {t('home:stats-num1')}
            <br />
            {t('home:stats-num1-desc')}
          </h4>
        </div>
        <div className="numbers">
          <h4 className="medium-font font-color-inverse">
            {t('home:stats-num2')} <br />
            {t('home:stats-num2-desc')}
          </h4>
        </div>
        <div className="numbers">
          <h4 className="medium-font font-color-inverse">
            {t('home:stats-num3')} <br />
            {t('home:stats-num3-desc')}
          </h4>
        </div>
        <div className="numbers">
          <h4 className="medium-font font-color-inverse">
            {t('home:stats-num4')} <br />
            {t('home:stats-num4-desc')}
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Stats;
