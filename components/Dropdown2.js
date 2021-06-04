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
        <li>
          <Link
            className="dropdown-link"
            href="/sponsor-texture"
            onClick={() => setClick(false)}
          >
            {t('common:nav-support-assets')}
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-link"
            href="/sponsor-home"
            onClick={() => setClick(false)}
          >
            {t('common:nav-support-page')}
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-link"
            href="/merchandise"
            onClick={() => setClick(false)}
          >
            {t('common:nav-support-merch')}
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
