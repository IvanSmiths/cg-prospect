import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';

export default function Single({ category }) {
  return (
    <>
      <Head>
        <title>CG Prospect | {category.title}, free 3d models.</title>
        <meta
          name="description"
          content={`${category.title} is one of multiple categories of free to download, 8K seamless Pbr
          Textures!`}
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CgProspect" key="twhandle" />
        <meta
          property="og:title"
          content={`CG Prospect | ${category.title}, 8K Free Texture`}
        />
        <meta
          property="og:description"
          content={`${category.title} is one of the multiple categories of CgProspect.`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://postgres.pages.dev/categories/${category.slug}`}
        />
        <meta property="og:image" content={category.mainImage} />
      </Head>
      <main className="category-page-single">
        <h1 className="big-font">Browse: {category.title} 3d models</h1>
        <p className="small-font">
          You're currently browsing {category.title} 3d models. If you would
          like to filter the 3d models by the creation method, go to the {''}
          <Link href="/methods">
            <a className="italic">methods page.</a>
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
