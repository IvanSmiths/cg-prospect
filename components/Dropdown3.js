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
            src="categories-nav-icon.svg"
            height="30"
            width="30"
            alt="icon category textures"
          />
          <Link
            className="dropdown-link"
            href="/categories"
            onClick={() => setClick(false)}
          >
            {t('common:nav-categories-tex')}
          </Link>
        </li>
        <li className="nav-icon-cnt">
          <img
            src="categories-nav-icon.svg"
            height="30"
            width="30"
            alt="icon category 3d model"
          />
          <Link
            className="dropdown-link"
            href="/categories-3d-model"
            onClick={() => setClick(false)}
          >
            {t('common:nav-categories-mod')}
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
