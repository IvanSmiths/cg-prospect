import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';

export default function Home({ models }) {
  return (
    <>
      <Head>
        <title>CG Prospect | All free 3d models.</title>
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
          content="On CG Prospect you can find countess of free to download models."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://postgres.pages.dev/free-models/`}
        />
        <meta property="og:image" content={models[0].mainImage} />
      </Head>
      <main className="container-list-texture">
        <section className="cnt-texture-list">
          <div className="texture-list">
            {models.map((model) => (
              <Link
                key={model.id}
                locale="en"
                href={`/free-3d-models/${model.slug}`}
              >
                <a className="small-font">
                  <img
                    loading="lazy"
                    width="330"
                    height="330"
                    className="models-list"
                    src={model.mainImage}
                    alt={`A preview of the model ${model.title}`}
                  />
                </a>
              </Link>
            ))}
          </div>
        </section>
        <div className="page-btn">
          <button
            className="btn-line"
            onClick={() => router.push(`/free-models/page/2`)}
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const models = await prisma.model3d.findMany({
    orderBy: {
      id: 'desc',
    },
    take: 2,
  });
  return {
    props: {
      models,
    },
  };
}
