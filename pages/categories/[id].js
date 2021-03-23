import prisma from '../../lib/prisma';
import Link from 'next/link';

export default function Single({ category }) {
  console.log(category);
  return (
    <div>
      <h1>{category.title}</h1>
      {category.textures.map((texture) => (
        <Link
          key={texture.id}
          href={`/textures/[id]`}
          as={`/textures/${texture.id.toString()}`}
        >
          <a>
            <h2>{texture.title}</h2>
          </a>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const category = await prisma.category.findFirst({
    include: { textures: true },
    where: {
      id: Number(params.id),
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
        id: category.id.toString(),
      },
    })),
    fallback: false,
  };
}
