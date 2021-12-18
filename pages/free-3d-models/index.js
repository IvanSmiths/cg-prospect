import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home({ models, categories }) {
  let { t } = useTranslation();
  let router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const schema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      name: 'CG Prospect',
      url: 'https://www.cgprospect.com/free-3d-models',
      image: 'https://www.cgprospect.com/main-texture.jpg',
      description: `${t('list-model:head-title')}`,
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
            '@id': 'https://www.cgprospect.com/free-3d-models',
            name: `${t('list-model:title-2')}`,
          },
        },
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>{t('list-model:head-title')}</title>
        <meta name="description" content={`${t('list-model:head-desc')}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CG Prospect" key="twhandle" />
        <meta property="og:title" content={t('list-model:head-title')} />
        <meta property="og:description" content={t('list-model:head-desc')} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://postgres.pages.dev/free-models/`}
        />
        <meta property="og:image" content={models[0].mainImage} />
      </Head>
      <main className="container-list-texture">
        <aside className="category-list">
          <ul>
            {categories.map((category) => (
              <li key={category.id} className="small-font categories-list">
                <Link href={`/categories-3d-model/${category.slug}`}>
                  <a>{category.title}</a>
                </Link>
                <span className="highlight-bck">{category._count.model3d}</span>
              </li>
            ))}
          </ul>
        </aside>
        <section className="cnt-texture-list">
          <div className="texture-list-up-cnt model-list-up">
            <h1 className="medium-font">
              {t('list-model:title')}
              <strong> {t('list-model:title-2')}</strong>
            </h1>
            <h2 className="small-font">
              {t('list-model:link')}{' '}
              <Link href="/free-textures">
                <a className="underlinee highlight">{t('list-model:link-2')}</a>
              </Link>
              .
            </h2>
            <div className="accordion-list-3d-model">
              <div className="texture-accordion-cnt">
                <div
                  className="texture-accordion-title-list"
                  onClick={() => setIsActive(!isActive)}
                >
                  <h3 className="small-font highlight">
                    <strong>{t('list-model:card-1-title')}</strong>{' '}
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
                    {t('list-model:card-1-desc')}
                    <strong>{t('list-model:card-1-desc-2')}</strong>
                    {t('list-model:card-1-desc-3')}
                  </p>
                </div>
              </div>
              <div className="texture-accordion-cnt">
                <div
                  className="texture-accordion-title-list"
                  onClick={() => setIsActive2(!isActive2)}
                >
                  <h3 className="small-font highlight">
                    <strong>{t('list-model:card-2-title')}</strong>{' '}
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
                  <p className="small-font">
                    {t('list-model:card-2-desc')}
                    <strong>{t('list-model:card-2-desc-2')}</strong>
                    {t('list-model:card-2-desc-3')}
                  </p>
                </div>
              </div>
              <div className="texture-accordion-cnt">
                <div
                  className="texture-accordion-title-list"
                  onClick={() => setIsActive3(!isActive3)}
                >
                  <h3 className="small-font highlight">
                    <strong>{t('list-model:card-3-title')}</strong>{' '}
                  </h3>
                  <span className="texture-accordion-open">
                    {isActive3 ? '-' : '+'}
                  </span>
                </div>
                <div
                  className={
                    isActive3
                      ? 'open accordion-content'
                      : 'close accordion-content'
                  }
                >
                  <p className="small-font">
                    {t('list-model:card-3-desc')}
                    <strong>{t('list-model:card-3-desc-2')}</strong>
                    {t('list-model:card-3-desc-3')}
                  </p>
                </div>
              </div>
            </div>
          </div>{' '}
          <div className="texture-list">
            {models.map((model) => (
              <div className="single-texture-card" key={model.id}>
                <Link href={`/free-3d-models/${model.slug}`}>
                  <a className="small-font highlight">{model.title}</a>
                </Link>
                <Link key={model.id} href={`/free-3d-models/${model.slug}`}>
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
              </div>
            ))}
          </div>
          {/* <div className="page-btn">
            <button
              className="btn-line"
              onClick={() => router.push(`/free-models/page/2`)}
            >
              Next
            </button>
          </div> */}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const models = await prisma.model3d.findMany({
    orderBy: {
      id: 'desc',
    },
    take: 40,
  });
  const categories = await prisma.modelCategory.findMany({
    include: {
      model3d: true,
      _count: {
        select: {
          model3d: true,
        },
      },
    },
  });
  return {
    props: {
      models,
      categories,
    },
  };
}
