import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

function Stats() {
  let { t } = useTranslation();
  return (
    <section className="stats">
      <div className="container-cards">
        <div className="card">
          <img
            loading="lazy"
            src="/texture-icon.svg"
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
            src="/hand-patreon.svg"
            height="60"
            width="60"
            alt="An icon showing a hand"
          />
          <h2 className="btn-font highlight">{t('home:stats-card-title2')}</h2>
          <p className="small-font patreon-p">{t('home:stats-card-desc2')}</p>
          <a
            target="_blank"
            rel="noopener"
            className="btn-line"
            style={{ color: 'black', border: 'black 2px solid' }}
            href="https://www.patreon.com/cgprospect"
          >
            {t('home:stats-card-btn')}
          </a>
        </div>
        <div className="card">
          <img
            loading="lazy"
            src="/3d-model-icon.svg"
            height="60"
            width="60"
            alt="An icon showing a cube"
          />
          <h2 className="btn-font highlight">{t('home:stats-card-title3')}</h2>
          <p className="small-font">
            {t('home:stats-card-desc3')}
            <Link href="/branding">
              <a>
                <span className="highlight underline">
                  {t('home:stats-card-desc3-2')}
                </span>
              </a>
            </Link>
          </p>
        </div>
      </div>
      <h3 className="font-color-inverse stats-title big-font">
        {t('home:stats-title')}
      </h3>
      <div>
        <ul className="container-numbers">
          <li className="numbers medium-font highlight font-color-inverse">
            24
            <br />
            {t('home:stats-num1-desc')}
          </li>
          <li className="numbers medium-font highlight font-color-inverse">
            1 <br />
            {t('home:stats-num2-desc')}
          </li>
          {/* <li className="numbers">
            <h4 className="medium-font font-color-inverse">
              0 <br />
              {t('home:stats-num3-desc')}
            </h4>
          </li> */}
          <li className="numbers medium-font highlight font-color-inverse">
            23.3Gb <br />
            {t('home:stats-num4-desc')}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Stats;
