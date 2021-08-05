import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

export default function Single({ category }) {
  let { t } = useTranslation();
  return (
    <>
      <Head>
        <title>
          CG Prospect | {category.title}
          {t('single-category-texture:head-title')}
        </title>
        <meta
          name="description"
          content={`${category.title} ${t(
            'single-category-texture:head-desc'
          )}`}
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CGProspect" key="twhandle" />
        <meta
          property="og:title"
          content={`CG Prospect | ${category.title} ${t(
            'single-category-texture:head-og-title'
          )}`}
        />
        <meta
          property="og:description"
          content={`${category.title} ${t(
            'single-category-texture:head-og-desc'
          )}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://postgres.pages.dev/categories/${category.slug}`}
        />
        <meta property="og:image" content={category.mainImage} />
      </Head>
      <main className="category-page-single">
        <h1 className="big-font">
          {t('single-category-texture:title')} {category.title}.
        </h1>
        <p className="small-font">
          {t('single-category-texture:desc')} {category.title}{' '}
          {t('single-category-texture:desc-2')} {''}
          <Link href="/methods">
            <a className="underline highlight">
              {t('single-category-texture:desc-3')}
            </a>
          </Link>
        </p>
        <section className="container-category" key={category.id}>
          {category.textures.map((texture) => (
            <Link key={texture.id} href={`/free-textures/${texture.slug}`}>
              <a>
                <img
                  height="350"
                  width="350"
                  src={texture.mainImage}
                  alt={`A preview of the texture ${texture.title}`}
                />
              </a>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const category = await prisma.category.findFirst({
    include: { textures: true },
    where: {
      slug: String(params.slug),
    },
  });

  return {
    props: {
      category,
    },
  };
}

export async function getStaticPaths({ locales }) {
  const categories = await prisma.category.findMany();
  const paths = [];

  locales.forEach((locale, i) => {
    categories.forEach((category, i) => {
      paths.push({ params: { slug: category.slug }, locale });
    });
  });
  return {
    paths,
    fallback: false,
  };
}
