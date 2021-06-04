import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const Advertising = () => {
  let { t } = useTranslation();
  return (
    <section className="advertising">
      <hr className="line" />
      <h2 className=" big-font">{t('common:ad-title')}</h2>
      <p className="small-font">{t('common:ad-desc')}</p>
      <Link href="/sponsor-home">
        <a className="btn">{t('common:ad-btn')}</a>
      </Link>
      <hr className="line" />
    </section>
  );
};

export default Advertising;
