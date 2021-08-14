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
            href="/methods"
            onClick={() => setClick(false)}
          >
            <a>
              <img
                src="/methods-nav.svg"
                height="35"
                width="35"
                alt="icon methods textures"
              />
              {t('common:nav-methods-tex')}
            </a>
          </Link>
        </li>
        {/* <li className="nav-icon-cnt">
          <Link
            className="dropdown-link"
            href="/methods-3d-model"
            onClick={() => setClick(false)}
          >
            <a>
              <img
                src="/method-nav-2.svg"
                height="35"
                width="35"
                alt="icon methods 3d model"
              />
              {t('common:nav-methods-mod')}
            </a>
          </Link>
        </li> */}
      </ul>
    </>
  );
}

export default Dropdown;
