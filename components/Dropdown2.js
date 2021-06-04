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
          <img
            src="/sponsor-assets-icon.svg"
            height="30"
            width="30"
            alt="icon sponsor assets"
          />
          <Link
            className="dropdown-link"
            href="/sponsor-texture"
            onClick={() => setClick(false)}
          >
            {t('common:nav-support-assets')}
          </Link>
        </li>
        <li className="nav-icon-cnt">
          <img
            src="/sponsor-logo-icon.svg"
            height="30"
            width="30"
            alt="icon sponsor logo"
          />
          <Link
            className="dropdown-link"
            href="/sponsor-home"
            onClick={() => setClick(false)}
          >
            {t('common:nav-support-page')}
          </Link>
        </li>
        <li className="nav-icon-cnt">
          <img
            src="/merchandise-3d.svg"
            height="30"
            width="30"
            alt="icon merchandise"
          />
          <Link
            className="dropdown-link"
            href="/merchandise"
            onClick={() => setClick(false)}
          >
            {t('common:nav-merch')}
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
