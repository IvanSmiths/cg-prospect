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
            href="/contact"
            onClick={() => setClick(false)}
          >
            <a>
              <img
                src="contact-icon.svg"
                height="35"
                width="35"
                alt="icon contact"
              />
              {t('common:nav-contact')}
            </a>
          </Link>
        </li>
        <li className="nav-icon-cnt">
          <Link
            className="dropdown-link"
            href="/terms"
            onClick={() => setClick(false)}
          >
            <a>
              <img
                src="terms-icon.svg"
                height="35"
                width="35"
                alt="icon terms"
              />
              {t('common:nav-terms')}
            </a>
          </Link>
        </li>
        <li className="nav-icon-cnt">
          <Link
            className="dropdown-link"
            href="/feedback"
            onClick={() => setClick(false)}
          >
            <a>
              <img
                src="feedback-icon.svg"
                height="35"
                width="35"
                alt="icon feedback"
              />
              {t('common:nav-feedback')}
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
