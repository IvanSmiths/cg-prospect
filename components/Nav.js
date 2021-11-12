import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import Dropdown3 from './Dropdown3';
import Dropdown4 from './Dropdown4';
import Dropdown5 from './Dropdown5';
import useTranslation from 'next-translate/useTranslation';
import LanguageChange from './LanguageChange';

function Navbar() {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1100) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1100) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  let { t } = useTranslation();
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 1100) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1100) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 1100) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 1100) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  const onMouseEnter3 = () => {
    if (window.innerWidth < 1100) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 1100) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };
  const onMouseEnter4 = () => {
    if (window.innerWidth < 1100) {
      setDropdown4(false);
    } else {
      setDropdown4(true);
    }
  };

  const onMouseLeave4 = () => {
    if (window.innerWidth < 1100) {
      setDropdown4(false);
    } else {
      setDropdown4(false);
    }
  };
  const onMouseEnter5 = () => {
    if (window.innerWidth < 1100) {
      setDropdown5(false);
    } else {
      setDropdown5(true);
    }
  };

  const onMouseLeave5 = () => {
    if (window.innerWidth < 1100) {
      setDropdown5(false);
    } else {
      setDropdown5(false);
    }
  };

  return (
    <div>
      {isDesktop ? (
        <nav className="navbar">
          <div className="navbar-logo-cnt">
            <Link href="/">
              <a>
                <img
                  src="/logo-navbar.svg"
                  height="30px"
                  width="160px"
                  alt="main logo"
                />
              </a>
            </Link>
          </div>
          <LanguageChange />
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
                  <a>{t('common:nav-assets')}</a>
                </Link>
                {dropdown && <Dropdown />}
              </li>
              <li
                onMouseEnter={onMouseEnter3}
                onMouseLeave={onMouseLeave3}
                className="nav-item small-font"
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
                  href="/categories"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <a>{t('common:nav-categories')}</a>
                </Link>
                {dropdown3 && <Dropdown3 />}
              </li>
              <li
                onMouseEnter={onMouseEnter4}
                onMouseLeave={onMouseLeave4}
                className="nav-item small-font"
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
                  href="/methods"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <a>{t('common:nav-methods')}</a>
                </Link>
                {dropdown4 && <Dropdown4 />}
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
                  <a>{t('common:nav-support')}</a>
                </Link>
                {dropdown2 && <Dropdown2 />}
              </li>
              <li
                onMouseEnter={onMouseEnter5}
                onMouseLeave={onMouseLeave5}
                className="nav-item small-font"
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
                  href="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <a>{t('common:nav-info')}</a>
                </Link>
                {dropdown5 && <Dropdown5 />}
              </li>
              <li onClick={closeMobileMenu} className="nav-item small-font">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://cg-prospect.creator-spring.com"
                  className="btn-line btn-merch"
                >
                  Merchandise
                </a>
              </li>
              <li onClick={closeMobileMenu} className="nav-item small-font">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.patreon.com/cgprospect"
                  className="nav-links patreon-clr btn btn2"
                >
                  Cahoot
                </a>
              </li>
            </ul>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <span className="test" onClick={closeMobileMenu}>
              X
            </span>
          </div>
        </nav>
      ) : (
        <nav className="navbar">
          <div className="navbar-logo-cnt">
            <Link href="/">
              <a>
                <img
                  src="/logo-icon-white.svg"
                  height="30px"
                  width="160px"
                  alt="main logo"
                />
              </a>
            </Link>
          </div>
          <LanguageChange />
          <div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li
                className="nav-item small-font"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={closeMobileMenu}
              >
                <Link href="/free-textures" className="nav-links">
                  <a>{t('common:nav-assets-textures')}</a>
                </Link>
              </li>
              <li
                className="nav-item small-font"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={closeMobileMenu}
              >
                <Link href="/free-3d-models" className="nav-links">
                  <a>{t('common:nav-assets-3d')}</a>
                </Link>
              </li>
              <li
                onMouseEnter={onMouseEnter3}
                onMouseLeave={onMouseLeave3}
                className="nav-item small-font"
                onClick={closeMobileMenu}
              >
                <Link href="/categories" className="nav-links">
                  <a>{t('common:nav-categories')}</a>
                </Link>
              </li>
              <li
                onMouseEnter={onMouseEnter4}
                onMouseLeave={onMouseLeave4}
                className="nav-item small-font"
                onClick={closeMobileMenu}
              >
                <Link href="/methods" className="nav-links">
                  <a>{t('common:nav-methods')}</a>
                </Link>
              </li>
              <li
                className="nav-item small-font"
                onMouseEnter={onMouseEnter2}
                onMouseLeave={onMouseLeave2}
                onClick={closeMobileMenu}
              >
                <Link href="/sponsor-home" className="nav-links">
                  <a>{t('common:nav-support')}</a>
                </Link>
              </li>
              <li
                onMouseEnter={onMouseEnter5}
                onMouseLeave={onMouseLeave5}
                className="nav-item small-font"
                onClick={closeMobileMenu}
              >
                <Link href="/contact" className="nav-links">
                  <a>{t('common:nav-info')}</a>
                </Link>
              </li>
              <li onClick={closeMobileMenu} className="nav-item small-font">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://cg-prospect.creator-spring.com"
                  className="btn-line btn-merch"
                >
                  Merchandise
                </a>
              </li>
              <li onClick={closeMobileMenu} className="nav-item small-font">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.patreon.com/cgprospect"
                  className="nav-links patreon-clr btn btn2"
                >
                  Cahoot
                </a>
              </li>
            </ul>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <svg
              className="test"
              onClick={closeMobileMenu}
              viewBox="0 0 10 80"
              width="40"
              height="20"
            >
              <rect fill="white" width="100" height="10"></rect>
              <rect fill="white" y="30" width="100" height="10"></rect>
              <rect fill="white" y="60" width="100" height="10"></rect>
            </svg>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
