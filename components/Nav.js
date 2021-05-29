import React, { useState } from 'react';
import Link from 'next/link';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import Dropdown3 from './Dropdown3';
import Dropdown4 from './Dropdown4';
import useTranslation from 'next-translate/useTranslation';

function Navbar() {
  let { t } = useTranslation();
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
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

  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };
  const onMouseEnter4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(true);
    }
  };

  const onMouseLeave4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(false);
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
              locale="en"
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
              locale="en"
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
              locale="en"
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
              locale="en"
              href="/sponsor-home"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <a>{t('common:nav-support')}</a>
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
              locale="en"
              href="/contact"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <a>{t('common:nav-contact')}</a>
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
