import useTranslation from 'next-translate/useTranslation';

function Myself() {
  let { t } = useTranslation();
  return (
    <section className="myself flex-50 margin-section">
      <div>
        <img
          className="image-myself"
          loading="lazy"
          src="/myself.png"
          height="846"
          width="476"
          alt="An image of myself"
        />
      </div>
      <div className="myself-text">
        <h2 className="big-font">{t('home:myself-title')}</h2>
        <div className="myself-icon-cnt">
          <a
            href="https://www.instagram.com/ivan_smiths/?hl=en"
            target="_blank"
            rel="noopener"
          >
            <img
              loading="lazy"
              src="/icon-instagram.svg"
              width="24"
              height="24"
              alt="Link to the Instagram private profile"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100068565862720"
            target="_blank"
            rel="noopener"
          >
            <img
              loading="lazy"
              src="/icon-facebook.svg"
              width="24"
              height="24"
              alt="Link to the Facebook private account"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ivan-fabbri/"
            target="_blank"
            rel="noopener"
          >
            <img
              loading="lazy"
              src="/icon-linkedin.svg"
              width="25"
              height="25"
              alt="Link to the LinkedIn private account"
            />
          </a>
        </div>
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
