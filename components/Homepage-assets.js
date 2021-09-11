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
                src="https://res.cloudinary.com/deino2cjx/image/upload/v1631351842/nextjs_media/untitled_horsar_h27qek.jpg"
                alt="free pebbles texture"
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
          <Link href="/free-3d-models/lava-stone-rock-01">
            <a>
              <img
                src="https://res.cloudinary.com/deino2cjx/image/upload/v1631351842/nextjs_media/untitled_vosejr_fimvan.jpg"
                alt="free rock 3d model"
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
                src="https://res.cloudinary.com/deino2cjx/image/upload/v1631351842/nextjs_media/untitled_iwflsk_dmkg1g.jpg"
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
