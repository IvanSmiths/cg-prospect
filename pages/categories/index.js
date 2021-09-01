import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

export default function Categories({ categories }) {
  let { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('categories-texture:head-title')}</title>
        <meta name="description" content={t('categories-texture:head-desc')} />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CgProspect" key="twhandle" />
        <meta
          property="og:title"
          content={t('categories-texture:head-og-title')}
        />
        <meta
          property="og:description"
          content={t('categories-texture:head-og-desc')}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://postgres.pages.dev/categories/`}
        />
        <meta property="og:image" content={categories[0].mainImage} />
      </Head>
      <main className="categories-page">
        <h1 className="big-font">{t('categories-texture:title')}</h1>
        <p className="small-font">
          {t('categories-texture:desc')}
          <Link href="/categories-3d-model">
            <a className="highlight underline">
              {t('categories-texture:desc-2')}
            </a>
          </Link>
        </p>
        <section className="container-category">
          {categories.map((category) => (
            <Link href={`/categories/${category.slug}`} key={category.id}>
              <a>
                <img
                  height="250"
                  width="250"
                  src={category.mainImage}
                  alt={`An image of the category ${category.title}`}
                />
                <h2 className="small-font highlight">{category.title}</h2>
              </a>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const categories = await prisma.category.findMany({
    include: { textures: true },
    orderBy: {
      title: 'asc',
    },
  });
  const user = await prisma.user.findMany({});
  console.log(user);
  return {
    props: {
      categories,
    },
  };
}
