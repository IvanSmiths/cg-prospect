import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const Methods = ({ methods }) => {
  let { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('methods-model:head-title')}</title>
        <meta name="description" content={t('methods-model:head-desc')} />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CGProspect" key="twhandle" />
        <meta property="og:title" content={t('methods-model:head-og-title')} />
        <meta
          property="og:description"
          content={t('methods-model:head-og-desc')}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://postgres.pages.dev/categories/`}
        />
        <meta property="og:image" content={methods[0].mainImage} />
      </Head>
      <main className="categories-page">
        <h1 className="big-font">{t('methods-model:title')}</h1>
        <p className="small-font">
          {t('methods-model:desc')}
          <Link href="/methods">
            <a className="highlight underline">{t('methods-model:desc-2')}</a>
          </Link>
        </p>
        <section className="container-methods">
          {methods.map((method) => (
            <Link href={`/methods-3d-model/${method.slug}`} key={method.id}>
              <a>
                <img
                  height="250"
                  width="450"
                  src={method.mainImage}
                  alt={`An image of the method ${method.title}`}
                />
                <h2 className="small-font highlight">{method.title}</h2>
              </a>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const methods = await prisma.modelMethod.findMany({
    include: { model3d: true },
  });
  return {
    props: {
      methods,
    },
  };
}

export default Methods;
