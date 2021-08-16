import useTranslation from 'next-translate/useTranslation';

function Myself() {
  let { t } = useTranslation();
  return (
    <section className="myself flex-50 margin-section">
      <div>
        <img
          className="image-myself"
          loading="lazy"
          src="/myself-4.png"
          height="846"
          width="476"
          alt="An image of myself"
        />
      </div>
      <div className="myself-text">
        <h2 className="big-font">{t('home:myself-title')}</h2>
        <p className="small-font">{t('home:myself-desc')}</p>
        <h3 className="small-font">
          {t('home:myself-translate')}{' '}
          <a
            target="_blank"
            rel="noopener"
            href={t('home:myself-translate-link')}
          >
            <span className="highlight underline">
              {t('home:myself-translate-by')}
            </span>{' '}
          </a>
        </h3>
      </div>
    </section>
  );
}

export default Myself;
