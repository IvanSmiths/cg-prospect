import React, { useState } from 'react';
import Link from 'next/link';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import { useRouter } from 'next/router';

function Navbar() {
  let router = useRouter();
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-cnt">
        <Link href="/">
          <a>
            <img src="/logo.svg" height="30px" width="160px" alt="main logo" />
          </a>
        </Link>
      </div>
      <div className="lang-cnt-2">
        <button className="btn-lang" onClick={() => setIsOpened(!isOpened)}>
          Languages
        </button>
        {isOpened && (
          <div onMouseLeave={() => setIsOpened(false)}>
            <ol className="lang-cnt">
              {router.locales.map((locale) => (
                <Link key={locale} locale={locale} href={router.asPath}>
                  <a>
                    <li className="language small-font" key={locale}>
                      {locale}
                    </li>
                  </a>
                </Link>
              ))}
            </ol>
          </div>
        )}
      </div>
      <div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            className="nav-item small-font"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <img
              className="arrow-navbar"
              loading="lazy"
              src="/down-arrow-white.svg"
              height="13px"
              width="13px"
              alt="arrow down"
            />
            <Link
              href="/free-textures"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <a>Assets</a>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item small-font">
            <Link
              href="/categories"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <a>Categories</a>
            </Link>
          </li>
          <li className="nav-item small-font">
            <Link
              href="/methods"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <a>Methods</a>
            </Link>
          </li>
          <li
            className="nav-item small-font"
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <img
              className="arrow-navbar"
              loading="lazy"
              src="/down-arrow-white.svg"
              height="13px"
              width="13px"
              alt="arrow down"
            />
            <Link
              href="/sponsor-home"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <a>Support</a>
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
          <li onClick={closeMobileMenu} className="nav-item small-font">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.patreon.com"
              className="nav-links"
            >
              Cahoot
            </a>
          </li>
          <li className="nav-item small-font">
            <Link
              href="/contact"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <span className="test" onClick={closeMobileMenu}>
          X
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
