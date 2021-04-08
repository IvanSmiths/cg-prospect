import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home({ textures, categories }) {
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
          content={`https://postgres.pages.dev/free-textures/`}
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
              </li>
            ))}
          </ul>
        </aside>
        <section className="cnt-texture-list">
          <p className="small-font">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum
            eaque quidem quos similique. Alias non ut est hic? Dolores provident
            amet similique commodi pariatur quasi sit dicta perspiciatis quia
            accusantium dolor odit voluptates, ad, exercitationem repudiandae
            sed, deserunt reprehenderit blanditiis. Labore delectus deserunt
            quisquam id amet reprehenderit debitis adipisci!
          </p>
          <div className="texture-list">
            {textures.map((texture) => (
              <Link key={texture.id} href={`/free-textures/${texture.slug}`}>
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
          </div>
        </section>
        <div className="page-btn">
          <button
            className="btn-line"
            onClick={() => router.push(`/free-textures/page/2`)}
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const textures = await prisma.texture.findMany({
    orderBy: {
      id: 'desc',
    },
    take: 2,
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
