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
            src="textures-icon.svg"
            height="30"
            width="30"
            alt="icon texture"
          />
          <Link
            className="dropdown-link"
            href="/free-textures"
            onClick={() => setClick(false)}
          >
            {t('common:nav-assets-textures')}
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-link"
            href="/free-3d-models"
            onClick={() => setClick(false)}
          >
            {t('common:nav-assets-3d')}
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
