import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import Subscribe from './Subscribe';

const Footer = () => {
  let { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-first-cnt">
        <div className="footer-links">
          <ul>
            <li className="small-font highlight-2 footer-label">
              {t('common:nav-assets')}
            </li>
            <li className="tiny-font">
              <Link locale="en" href="/free-textures">
                <a>Textures</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="small-font highlight-2 footer-label">
              {t('common:nav-categories')}
            </li>
            <li className="tiny-font">
              <Link locale="en" href="/categories">
                <a>All categories</a>
              </Link>
            </li>
            <li className="tiny-font">
              <Link locale="en" href="/categories/wood">
                <a>Wood</a>
              </Link>
            </li>
            <li className="tiny-font">
              <Link locale="en" href="/categories/rock">
                <a>Rock</a>
              </Link>
            </li>
            <li className="tiny-font">
              <Link locale="en" href="/categories/metal">
                <a>Metal</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="small-font highlight-2 footer-label">
              {t('common:nav-methods')}
            </li>
            <li className="tiny-font">
              <Link locale="en" href="/methods">
                <a>All methods</a>
              </Link>
            </li>
            <li className="tiny-font">
              <Link locale="en" href="/methods/photogrammetry">
                <a>Photogrammetry</a>
              </Link>
            </li>
            <li className="tiny-font">
              <Link locale="en" href="/methods/ai-to-material">
                <a>Ai to Material</a>
              </Link>
            </li>
            <li className="tiny-font">
              <Link locale="en" href="/methods/procedural">
                <a>Procedural</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="small-font highlight-2 footer-label">
              {t('common:nav-support')}
            </li>
            <li className="tiny-font">
              <a href="https://www.patreon.com/" target="_blank" rel="noopener">
                Cahoot
              </a>
            </li>
            <li>
              <Link href="/sponsor-home">
                <a className="tiny-font">{t('common:nav-support-page')}</a>
              </Link>
            </li>
            <li>
              <Link href="/sponsor-texture">
                <a className="tiny-font">{t('common:nav-support-assets')}</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="small-font highlight-2 footer-label">Info</li>
            <li>
              <Link href="/contact">
                <a className="tiny-font">{t('common:nav-contact')}</a>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <a className="tiny-font">Terms & Privacy</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="form-news-cnt">
          <Subscribe />
        </div>
      </div>
      <div className="footer-ico">
        <a href="https://www.youtube.com/" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="/logo-youtube.svg"
            width="26"
            height="26"
            alt="An icon of YouTube"
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="/logo-instagram.svg"
            width="26"
            height="26"
            alt="An icon of Instagram"
          />
        </a>
        <a href="https://www.artstation.com/" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="/logo-artstation.svg"
            width="26"
            height="26"
            alt="An icon of ArtStation"
          />
        </a>
        <a href="https://www.pinterest.com/" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="/logo-pinterest.svg"
            width="26"
            height="26"
            alt="An icon of Pinterest"
          />
        </a>
        <a href="https://www.patreon.com/" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="/ico_patreon.svg"
            width="26"
            height="26"
            alt="An icon of Patreon"
          />
        </a>
      </div>
      <p className="tiny-font">Copyright &copy; 2021 CG Prospect</p>
    </footer>
  );
};

export default Footer;
