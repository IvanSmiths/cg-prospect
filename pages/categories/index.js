import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';

export default function Categories({ categories }) {
  return (
    <>
      <Head>
        <title>Categories, of free 8K pbr textures.</title>
        <meta
          name="description"
          content=" is one of multiple categories of free to download, up to native 8K Pbr
          Texture. Consider joining the Cahoot for exclusive content!"
        />
      </Head>
      <main className="categories-page">
        <h1 className="big-font">Browse: All categories</h1>
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
  });
  return {
    props: {
      categories,
    },
  };
}
