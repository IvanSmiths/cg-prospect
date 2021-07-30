import React from 'react';
import prisma from '../../lib/prisma';
import Link from 'next/link';

function Authors({ authors }) {
  return (
    <section>
      <div className="authors-title-cnt">
        <h1 className="big-font">CG Prospect's Crew</h1>
      </div>
      <main className="authors-cnt">
        {authors.map((author) => (
          <div key={author.id} className="author-card">
            <img
              className="authors-img"
              src={author.img}
              height="200px"
              width="200px"
            ></img>
            <h2 className="big-font">{author.name}</h2>
            <h3 className="small-font">{author.role}</h3>
            <div className="authors-social-cnt">
              <a target="_blank" rel="noopener" href={author.instagram}>
                <img
                  loading="lazy"
                  src="/icon-instagram.svg"
                  width="24"
                  height="24"
                  alt={`Link to the Instagram profile of ${author.name}`}
                ></img>
              </a>
              <a target="_blank" rel="noopener" href={author.artstation}>
                <img
                  className="authors-artstation"
                  loading="lazy"
                  src="/icon-artstation.svg"
                  width="24"
                  height="24"
                  alt={`Link to the ArtStation profile of ${author.name}`}
                ></img>
              </a>
            </div>
            <a className="btn">
              <Link href="aa">See assets</Link>
            </a>
          </div>
        ))}
      </main>
    </section>
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
