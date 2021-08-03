import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const SingleMethod = ({ method }) => {
  let { t } = useTranslation();
  return (
    <>
      <Head>
        <title>
          {method.title}, {t('single-method-model:head-title')}.
        </title>
        <meta
          name="description"
          content={`${method.title} ${t('single-method-model:head-desc')}`}
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CGProspect" key="twhandle" />
        <meta
          property="og:title"
          content={`CGProspect | ${method.title}, ${t(
            'single-method-model:head-og-desc'
          )}`}
        />
        <meta
          property="og:description"
          content={`${method.title} ${t('single-method-model:head-desc')}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://postgres.pages.dev/methods/${method.slug}`}
        />
        <meta property="og:image" content={method.mainImage} />
      </Head>
      <main className="category-page-single">
        <h1 className="big-font">
          {t('single-method-model:title')} {method.title}{' '}
          {t('single-method-model:title-2')}
        </h1>
        <p className="small-font">
          {t('single-method-model:desc')} {method.title}{' '}
          {t('single-method-model:desc-2')} {''}
          <Link href="/methods">
            <a className="underline highlight">
              {t('single-method-model:desc-3')}
            </a>
          </Link>
        </p>
        <section className="container-single-method" key={method.id}>
          {method.model3d.map((model) => (
            <Link key={model.id} href={`/free-3d-models/${model.slug}`}>
              <a>
                <img
                  src={model.mainImage}
                  height="350"
                  width="350"
                  alt={`3d model of a ${model.title}`}
                />
              </a>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};

export async function getStaticProps({ params }) {
  const method = await prisma.modelMethod.findFirst({
    include: { model3d: true },
    where: {
      slug: String(params.slug),
    },
  });

  return {
    props: {
      method,
    },
  };
}

export async function getStaticPaths({ locales }) {
  const methods = await prisma.modelMethod.findMany();
  const paths = [];

  locales.forEach((locale, i) => {
    methods.forEach((method, i) => {
      paths.push({ params: { slug: method.slug }, locale });
    });
  });
  return {
    paths,
    fallback: false,
  };
}

export default SingleMethod;
