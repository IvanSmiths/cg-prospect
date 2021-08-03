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
          {method.title}, {t('single-method-texture:head-title')}
        </title>
        <meta
          name="description"
          content={`${method.title} ${t('single-method-texture:head-desc')}`}
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CgProspect" key="twhandle" />
        <meta
          property="og:title"
          content={`CGProspect | ${method.title}, ${t(
            'single-method-texture:head-og-desc'
          )}`}
        />
        <meta
          property="og:description"
          content={`${method.title} ${t('single-method-texture:head-desc')}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://cgprospect.com/methods/${method.slug}`}
        />
        <meta property="og:image" content={method.mainImage} />
      </Head>
      <main className="category-page-single">
        <h1 className="big-font">
          {t('single-method-texture:title')} {method.title}{' '}
          {t('single-method-texture:title-2')}
        </h1>
        <p className="small-font">
          {t('single-method-texture:desc')} {method.title}{' '}
          {t('single-method-texture:desc-2')} {''}
          <Link href="/methods-3d-model">
            <a className="underline highlight">
              {t('single-method-texture:desc-3')}
            </a>
          </Link>
        </p>

        <section className="container-single-method" key={method.id}>
          {method.textures.map((texture) => (
            <Link key={texture.id} href={`/free-textures/${texture.slug}`}>
              <a>
                <img
                  src={texture.mainImage}
                  height="350"
                  width="350"
                  alt="A link preview of a texture"
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
  const method = await prisma.method.findFirst({
    include: { textures: true },
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
  const methods = await prisma.method.findMany();
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
