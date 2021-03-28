import prisma from '../../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SecondPage({ textures, categories }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>free 8K pbr textures.</title>
        <meta
          name="description"
          content=" is one of multiple categories of free to download, up to native 8K Pbr
        Texture. Consider joining the Cahoot for exclusive content!"
        />
      </Head>
      <main className="container-list-texture">
        <aside className="category-list">
          <ul>
            {categories.map((category) => (
              <li key={category.id} className="small-font categories-list">
                <Link href={`/categories/${category.slug}`}>
                  <a>{category.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <section className="texture-list">
          {textures.map((texture) => (
            <Link key={texture.id} href={`/textures/${texture.slug}`}>
              <a className="small-font">
                <img
                  loading="lazy"
                  width="330"
                  height="330"
                  className="textures-list"
                  src={texture.mainImage}
                  alt={`A preview of the texture ${texture.title}`}
                />
              </a>
            </Link>
          ))}
        </section>
        <div className="page-btn">
          <button className="btn-line" onClick={() => router.push(`/textures`)}>
            Previous
          </button>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const textures = await prisma.texture.findMany({
    include: { category: true },
    orderBy: {
      id: 'desc',
    },
    skip: 2,
  });
  const categories = await prisma.category.findMany({
    include: { textures: true },
  });
  return {
    props: {
      textures,
      categories,
    },
  };
}
