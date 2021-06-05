import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LanguageChange = () => {
  const [isOpened, setIsOpened] = useState(false);
  let router = useRouter();
  return (
    <div className="lang-cnt-2">
      <img
        onMouseEnter={() => setIsOpened(!isOpened)}
        src="/translate.svg"
        height="39px"
        width="39px"
        alt="change languagge"
      />
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
