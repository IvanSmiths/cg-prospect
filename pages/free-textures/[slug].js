import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';
import { Elements } from '@stripe/react-stripe-js';
import getStripe from '../../utils/get-stripejs';
import ElementsForm from '../../components/ElementsForm';
import useTranslation from 'next-translate/useTranslation';
import * as fbq from '../../lib/fpixel';
import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import {
  FacebookIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import {
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

export default function SingleTexture({ texture, textures }) {
  let { t } = useTranslation();
  const schemaData = {
    '@context': 'http://schema.org',
    '@type': 'Product',
    name: `${texture.title}`,
    image: `${texture.mainImage}`,
    description: `${texture.title} is a free to download pbr texture, usable with Blender, Unreral Engine,and other 3d softwares.`,
    brand: 'CG Prospect',
    sku: `${texture.id}`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4',
      reviewCount: '3',
    },
    category: `${texture.textureCategory[0]}`,
    offers: {
      '@type': 'Offer',
      price: '0',
      url: `https://www.cgpospect.com/free-textures/${texture.slug}`,
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
    },
  };
  const handleClick = () => {
    fbq.event('Click', { currency: 'USD', value: 1 });
  };

  const SliderData = [
    {
      image: `${texture.mainImage}`,
      alt: 'The main preview of ',
    },
    {
      image: `${texture.secImage}`,
      alt: 'The secondary preview of ',
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Head>
        <title>
          {texture.title}, {t('single-texture:head-title')}
        </title>
        <meta
          name="description"
          content={`${texture.title} ${t('single-texture:head-desc')}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CGProspect" key="twhandle" />
        <meta
          property="og:title"
          content={`CGProspect | ${texture.title}, ${t(
            'single-texture:head-og-title'
          )}`}
        />
        <meta
          property="og:description"
          content={`${texture.title} ${t('single-texture:head-og-desc')}.`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.cgprospect.com/free-textures/${texture.slug}`}
        />
        <meta property="og:image" content={texture.mainImage} />
      </Head>
      <main className="container-single-texture">
        <div className="container-texture-details" key={texture.id}>
          <h1 className="big-font title-texture">
            {t('single-texture:pre-title')}
            {texture.title}
          </h1>
          <p className="small-font p-slug">
            {texture.title} {t('single-texture:title')}
            <a
              href="https://www.instagram.com/cgprospect"
              rel="noopener"
              target="_blank"
              className="highlight underline"
            >
              {t('single-texture:title-2')}
            </a>
            {t('single-texture:title-3')}
            <a
              href="https://www.patreon.com/cgprospect"
              className="highlight-patreon underline"
              rel="noopener"
              target="_blank"
            >
              {t('single-texture:title2')}
            </a>
          </p>
          <div className="first-details container-background">
            <div>
              <ul className="list-detail">
                <li className="small-font">
                  <img
                    loading="lazy"
                    className="ico-list-single"
                    src="/category-texture.svg"
                    alt="Icon of the category"
                    height="32"
                    width="32"
                  />
                  <b className="small-font-sub">
                    {' '}
                    {t('single-texture:categories')}{' '}
                  </b>
                  {texture.category.map((category) => (
                    <Link
                      key={category.id}
                      href={`/categories/${category.slug}`}
                    >
                      <a className="highlight-bck underline">
                        {category.title}{' '}
                      </a>
                    </Link>
                  ))}
                </li>
                <li className="small-font">
                  <img
                    loading="lazy"
                    className="ico-list-single"
                    src="/method-texture.svg"
                    alt="Icon of the method"
                    height="32"
                    width="32"
                  />
                  <b className="small-font-sub">
                    {' '}
                    {t('single-texture:method')}
                  </b>{' '}
                  <Link
                    key={texture.method[0].id}
                    href={`/methods/${texture.method[0].slug}`}
                  >
                    <a className="highlight-bck underline">
                      {texture.method[0].title}{' '}
                    </a>
                  </Link>
                </li>
                <li className="small-font">
                  <img
                    loading="lazy"
                    className="ico-list-single"
                    src="/resolution-texture.svg"
                    alt="Icon of the scale"
                    height="32"
                    width="32"
                  />
                  <b className="small-font-sub"> {t('single-texture:scale')}</b>{' '}
                  {texture.scale} {t('single-texture:meters')}
                </li>
                <li className="small-font">
                  <img
                    loading="lazy"
                    className="ico-list-single"
                    src="/location-texture.svg"
                    alt="Icon of the location"
                    height="32"
                    width="32"
                  />
                  <b className="small-font-sub">
                    {' '}
                    {t('single-texture:location')}{' '}
                  </b>{' '}
                  {texture.location}
                </li>
                <li className="small-font">
                  <img
                    loading="lazy"
                    className="ico-list-single"
                    src="/date-texture.svg"
                    alt="Icon of the date"
                    height="32"
                    width="32"
                  />
                  <b className="small-font-sub">
                    {' '}
                    {t('single-texture:published')}{' '}
                  </b>
                  {texture.published}
                </li>
              </ul>
            </div>
          </div>
          <h2 className="btn-font highlight">
            {t('single-texture:gear-title')}
          </h2>
          <div className="first-details">
            <div className="container-gear">
              <ul className="gear-list">
                <li className="small-font-sub">
                  {t('single-texture:gear-1')}:{' '}
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.amazon.com/gp/product/B00PX8CNCM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00PX8CNCM&linkCode=as2&tag=cgprospect-20&linkId=574b7e4b3dc47b6a21ec8a5f31189313"
                    className="underline white small-font"
                  >
                    Sony A7II
                  </a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-2')}:{' '}
                  <a
                    href="https://www.amazon.com/gp/product/B00GTXHQ8Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00GTXHQ8Q&linkCode=as2&tag=cgprospect-20&linkId=15c90ac305346e3ae564bd8ac06010a8"
                    target="_blank"
                    rel="noopener"
                    className="underline white small-font"
                  >
                    Sony 28-70mm
                  </a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-3')}:{' '}
                  <a
                    href="https://www.amazon.com/gp/product/B07VRPVQS3/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07VRPVQS3&linkCode=as2&tag=cgprospect-20&linkId=467886b639adc7bb01e3ea21e7b739d0"
                    target="_blank"
                    rel="noopener"
                    className="underline white small-font"
                  >
                    K&F Concept S210
                  </a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-12')}:{' '}
                  <a
                    href="https://www.amazon.com/gp/product/B01MSAEZN8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01MSAEZN8&linkCode=as2&tag=cgprospect-20&linkId=eb9e366c73d38c8d6d94abef03de09fb"
                    target="_blank"
                    rel="noopener"
                    className="underline white small-font"
                  >
                    Neewer tripod
                  </a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-4')}:{' '}
                  <a
                    href="https://www.amazon.com/gp/product/B000KL7J3A/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000KL7J3A&linkCode=as2&tag=cgprospect-20&linkId=6eb8c1714343d7e2f7c3786ed7fb6ce0"
                    target="_blank"
                    rel="noopener"
                    className="underline white small-font"
                  >
                    HOYA Pro 1
                  </a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-10')}:{' '}
                  <a
                    href="https://www.amazon.com/gp/product/B07TXR2146/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07TXR2146&linkCode=as2&tag=cgprospect-20&linkId=58b4cd20b5d4080decb512952760be02"
                    target="_blank"
                    rel="noopener"
                    className="underline white small-font"
                  >
                    X-Rite ColorChecker
                  </a>
                </li>
              </ul>
              <ul className="gear-list">
                <li className="small-font-sub">
                  {t('single-texture:gear-5')}:{' '}
                  <a
                    href="https://www.amazon.com/gp/product/B093JCZWWF/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B093JCZWWF&linkCode=as2&tag=cgprospect-20&linkId=bdffad1dddf05032e221861c6b36ee94"
                    target="_blank"
                    rel="noopener"
                    className="underline white small-font"
                  >
                    Acer Nitro 5 RTX 3060
                  </a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-6')}:{' '}
                  <a
                    href="https://www.amazon.com/gp/product/B095SCMW1L/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B095SCMW1L&linkCode=as2&tag=cgprospect-20&linkId=048a602f145b976b9d4b1c37bb6e5b39"
                    target="_blank"
                    rel="noopener"
                    className="underline white small-font"
                  >
                    AMD Ryzen 9 5900X
                  </a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-7')}:{' '}
                  <a
                    href="https://www.amazon.com/gp/product/B07MC23VS4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07MC23VS4&linkCode=as2&tag=cgprospect-20&linkId=bd8611ce6da15ad7ca0b0e7660f7cc82"
                    target="_blank"
                    rel="noopener"
                    className="underline white small-font"
                  >
                    Nvidia GeForce RTX 2060
                  </a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-8')}:{' '}
                  <a
                    href="https://www.amazon.com/gp/product/B07SXF8GY3/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07SXF8GY3&linkCode=as2&tag=cgprospect-20&linkId=0925d258e74cf7f6ae5e3caab7d4b8a9"
                    target="_blank"
                    rel="noopener"
                    className="underline white small-font"
                  >
                    ASUS AM4 TUF Gaming X570
                  </a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-11')}:{' '}
                  <a
                    href="https://www.amazon.com/gp/product/B07DPC98DT/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07DPC98DT&linkCode=as2&tag=cgprospect-20&linkId=fdc4c2fd0f41215141c5062c844e3cb7"
                    target="_blank"
                    rel="noopener"
                    className="underline white small-font"
                  >
                    HUION H610
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="btn-font highlight">
            {t('single-texture:download-title')}
          </h2>
          <div className="container-links">
            <ul>
              <li className="small-font underline">
                <a
                  target="_blank"
                  rel="noopener"
                  href={texture.png2k}
                  rel="noopener"
                >
                  PNG 2K ({texture.png2ksize})
                </a>
              </li>
              <li className="small-font underline">
                <a
                  target="_blank"
                  rel="noopener"
                  href={texture.png4k}
                  rel="noopener"
                >
                  PNG 4K ({texture.png4ksize})
                </a>
              </li>
              <li className="small-font underline">
                <a
                  target="_blank"
                  rel="noopener"
                  href={texture.png8k}
                  rel="noopener"
                >
                  PNG 8K ({texture.png8ksize})
                </a>
              </li>
            </ul>
            <ul>
              <li className="small-font underline">
                <a
                  target="_blank"
                  rel="noopener"
                  href={texture.jpg2k}
                  rel="noopener"
                >
                  Jpg 2K ({texture.jpg2ksize})
                </a>
              </li>
              <li className="small-font underline">
                <a
                  target="_blank"
                  rel="noopener"
                  rel="noopener"
                  href={texture.jpg4k}
                >
                  Jpg 4K ({texture.jpg4ksize})
                </a>
              </li>
              <li className="small-font underline">
                <a
                  target="_blank"
                  rel="noopener"
                  href={texture.jpg8k}
                  rel="noopener"
                >
                  Jpg 8K ({texture.jpg8ksize})
                </a>
              </li>
            </ul>
          </div>
          <h2 className="btn-font highlight">{t('single-texture:share')}</h2>
          <div className="social-share-cnt">
            <FacebookShareButton
              url={`https://www.cgprospect.com/free-textures/${texture.slug}`}
            >
              <FacebookIcon size={42} round="true" />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://www.cgprospect.com/free-textures/${texture.slug}`}
            >
              <TwitterIcon size={42} round="true" />
            </TwitterShareButton>
            <PinterestShareButton
              media={texture.mainImage}
              url={`https://www.cgprospect.com/free-textures/${texture.slug}`}
            >
              <PinterestIcon size={42} round="true" />
            </PinterestShareButton>
            <WhatsappShareButton
              url={`https://www.cgprospect.com/free-textures/${texture.slug}`}
            >
              <WhatsappIcon size={42} round="true" />
            </WhatsappShareButton>
            <TelegramShareButton
              url={`https://www.cgprospect.com/free-textures/${texture.slug}`}
            >
              <TelegramIcon size={42} round="true" />
            </TelegramShareButton>
            <RedditShareButton
              url={`https://www.cgprospect.com/free-textures/${texture.slug}`}
            >
              <RedditIcon size={42} round="true" />
            </RedditShareButton>
          </div>
          <section className="texture-accordion-cnt">
            <div
              className="texture-accordion-title"
              onClick={() => setIsActive(!isActive)}
            >
              <h3 className="small-font highlight">
                {t('single-texture:text-title')}
              </h3>
              <span className="texture-accordion-open">
                {isActive ? '-' : '+'}
              </span>
            </div>
            <div
              className={
                isActive ? 'open accordion-content' : 'close accordion-content'
              }
            >
              <p className="small-font">
                <strong>
                  {texture.title} {t('single-texture:text')} {''}
                </strong>{' '}
                {t('single-texture:text-2')} {texture.category[0].title}
                {t('single-texture:text-3')} {texture.location}{' '}
                {t('single-texture:text-4')} {texture.scale}{' '}
                {t('single-texture:text-5')}{' '}
                <strong>Blender, Maya, Cinema 4D</strong>, {''}
                {t('single-texture:text-6')}
                <strong> Unreal Engine or Unity</strong>{' '}
                {t('single-texture:text-7')}
              </p>
            </div>
          </section>
        </div>
        <div className="cnt-first-col">
          <div className="container-texture-image">
            <div className="slider">
              <FaArrowAltCircleLeft
                className="left-arrow arrow"
                onClick={prevSlide}
              />
              <FaArrowAltCircleRight
                className="right-arrow arrow"
                onClick={nextSlide}
              />
              {SliderData.map((slide, index) => {
                return (
                  <div key={index}>
                    {index === current && (
                      <div
                        className={index === current ? 'slide active' : 'slide'}
                      >
                        <img
                          onClick={handleClick}
                          loading="lazy"
                          height="600"
                          width="600"
                          className="single-main-image"
                          src={slide.image}
                          alt={`${slide.alt}the ${texture.title} texture`}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sponsor-cnt">
            <h3 className="small-font sponsor-texture">
              <b className="small-font highlight">
                {t('single-texture:sponsor-title')} <br />
              </b>
              <a
                href={texture.sponsorLink}
                className="medium-font underline highlight-main"
                target="_blank"
                rel="noopener"
              >
                {' '}
                {texture.sponsorName}{' '}
              </a>{' '}
            </h3>
            <br />
            <a href={texture.sponsorLink} target="_blank" rel="noopener">
              <img
                loading="lazy"
                className="sponsor-img"
                loading="lazy"
                width="500"
                height="300"
                src={texture.sponsorImage}
                alt={`A sponsor image of ${texture.sponsorName}`}
              />
            </a>
            <p className="small-font">{texture.sponsorDesc}</p>
            <a
              className="btn"
              href={texture.sponsorLink}
              target="_blank"
              rel="noopener"
            >
              {texture.sponsorCta}
            </a>
            <h4 className="small-font sponsor-texture">
              {t('single-texture:sponsor-desc')}
              {''}
              <Link href="/sponsor-texture">
                <a>
                  <strong className="highlight underline">
                    {' '}
                    {t('single-texture:sponsor-desc2')}
                  </strong>
                </a>
              </Link>
            </h4>
          </div>
          <div className="donate-btn">
            <h2 className="btn-font highlight">
              {t('single-texture:donate-title')}
            </h2>
            <div className="donate-buttons">
              <Elements stripe={getStripe()}>
                <ElementsForm />
              </Elements>
              <div className="paypal-crypto-cnt">
                <a href="https://www.paypal.com/donate/?hosted_button_id=MZQH8LFX27JH6">
                  <button className="btn btn-paypal">Donate with PayPal</button>
                </a>
                <div>
                  <a
                    className="donate-with-crypto crypto"
                    href="https://commerce.coinbase.com/checkout/a00d1c2c-6ee8-43d0-b814-d2d0c21e4ea2"
                  >
                    Donate with Crypto
                  </a>
                </div>
                <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807"></script>
              </div>
            </div>
          </div>
        </div>
      </main>
      <h2 className="medium-font h2-suggest">
        {t('single-texture:see-also-title')}
      </h2>
      <section className="texture-suggest">
        {textures.map((texture) => (
          <Link key={texture.id} href={`/free-textures/${texture.slug}`}>
            <a>
              <img
                loading="lazy"
                width="230"
                height="230"
                className="textures-list"
                src={texture.mainImage}
                alt={`A preview of the texture ${texture.title}`}
              />
            </a>
          </Link>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps({ params }) {
  const texture = await prisma.texture.findFirst({
    include: { category: true, method: true },
    where: {
      slug: String(params.slug),
    },
  });

  const textures = await prisma.texture.findMany({
    include: { category: true },
    orderBy: {
      id: 'desc',
    },
    take: 10,
  });

  return {
    props: {
      texture,
      textures,
    },
  };
}

export async function getStaticPaths({ locales }) {
  const textures = await prisma.texture.findMany();
  const paths = [];

  locales.forEach((locale, i) => {
    textures.forEach((texture, i) => {
      paths.push({ params: { slug: texture.slug }, locale });
    });
  });
  return {
    paths,
    fallback: false,
  };
}
