import prisma from '../../lib/prisma';
import Link from 'next/link';

export default function SingleTexture({ texture }) {
  console.log(texture);
  return (
    <div>
      <h1>{texture.title}</h1>
      <Link
        href={`/categories/[id]`}
        as={`/categories/${texture.category.id.toString()}`}
      >
        <h1>{texture.category.title}</h1>
        <h2>test</h2>
      </Link>
      <img src={texture.mainImage} alt="" />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const texture = await prisma.texture.findFirst({
    include: { category: true },
    where: {
      id: Number(params.id),
    },
  });

  return {
    props: {
      texture,
    },
  };
}

export async function getStaticPaths() {
  const textures = await prisma.texture.findMany();

  return {
    paths: textures.map((texture) => ({
      params: {
        id: texture.id.toString(),
      },
    })),
    fallback: false,
  };
}
