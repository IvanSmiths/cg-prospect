import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Categories({ categories }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/[slug]`}
            as={`/categories/${category.slug}`}
          >
            <li key={category.id}>{category.title}</li>
          </Link>
        ))}
      </main>
    </div>
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
