import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home({ textures, categories }) {
  let { t } = useTranslation();
  let router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const schema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      name: 'CG Prospect',
      url: 'https://www.cgprospect.com/free-textures',
      image: 'https://www.cgprospect.com/main-texture.jpg',
      description: `${t('home:head-desc')}`,
      brand: {
        '@type': 'Brand',
        logo: 'https://www.cgprospect.com/logo-icon-white.svg',
      },
      sameAs: 'https://www.cgprospect.com',
      author: {
        '@type': 'Person',
        name: 'Ivan',
        familyName: 'Smiths',
        url: 'https://www.ivansmiths.com',
      },
      inLanguage: `${router.locale}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': 'https://www.cgprospect.com',
            name: 'Homepage',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id': 'https://www.cgprospect.com/free-textures',
            name: 'Free Textures',
          },
        },
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>{t('list-textures:head-title')}</title>
        <meta name="description" content={`${t('list-textures:head-desc')}`} />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CG Prospect" key="twhandle" />
        <meta property="og:title" content={t('list-textures:head-title')} />
        <meta
          property="og:description"
          content={t('list-textures:head-desc')}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.cgprospect.com/free-textures/`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
                <span className="highlight-bck">
                  {category._count.textures}
                </span>
              </li>
            ))}
          </ul>
        </aside>
        <section className="cnt-texture-list">
          <div className="texture-list-up-cnt">
            <h1 className="medium-font">
              {t('list-textures:title')}{' '}
              <strong> {t('list-textures:title-2')}</strong>
            </h1>
            <h2 className="small-font">
              {t('list-textures:link')}{' '}
              <Link href="/free-3d-models">
                <a className="underlinee highlight">
                  {t('list-textures:link-2')}
                </a>
              </Link>
              .
            </h2>
            <div className="accordion-list">
              <div className="texture-accordion-cnt">
                <div
                  className="texture-accordion-title-list"
                  onClick={() => setIsActive(!isActive)}
                >
                  <h3 className="small-font highlight">
                    <strong>{t('list-textures:card-1-title')}</strong>{' '}
                  </h3>
                  <span className="texture-accordion-open">
                    {isActive ? '-' : '+'}
                  </span>
                </div>
                <div
                  className={
                    isActive
                      ? 'open accordion-content'
                      : 'close accordion-content'
                  }
                >
                  <p className="small-font">
                    {t('list-textures:card-1-desc')}
                    <strong>{t('list-textures:card-1-desc-2')}</strong>
                    {t('list-textures:card-1-desc-3')}
                  </p>
                </div>
              </div>
              <div className="texture-accordion-cnt">
                <div
                  className="texture-accordion-title-list"
                  onClick={() => setIsActive2(!isActive2)}
                >
                  <h3 className="small-font highlight">
                    <strong>{t('list-textures:card-2-title')}</strong>{' '}
                  </h3>
                  <span className="texture-accordion-open">
                    {isActive2 ? '-' : '+'}
                  </span>
                </div>
                <div
                  className={
                    isActive2
                      ? 'open accordion-content'
                      : 'close accordion-content'
                  }
                >
                  <p className="small-font">{t('list-textures:card-2-desc')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="texture-list">
            {textures.map((texture) => (
              <div className="single-texture-card" key={texture.id}>
                <Link href={`/free-textures/${texture.slug}`}>
                  <a className="small-font highlight">{texture.title}</a>
                </Link>
                <Link href={`/free-textures/${texture.slug}`}>
                  <a className="small-font">
                    <img
                      loading="lazy"
                      width="400"
                      height="400"
                      className="textures-list"
                      src={texture.mainImage}
                      alt={`A preview of the texture ${texture.title}`}
                    />
                  </a>
                </Link>
                {/* <Link href={`/free-textures/${texture.slug}`}>
                  <a className="btn first-btn">See it</a>
                </Link>
                <a
                  className="btn-line"
                  href={`https://texture.cgprospect.com/file/textures3d/${texture.slug}-4k-png.rar`}
                >
                  Quick download (4K PNG)
                </a> */}
              </div>
            ))}
            {/* <div className="page-btn">
              <button
                className="btn-line"
                onClick={() => router.push(`/free-textures/page/2`)}
              >
                Next
              </button>
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const textures = await prisma.texture.findMany({
    orderBy: {
      id: 'desc',
    },
    take: 40,
  });
  const categories = await prisma.category.findMany({
    include: {
      textures: true,
      _count: {
        select: {
          textures: true,
        },
      },
    },
    orderBy: {
      title: 'asc',
    },
  });
  return {
    props: {
      textures,
      categories,
    },
  };
}
