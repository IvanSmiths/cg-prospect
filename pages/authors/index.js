import React from 'react';
import prisma from '../../lib/prisma';

function Authors({ authors }) {
  console.log(authors);
  return (
    <main>
      {authors.map((author) => (
        <div key={author.id}>
          <h2 className="big-font">{author.name}</h2>
        </div>
      ))}
    </main>
  );
}

export default Authors;

export async function getStaticProps() {
  const authors = await prisma.user.findMany({
    orderBy: {
      id: 'desc',
    },
    include: {
      textures: true,
      _count: {
        select: {
          textures: true,
        },
      },
    },
  });
  return {
    props: {
      authors,
    },
  };
}
