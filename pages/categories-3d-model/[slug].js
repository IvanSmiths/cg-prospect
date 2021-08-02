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
          CG Prospect | {category.title} {t('single-category-model:head-title')}
        </title>
        <meta
          name="description"
          content={`${category.title} ${t('single-category-model:head-desc')}`}
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CgProspect" key="twhandle" />
        <meta
          property="og:title"
          content={`CG Prospect | ${category.title} ${t(
            'single-category-model:head-og-title'
          )}`}
        />
        <meta
          property="og:description"
          content={`${category.title} ${t(
            'single-category-model:head-og-desc'
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
          {t('single-category-model:title')} {category.title}{' '}
          {t('single-category-model:title-2')}
        </h1>
        <p className="small-font">
          {t('single-category-model:desc')} {category.title}{' '}
          {t('single-category-model:desc-2')} {''}
          <Link href="/methods">
            <a className="italic">{t('single-category-model:desc-3')}</a>
          </Link>
        </p>
        <section className="container-category" key={category.id}>
          {category.model3d.map((model) => (
            <Link key={model.id} href={`/free-3d-models/${model.slug}`}>
              <a>
                <img
                  height="350"
                  width="350"
                  src={model.mainImage}
                  alt={`a of the model ${model.title}`}
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
  const category = await prisma.modelCategory.findFirst({
    include: { model3d: true },
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
  const categories = await prisma.modelCategory.findMany();
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
