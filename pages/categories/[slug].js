import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';

export default function Single({ category }) {
  return (
    <>
      <Head>
        <title>{category.title}, free 8K pbr textures.</title>
        <meta
          name="description"
          content={`${category.title} is one of multiple categories of free to download, 8K seamless Pbr
          Textures!`}
        />
      </Head>
      <main className="category-page-single">
        <h1 className="big-font">Browse: {category.title} textures</h1>
        <section className="container-category" key={category.id}>
          {category.textures.map((texture) => (
            <Link key={texture.id} href={`/textures/${texture.slug}`}>
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

export async function getStaticPaths() {
  const categories = await prisma.category.findMany();

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug.toString(),
      },
    })),
    fallback: false,
  };
}
