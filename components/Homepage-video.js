import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

function Video() {
  let { t } = useTranslation();
  // const videoRef = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     videoRef.current.play();
  //   }, 1);
  // }, []);
  return (
    <section className="cnt-video">
      {/* <video ref={videoRef} className="video" loop muted>
        <source src="/pbr-texture.mp4" type="video/mp4" />
      </video> */}
      <div className="text-video">
        <h2 className="big-font">
          {t('home:video-title')}{' '}
          <b className="highlight-main">{t('home:video-title2')}</b>
        </h2>
        <p className="btn-font highlight">{t('home:video-desc')}</p>
        <Link href="/free-textures">
          <a className="btn-line">{t('home:video-btn')}</a>
        </Link>
      </div>
    </section>
  );
}

export default Video;
