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
            <strong className="highlight-main">{t('home:title2')}</strong>
          </h1>
          <p className="small-font">
            {t('home:titledesc')}
            <a
              href="https://www.patreon.com/cgprospect"
              target="_blank"
              rel="noopener"
            >
              <b className="highlight-patreon underline">
                {t('home:titledesc2')}
              </b>
            </a>
          </p>
          <div className="header-bnt-cnt">
            <Link href="/free-3d-models">
              <a className="btn-line main-btn">{t('home:titlebtn2')}</a>
            </Link>
            <Link href="/free-textures">
              <a className="btn main-btn">{t('home:titlebtn')}</a>
            </Link>
          </div>
        </div>
        <div>
          <img
            loading="lazy"
            className="main-image"
            src="/main-texture.jpg"
            height="600"
            width="600"
            alt="An image of a texture"
          />
        </div>
      </header>
      <div className="container-ico">
        <a
          href="https://www.instagram.com/cgprospect/"
          target="_blank"
          rel="noopener"
        >
          <img
            loading="lazy"
            src="/icon-instagram.svg"
            width="24"
            height="24"
            alt="Link to the Instagram page"
          />
        </a>
        <a
          href="https://www.facebook.com/CG-Prospect-106271838337510"
          target="_blank"
          rel="noopener"
        >
          <img
            loading="lazy"
            src="/icon-facebook.svg"
            width="24"
            height="24"
            alt="Link to the Facebook page"
          />
        </a>
        <a
          href="https://www.artstation.com/cgprospect"
          target="_blank"
          rel="noopener"
        >
          <img
            loading="lazy"
            src="/icon-artstation.svg"
            width="24"
            height="24"
            alt="Link to the ArtStation page"
          />
        </a>
        <a
          href="https://www.pinterest.com/cgprospect"
          target="_blank"
          rel="noopener"
        >
          <img
            loading="lazy"
            src="/icon-pinterest.svg"
            width="24"
            height="24"
            alt="Link to the Pinterest page"
          />
        </a>
        <a
          href="https://www.patreon.com/cgprospect"
          target="_blank"
          rel="noopener"
        >
          <img
            loading="lazy"
            src="/icon-patreon.svg"
            width="24"
            height="24"
            alt="Link to the Patreon page"
          />
        </a>
        <a
          href="https://cg-prospect.creator-spring.com"
          target="_blank"
          rel="noopener"
        >
          <img
            loading="lazy"
            src="/icon-teespring.svg"
            width="24"
            height="24"
            alt="Link to the CG Prospect merchandise page"
          />
        </a>
      </div>
    </>
  );
}

export default Header;
