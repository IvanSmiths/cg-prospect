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
            href="/categories"
            onClick={() => setClick(false)}
          >
            <a>
              <img
                src="/categories-nav-icon.svg"
                height="35"
                width="35"
                alt="icon category textures"
              />
              {t('common:nav-categories-tex')}
            </a>
          </Link>
        </li>
        <li className="nav-icon-cnt">
          <Link
            className="dropdown-link"
            href="/categories-3d-model"
            onClick={() => setClick(false)}
          >
            <a>
              <img
                src="/category-nav-2.svg"
                height="35"
                width="35"
                alt="icon category 3d model"
              />
              {t('common:nav-categories-mod')}
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
