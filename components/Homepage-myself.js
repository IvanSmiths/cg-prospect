import useTranslation from 'next-translate/useTranslation';

function Myself() {
  let { t } = useTranslation();
  return (
    <section className="myself flex-50">
      <div>
        <img
          className="image-myself"
          loading="lazy"
          src="/myself.jpg"
          height="350"
          width="380"
          alt="An image of myself"
        />
      </div>
      <div className="myself-text">
        <h2 className="big-font">{t('home:myself-title')}</h2>
        <p className="small-font">{t('home:myself-desc')}</p>
      </div>
    </section>
  );
}

export default Myself;
