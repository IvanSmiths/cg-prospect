import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const Homepage3dModel = () => {
  let { t } = useTranslation();
  return (
    <section>
      <div className="hp-3d-model-cnt">
        <h3 className="big-font">{t('home:showcase-model-cnt-title')}</h3>
        <p className="small-font highlight">
          {t('home:showcase-model-cnt-desc')}
        </p>
        <Link href="/freee-3d-models">
          <a className="btn-line">{t('home:showcase-model-btn')}</a>
        </Link>
      </div>
      <div className="flex-50 model-3d-example-cnt">
        <div>
          <h4 className="medium-font">{t('home:showcase-model-title1')}</h4>
          <p className="small-font">{t('home:showcase-model-desc1')}</p>
          <Link href="/freee-3d-models">
            <a className="btn-line">{t('home:showcase-model-btn')}</a>
          </Link>
        </div>
        <div className="model-3d-example">
          <img
            loading="lazy"
            src="/3d-model-showcase-2.jpeg"
            height="300"
            width="300"
            alt="3d model example"
          />
        </div>
      </div>
      <div className="flex-50 model-3d-example-cnt-2">
        <div className="model-3d-example">
          <img
            loading="lazy"
            src="/3d-model-showcase-3.jpeg"
            height="300"
            width="300"
            alt="3d model example"
          />
        </div>
        <div>
          <h4 className="medium-font">{t('home:showcase-model-title2')}</h4>
          <p className="small-font">{t('home:showcase-model-desc2')}</p>
          <Link href="/freee-3d-models">
            <a className="btn-line">{t('home:showcase-model-btn')}</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Homepage3dModel;
