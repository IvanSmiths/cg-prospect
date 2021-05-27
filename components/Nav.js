import React, { useState } from 'react';
import Link from 'next/link';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

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
    <>
      <nav className="navbar">
        <Link href="/">
          <a>
            <img src="/logo.svg" height="30px" width="auto" alt="main logo" />
          </a>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className="test" onClick={closeMobileMenu}>
            X
          </i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <img
              loading="lazy"
              src="/down-arrow-white.svg"
              height="13px"
              width="auto"
              alt="arrow down"
            />
            <Link
              href="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <a>Assets</a>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              href="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <a>Categories</a>
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <img
              loading="lazy"
              src="/down-arrow-white.svg"
              height="13px"
              width="auto"
              alt="arrow down"
            />
            <Link
              href="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <a>Support</a>
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
          <li onClick={closeMobileMenu} className="nav-item">
            <a href="https://www.patreon.com" className="nav-links">
              Cahoot
            </a>
          </li>
          <li className="nav-item">
            <Link
              href="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
