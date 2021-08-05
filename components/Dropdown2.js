import React, { useState } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

function Dropdown() {
  let { t } = useTranslation();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        <li className="nav-icon-cnt">
          <Link
            className="dropdown-link"
            href="/sponsor-texture"
            onClick={() => setClick(false)}
          >
            <a>
              <img
                src="/sponsor-assets-icon.svg"
                height="35"
                width="35"
                alt="icon sponsor assets"
              />
              {t('common:nav-support-assets')}
            </a>
          </Link>
        </li>
        <li className="nav-icon-cnt">
          <Link
            className="dropdown-link"
            href="/sponsor-home"
            onClick={() => setClick(false)}
          >
            <a>
              <img
                src="/sponsor-logo-icon.svg"
                height="35"
                width="35"
                alt="icon sponsor logo"
              />
              {t('common:nav-support-page')}
            </a>
          </Link>
        </li>
        <li className="nav-icon-cnt">
          <a
            target="_blank"
            rel="noopener"
            className="dropdown-link"
            href="https://cg-prospect.creator-spring.com/"
            onClick={() => setClick(false)}
          >
            <img
              src="/merchandise-3d.svg"
              height="35"
              width="35"
              alt="icon merchandise"
            />
            {t('common:nav-merch')}
          </a>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
