import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li className="small-font highlight-2 footer-label">Assets</li>
          <li className="tiny-font">
            <Link href="/textures">
              <a>Textures</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li className="small-font highlight-2 footer-label">Categories</li>
          <li className="tiny-font">
            <Link href="/categories">
              <a>All categories</a>
            </Link>
          </li>
          <li className="tiny-font">
            <Link href="/categories/wood">
              <a>Wood</a>
            </Link>
          </li>
          <li className="tiny-font">
            <Link href="/categories/rock">
              <a>Rock</a>
            </Link>
          </li>
          <li className="tiny-font">
            <Link href="/categories/metal">
              <a>Metal</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li className="small-font highlight-2 footer-label">Methods</li>
          <li className="tiny-font">
            <Link href="/methods">
              <a>All methods</a>
            </Link>
          </li>
          <li className="tiny-font">
            <Link href="/methods/photogrammetry">
              <a>Photogrammetry</a>
            </Link>
          </li>
          <li className="tiny-font">
            <Link href="/methods/ai-to-material">
              <a>Ai to Material</a>
            </Link>
          </li>
          <li className="tiny-font">
            <Link href="/methods/procedural">
              <a>Procedural</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li className="small-font highlight-2 footer-label">Support</li>
          <li className="tiny-font">
            <a href="https://www.patreon.com/" target="_blank" rel="noopener">
              Cahoot
            </a>
          </li>
          <li className="tiny-font">
            <a href="https://www.patreon.com/" target="_blank" rel="noopener">
              Donation
            </a>
          </li>
          <li>
            <Link href="/sponsor-home">
              <a className="tiny-font">Become a sponsor</a>
            </Link>
          </li>
          <li>
            <Link href="/sponsor-texture">
              <a className="tiny-font">Sponsor on textures</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li className="small-font highlight-2 footer-label">Info</li>
          <li>
            <Link href="/contact">
              <a className="tiny-font">About/Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/terms">
              <a className="tiny-font">Terms & Privacy</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-ico">
        <a href="https://www.youtube.com/" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="/ico_youtube.svg"
            width="26"
            height="26"
            alt="An icon of YouTube"
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="/ico_instagram.svg"
            width="26"
            height="26"
            alt="An icon of Instagram"
          />
        </a>
        <a href="https://www.artstation.com/" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="/ico_artstation.svg"
            width="26"
            height="26"
            alt="An icon of ArtStation"
          />
        </a>
        <a href="https://www.pinterest.com/" target="_blank" rel="noopener">
          <img
            loading="lazy"
            src="/ico_pinterest.svg"
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
      <p className="tiny-font">Copyright &copy; 2021 Egida</p>
    </footer>
  );
};

export default Footer;
