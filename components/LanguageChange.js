import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LanguageChange = () => {
  const [isOpened, setIsOpened] = useState(false);
  let router = useRouter();
  return (
    <div onClick={() => setIsOpened(!isOpened)} className="lang-cnt-2">
      <div className="arrow-cnt">
        <img
          className="arrow-navbar2"
          loading="lazy"
          src="/down-arrow-white.svg"
          height="13px"
          width="13px"
          alt="arrow down"
        />
        <img
          onMouseEnter={() => setIsOpened(!isOpened)}
          src="/translate.svg"
          height="36px"
          width="36px"
          alt="change language"
        />
      </div>
      {isOpened && (
        <div className="dropdown-menu2" onMouseLeave={() => setIsOpened(false)}>
          <ol className="lang-cnt">
            {router.locales.map((locale) => (
              <Link key={locale} locale={locale} href={router.asPath}>
                <a>
                  <li className="language small-font" key={locale}>
                    {locale}
                  </li>
                </a>
              </Link>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default LanguageChange;
