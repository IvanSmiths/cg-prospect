import ProgressBar from './ProgressBar';
import useTranslation from 'next-translate/useTranslation';

function Patreon() {
  let { t } = useTranslation();
  return (
    <section className="patreon">
      <div className="patreon-text">
        <h2 className="big-font patreon-h2">{t('home:patreon-title')}</h2>
        <p className="small-font">
          {t('home:patreon-desc1')}
          <strong className="highlight-patreon">
            {' '}
            {t('home:patreon-desc2')}
          </strong>{' '}
          ,{t('home:patreon-desc3')}
        </p>
      </div>
      <div>
        <ProgressBar done="16" />
      </div>
      <a
        className="btn patreon-clr"
        href="https://www.patreon.com/"
        target="_blank"
        rel="noopener"
      >
        {t('home:patreon-btn')}
      </a>
    </section>
  );
}
export default Patreon;
