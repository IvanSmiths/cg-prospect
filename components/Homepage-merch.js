import useTranslation from 'next-translate/useTranslation';

const HomepageMerch = () => {
  let { t } = useTranslation();
  return (
    <section className="merch-cnt margin-section flex-50">
      <div className="merch-first-col">
        <div>
          <h3 className="big-font italic">
            {t('home:merch-title')}
            <br /> {t('home:merch-title-2')} <br /> {t('home:merch-title-3')}
          </h3>
          <p className="small-font">
            {t('home:merch-desc')} <strong> {t('home:merch-desc-2')}</strong>
            {t('home:merch-desc-3')} {''}
            <b className="highlight-main"> {t('home:merch-desc-4')}</b>
          </p>

          <a
            className="btn black teespring-clr"
            target="_blank"
            rel="noopener"
            href="https://cg-prospect.creator-spring.com"
          >
            {t('home:merch-btn')}
          </a>
        </div>
      </div>
      <div className="merch-sec-col">
        <a
          target="_blank"
          rel="noopener"
          href="https://cg-prospect.creator-spring.com"
        >
          <img
            loading="lazy"
            height="550"
            width="550"
            src="/3d-merch-2.png"
            alt="image of a shirt"
            className="image-merch"
          />
        </a>
      </div>
    </section>
  );
};

export default HomepageMerch;
