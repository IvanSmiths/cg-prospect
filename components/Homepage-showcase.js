import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import SrcImage from './ScrImage';

function Showcase() {
  let { t } = useTranslation();
  return (
    <main className="texture-example">
      <div className="texture-example-1 flex-50">
        <div>
          <SrcImage
            webp="/texture-example.webp"
            src="/texture-example.jpg"
            height="200"
            width="200"
            alt="example of a render"
          />
        </div>
        <div>
          <h3 className="big-font">{t('home:showcase-title1')}</h3>
          <p className="small-font">
            {t('home:showcase-desc1')}
            <strong className="highlight">
              {t('home:showcase-desc1-2')}
            </strong>{' '}
            {t('home:showcase-desc1-3')}
          </p>
          <Link href="/methods/photogrammetry">
            <a className="btn-line btn-texture-example">
              {t('home:showcase-btn1')}
            </a>
          </Link>
        </div>
      </div>
      <div className="texture-example-2 flex-50">
        <div>
          <h3 className="big-font">{t('home:showcase-title2')}</h3>
          <p className="small-font">
            {t('home:showcase-desc2')}
            <strong className="highlight">
              {t('home:showcase-desc2-2')}
            </strong>{' '}
          </p>
          <Link href="/methods/ai-to-material">
            <a className="btn-line btn-texture-example">
              {t('home:showcase-btn2')}
            </a>
          </Link>
        </div>
        <div>
          <SrcImage
            webp="/texture-example-2.webp"
            src="/texture-example-2.jpg"
            height="200"
            width="200"
            alt="example of a render"
          />
        </div>
      </div>
      {/* <div className="texture-example-3 flex-50">
        <div>
          <img
            loading="lazy"
            src="/texture-example-3.jpg"
            height="200"
            width="200"
            alt="example of a render"
          />
        </div>
        <div>
          <h3 className="big-font">{t('home:showcase-title3')}</h3>
          <p className="small-font">
            <strong className="highlight">{t('home:showcase-desc3')}</strong>{' '}
            {t('home:showcase-desc3-2')}
          </p>
          <Link href="/methods/procedural">
            <a className="btn-line btn-texture-example">
              {t('home:showcase-btn3')}
            </a>
          </Link>
        </div>
      </div> */}
    </main>
  );
}

export default Showcase;
