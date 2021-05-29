import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

function Header() {
  let { t } = useTranslation();
  return (
    <>
      <header className="container-mainpage flex-50">
        <div>
          <h1 className="large-font">
            {t('home:title1')}
            <br />
            {t('home:title2')}
          </h1>
          <p className="small-font">
            {t('home:titledesc')}
            <a href="https://www.patreon.com/" target="_blank" rel="noopener">
              <strong className="highlight-patreon">
                {t('home:titledesc2')}
              </strong>
            </a>
          </p>
          <Link href="/free-textures">
            <a className="btn main-btn">{t('home:titlebtn')}</a>
          </Link>
        </div>
        <div>
          <img
            loading="lazy"
            className="main-image"
            src="/main-image.png"
            height="512"
            width="512"
            alt="An image of a texture"
          />
        </div>
      </header>
      <div className="container-ico">
        <a href="https://www.youtube.com/" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="/ico_youtube.svg"
            width="22"
            height="22"
            alt="Icon of YouTube"
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="/ico_instagram.svg"
            width="22"
            height="22"
            alt="Icon of Instagram"
          />
        </a>
        <a href="https://www.artstation.com/" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="/ico_artstation.svg"
            width="22"
            height="22"
            alt="Icon of ArtStation"
          />
        </a>
        <a href="https://www.pinterest.com/" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="/ico_pinterest.svg"
            width="22"
            height="22"
            alt="Icon of Pinterest"
          />
        </a>
        <a href="https://www.patreon.com/" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="/ico_patreon.svg"
            width="22"
            height="22"
            alt="Icon of Patreon"
          />
        </a>
      </div>
    </>
  );
}

export default Header;
