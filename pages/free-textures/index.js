import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';

export default function Home({ textures, categories }) {
  return (
    <>
      <Head>
        <title>CG Prospect | Free 8k textures.</title>
        <meta
          name="description"
          content=" is one of multiple categories of free to download, up to native 8K Pbr
        Texture. Consider joining the Cahoot for exclusive content!"
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CG Prospect" key="twhandle" />
        <meta property="og:title" content={`CG Prospect | 8K Free Texture`} />
        <meta
          property="og:description"
          content="On CG Prospect you can find countess of free to download textures."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.cgprospect.com/free-textures/`}
        />
        <meta property="og:image" content={textures[0].mainImage} />
      </Head>
      <main className="container-list-texture">
        <aside className="category-list">
          <ul>
            {categories.map((category) => (
              <li key={category.id} className="small-font categories-list">
                <Link href={`/categories/${category.slug}`}>
                  <a>{category.title}</a>
                </Link>
                <span className="highlight-bck">
                  {category._count.textures}
                </span>
              </li>
            ))}
          </ul>
        </aside>
        <section className="cnt-texture-list">
          <div className="texture-list-up-cnt">
            <p className="small-font">
              You are browsing all the free textures. If you want to browse free
              3d models,{' '}
              <Link href="/free-3d-models">
                <a className="underlinee highlight">go here</a>
              </Link>
              .
            </p>
          </div>{' '}
          <div className="texture-list">
            {textures.map((texture) => (
              <Link key={texture.id} href={`/free-textures/${texture.slug}`}>
                <a className="small-font">
                  <img
                    loading="lazy"
                    width="400"
                    height="400"
                    className="textures-list"
                    src={texture.mainImage}
                    alt={`A preview of the texture ${texture.title}`}
                  />
                </a>
              </Link>
            ))}
            {/* <div className="page-btn">
              <button
                className="btn-line"
                onClick={() => router.push(`/free-textures/page/2`)}
              >
                Next
              </button>
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const textures = await prisma.texture.findMany({
    orderBy: {
      id: 'desc',
    },
    take: 20,
  });
  const categories = await prisma.category.findMany({
    include: {
      textures: true,
      _count: {
        select: {
          textures: true,
        },
      },
    },
    orderBy: {
      title: 'asc',
    },
  });
  return {
    props: {
      textures,
      categories,
    },
  };
}
