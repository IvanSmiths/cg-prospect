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
            href="/contact"
            onClick={() => setClick(false)}
          >
            {t('common:nav-contact')}
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-link"
            href="/terms"
            onClick={() => setClick(false)}
          >
            {t('common:nav-terms')}
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-link"
            href="/feedback"
            onClick={() => setClick(false)}
          >
            {t('common:nav-feedback')}
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
