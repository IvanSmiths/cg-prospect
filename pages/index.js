import prisma from '../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home({ textures, categories }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {textures.map((texture) => (
          <Link
            key={texture.id}
            href={`/textures/[id]`}
            as={`/textures/${texture.id}`}
          >
            <li>{texture.title}</li>
          </Link>
        ))}
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/[id]`}
            as={`/categories/${category.id}`}
          >
            <li>{category.title}</li>
          </Link>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const textures = await prisma.texture.findMany({
    include: { category: true },
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
