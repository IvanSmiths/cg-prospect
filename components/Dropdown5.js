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
            src="contact-icon.svg"
            height="30"
            width="30"
            alt="icon contact"
          />
          <Link
            className="dropdown-link"
            href="/contact"
            onClick={() => setClick(false)}
          >
            {t('common:nav-contact')}
          </Link>
        </li>
        <li className="nav-icon-cnt">
          <img src="terms-icon.svg" height="30" width="30" alt="icon terms" />
          <Link
            className="dropdown-link"
            href="/terms"
            onClick={() => setClick(false)}
          >
            {t('common:nav-terms')}
          </Link>
        </li>
        <li className="nav-icon-cnt">
          <img
            src="feedback-icon.svg"
            height="30"
            width="30"
            alt="icon feedback"
          />
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
