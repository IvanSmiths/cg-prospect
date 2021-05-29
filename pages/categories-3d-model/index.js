import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';

export default function CategoriesModel({ categories }) {
  return (
    <>
      <Head>
        <title>CG Prospect | Categories, of free 3d models.</title>
        <meta
          name="description"
          content=" is one of multiple categories of free to download, up to native 8K Pbr
          Texture. Consider joining the Cahoot for exclusive content!"
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CgProspect" key="twhandle" />
        <meta property="og:title" content={`CgProspect | 8K Free Texture`} />
        <meta
          property="og:description"
          content="On CgProspect you can find countess of free to download textures."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://postgres.pages.dev/categories/`}
        />
        <meta property="og:image" content={categories[0].mainImage} />
      </Head>
      <main className="categories-page">
        <h1 className="big-font">Browse: All 3d model categories</h1>
        <p className="small-font">
          You're currently browsing all the categories. If you would like to
          filter the textures by the creation method, go to the {''}
          <Link locale="en" href="/methods">
            <a className="italic">methods page.</a>
          </Link>
        </p>
        <section className="container-category">
          {categories.map((category) => (
            <Link
              locale="en"
              href={`/categories-3d-model/${category.slug}`}
              key={category.id}
            >
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
  const categories = await prisma.modelCategory.findMany({
    include: { model3d: true },
  });
  return {
    props: {
      categories,
    },
  };
}