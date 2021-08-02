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
          CG Prospect | {texture.title}, {t('single-texture:head-title')}
        </title>
        <meta
          name="description"
          content={`${texture.title} ${t('single-texture:head-desc')}`}
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
                          height="500"
                          width="500"
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
                width="550"
                height="400"
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
        <div className="container-texture-details" key={texture.id}>
          <h1 className="big-font title-texture">{texture.title}</h1>
          <p className="small-font p-slug">
            {texture.title} {t('single-texture:title')}
            <a
              href="https://www.patreon.com/cgprospect"
              className="italic"
              rel="noopener"
              target="_blank"
            >
              <b className="highlight-patreon underline">
                {t('single-texture:title2')}
              </b>
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
                    href="https://www.amazon.com/Sony-Mirrorless-Digital-Camera-28-70mm/dp/B00PX8CNCM/ref=sr_1_1?dchild=1&keywords=sony+a7ii&qid=1627326537&sr=8-1"
                    className="underline white small-font"
                  >
                    Sony A7II
                  </a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-2')}:{' '}
                  <a
                    href="https://www.amazon.com/Sony-28-70mm-F3-5-5-6-Interchangeable-Standard/dp/B00GTXHQ8Q/ref=sr_1_1?dchild=1&keywords=Sony+Alpha+lens+28-70&qid=1627326793&sr=8-1"
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
                    href="https://www.amazon.com/Concept-SA254M1-Camera-Tripod-Magnesium/dp/B091YCYS28"
                    target="_blank"
                    rel="noopener"
                    className="underline white small-font"
                  >
                    K&F Concept
                  </a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-4')}:{' '}
                  <a
                    href="https://www.amazon.com/Circular-Polarizers-Filter-Concept-Polarizer/dp/B07NYV29M4/ref=sr_1_1_sspa?dchild=1&keywords=polarizer%2B70mm&qid=1627326999&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNlJONUNDT0I4Q0RHJmVuY3J5cHRlZElkPUEwMjc1MDM4MlNFNllQMzZCRkNCTSZlbmNyeXB0ZWRBZElkPUEwNzU0NTQyMlROVEhHR1FZTzNLTyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1"
                    target="_blank"
                    rel="noopener"
                    className="underline white small-font"
                  >
                    K&F Polarizer
                  </a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-10')}:{' '}
                  <a
                    href="https://www.amazon.com/ColorChecker-Passport-Photo-2-MSCCPP-B/dp/B07PNCPZ8G/ref=sr_1_3?dchild=1&keywords=color+checker&qid=1627327592&sr=8-3"
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
                    href="https://www.amazon.com/Acer-AN515-55-53E5-i5-10300H-GeForce-Keyboard/dp/B092YHJGMN/ref=sr_1_1?dchild=1&keywords=acer%2Bnitro%2B5%2Brtx&qid=1627327394&sr=8-1&th=1"
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
                    href="https://www.amazon.com/AMD-Ryzen-5900X-24-Thread-Processor/dp/B08164VTWH/ref=sr_1_6?dchild=1&keywords=amd+ryzen&qid=1627327859&sr=8-6"
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
                    href="https://www.amazon.com/ZOTAC-GeForce-192-bit-Graphics-ZT-T16600K-10M/dp/B07XV7FNR2/ref=sr_1_3?crid=16QF0EKBQYG1X&dchild=1&keywords=nvidia+1660&qid=1627327999&sprefix=nvidia+166%2Caps%2C301&sr=8-3"
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
                    href="https://www.amazon.com/ASUS-TUF-X570-Plus-Motherboard-Lighting/dp/B07SXF8GY3/ref=sr_1_10?crid=3KKOUEG7YH91B&dchild=1&keywords=motherboard&qid=1627328093&sprefix=moth%2Caps%2C316&sr=8-10"
                    target="_blank"
                    rel="noopener"
                    className="underline white small-font"
                  >
                    ASUS AM4 TUF Gaming X570
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
                <a href={texture.png2k} rel="noopener">
                  PNG 2K ({texture.png2ksize})
                </a>
              </li>
              <li className="small-font underline">
                <a href={texture.png4k} rel="noopener">
                  PNG 4K ({texture.png4ksize})
                </a>
              </li>
              <li className="small-font underline">
                <a href={texture.png8k} rel="noopener">
                  PNG 8K ({texture.png8ksize})
                </a>
              </li>
            </ul>
            <ul>
              <li className="small-font underline">
                <a href={texture.jpg2k} rel="noopener">
                  Jpg 2K ({texture.jpg2ksize})
                </a>
              </li>
              <li className="small-font underline">
                <a rel="noopener" href={texture.jpg4k}>
                  Jpg 4K ({texture.jpg4ksize})
                </a>
              </li>
              <li className="small-font underline">
                <a href={texture.jpg8k} rel="noopener">
                  Jpg 8K ({texture.jpg8ksize})
                </a>
              </li>
            </ul>
          </div>
          <h2 className="btn-font highlight">Share it</h2>
          <div className="social-share-cnt">
            <FacebookShareButton
              url={`https://www.textures.vercel.app/textures/${texture.slug}`}
            >
              <FacebookIcon size={42} round="true" />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://www.textures.vercel.app/textures/${texture.slug}`}
            >
              <TwitterIcon size={42} round="true" />
            </TwitterShareButton>
            <PinterestShareButton
              media={texture.mainImage}
              url={`https://www.textures.vercel.app/textures/${texture.slug}`}
            >
              <PinterestIcon size={42} round="true" />
            </PinterestShareButton>
            <WhatsappShareButton
              url={`https://www.textures.vercel.app/textures/${texture.slug}`}
            >
              <WhatsappIcon size={42} round="true" />
            </WhatsappShareButton>
            <TelegramShareButton
              url={`https://www.textures.vercel.app/textures/${texture.slug}`}
            >
              <TelegramIcon size={42} round="true" />
            </TelegramShareButton>
            <RedditShareButton
              url={`https://www.textures.vercel.app/textures/${texture.slug}`}
            >
              <RedditIcon size={42} round="true" />
            </RedditShareButton>
          </div>
          <section className="texture-accordion-cnt">
            <div
              className="texture-accordion-title"
              onClick={() => setIsActive(!isActive)}
            >
              <h3 className="small-font highlight">More Info</h3>
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
                  {texture.title} is a free texture {''}
                </strong>{' '}
                from the {texture.category[0].title} category, with a maximum
                resolution of 8K. This texture has beeen took in{' '}
                {texture.location} with the Sony A7II, a full frame camera with
                the best conditions possible, using low ISO with the help of a
                tripod, granting sharp and clear maps. The real world dimensions
                of this textures are {texture.scale} and can be used with any
                render engine, from <strong>Blender, Maya, Cinema 4D</strong>{' '}
                {''}
                to
                <strong> Unreal Engine or Unity</strong>.
              </p>
            </div>
          </section>
        </div>
      </main>
      <h2 className="medium-font h2-suggest">
        {t('single-texture:see-also-title')}
      </h2>
      <section className="texture-suggest">
        {textures.map((texture) => (
          <Link key={texture.id} href={`/textures/${texture.slug}`}>
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
    take: 4,
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
