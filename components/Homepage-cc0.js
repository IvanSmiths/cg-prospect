import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

function CC0() {
  let { t } = useTranslation();
  return (
    <section className="cnt-cc0 margin-section">
      <div className="cc0-texture">
        <h3 className="big-font">{t('home:cc0-title')}</h3>
        <p className="small-font">
          {t('home:cc0-desc')}
          {t('home:cc0-desc2')}
          <Link href="/brand">
            <a>
              <b className="highlight underline">{t('home:cc0-desc3')}</b>
            </a>
          </Link>
        </p>
      </div>
    </section>
  );
}

export default CC0;
