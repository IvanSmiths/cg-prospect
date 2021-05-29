import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';

const Methods = ({ methods }) => {
  return (
    <>
      <Head>
        <title>Methods, of free 8K pbr textures.</title>
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
        <meta property="og:image" content={methods[0].mainImage} />
      </Head>
      <main className="methods-page">
        <h1 className="big-font">Browse: All Methods</h1>
        <section className="container-methods">
          {methods.map((method) => (
            <Link locale="en" href={`/methods/${method.slug}`} key={method.id}>
              <a>
                <img
                  height="250"
                  width="450"
                  src={method.mainImage}
                  alt={`An image of the method ${method.title}`}
                />
                <h2 className="small-font highlight">{method.title}</h2>
              </a>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const methods = await prisma.modelMethod.findMany({
    include: { model3d: true },
  });
  return {
    props: {
      methods,
    },
  };
}

export default Methods;
