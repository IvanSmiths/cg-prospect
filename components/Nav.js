import Link from 'next/link';
import React, { useState } from 'react';

function Nav() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <nav className="nav">
      <div className="logo-cnt">
        <Link href="/">
          <a>
            <img
              className="logo"
              src="/logo-main.png"
              height="26"
              width="105"
              alt="the main logo of cg prospect"
            />
          </a>
        </Link>
      </div>
      <div className="cnt-link">
        <ul className={isToggled ? 'toggle' : ''}>
          <li>
            <Link href="/free-textures">
              <a
                onClick={() => setIsToggled(!isToggled)}
                className="small-font"
              >
                Textures
              </a>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              <a
                onClick={() => setIsToggled(!isToggled)}
                className="small-font"
              >
                Categories
              </a>
            </Link>
          </li>
          <li>
            <Link href="/methods">
              <a
                onClick={() => setIsToggled(!isToggled)}
                className="small-font"
              >
                Methods
              </a>
            </Link>
          </li>
          <li className="small-font">
            <a
              onClick={() => setIsToggled(!isToggled)}
              href="https://www.patreon.com/"
              target="_blank"
              rel="noopener"
            >
              Cahoot
            </a>
          </li>
          <li>
            <Link href="/contact">
              <a
                onClick={() => setIsToggled(!isToggled)}
                className="small-font"
              >
                Contact
              </a>
            </Link>
          </li>
          <li onClick={() => setIsToggled(!isToggled)} className="close">
            X
          </li>
        </ul>
        <div
          onClick={() => setIsToggled(!isToggled)}
          className="menu small-text"
        >
          |||
        </div>
      </div>
    </nav>
  );
}

export default Nav;
