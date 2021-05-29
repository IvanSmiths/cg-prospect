import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';

const SingleMethod = ({ method }) => {
  return (
    <>
      <Head>
        <title>{method.title}, free 8K pbr textures.</title>
        <meta
          name="description"
          content={`${method.title} is one of multiple categories of free to download, up to native 8K Pbr
          Texture. Consider joining the Cahoot for exclusive content!`}
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CgProspect" key="twhandle" />
        <meta
          property="og:title"
          content={`CgProspect | ${method.title}, 8K Free Texture`}
        />
        <meta
          property="og:description"
          content={`${method.title} is one of the multiple categories of CgProspect.`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://postgres.pages.dev/methods/${method.slug}`}
        />
        <meta property="og:image" content={method.mainImage} />
      </Head>
      <main className="method-page-single">
        <h1 className="big-font">Browse: {method.title} textures</h1>

        <section className="container-single-method" key={method.id}>
          {method.textures.map((texture) => (
            <Link
              locale="en"
              key={texture.id}
              href={`/free-textures/${texture.slug}`}
            >
              <a>
                <img
                  src={texture.mainImage}
                  height="350"
                  width="350"
                  alt="A link preview of a texture"
                />
              </a>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};

export async function getStaticProps({ params }) {
  const method = await prisma.method.findFirst({
    include: { textures: true },
    where: {
      slug: String(params.slug),
    },
  });

  return {
    props: {
      method,
    },
  };
}

export async function getStaticPaths() {
  const methods = await prisma.method.findMany();

  return {
    paths: methods.map((method) => ({
      params: {
        slug: method.slug.toString(),
      },
    })),
    fallback: false,
  };
}

export default SingleMethod;
