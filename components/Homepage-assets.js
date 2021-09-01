import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const HomepageAssets = () => {
  let { t } = useTranslation();
  return (
    <div className="hp-assets">
      <h2 className="big-font"> {t('home:assets')}</h2>
      <div className="hp-assets-cnt">
        <div className="assets-card">
          <Link href="/free-textures/pebbles-big">
            <a>
              <img
                src="https://res.cloudinary.com/deino2cjx/image/upload/v1630072775/nextjs_media/untitled_horsar.jpg"
                alt="free rock texture"
                height="400px"
                width="400px"
              />
            </a>
          </Link>
          <Link href="/free-textures/pebbles-big">
            <a className="btn">{t('home:assets-2')}</a>
          </Link>
        </div>
        <div className="assets-card">
          <Link href="/free-textures/terrain-02">
            <a>
              <img
                src="https://res.cloudinary.com/deino2cjx/image/upload/v1629531539/nextjs_media/untitled_vvpfmw.jpg"
                alt="free pebble texture"
                height="400px"
                width="400px"
              />
            </a>
          </Link>
          <Link href="/free-textures/terrain-02">
            <a className="btn">{t('home:assets-2')}</a>
          </Link>
        </div>
        <div className="assets-card">
          <Link href="/free-textures/terrain-03">
            <a>
              <img
                src="https://res.cloudinary.com/deino2cjx/image/upload/v1630477116/nextjs_media/untitled_iwflsk.jpg"
                alt="free rock texture"
                height="400px"
                width="400px"
              />
            </a>
          </Link>
          <Link href="/free-textures/terrain-03">
            <a className="btn">{t('home:assets-2')}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomepageAssets;
