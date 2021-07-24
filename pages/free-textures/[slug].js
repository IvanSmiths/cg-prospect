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
  console.log(texture);
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
              <strong className="small-font highlight">
                {t('single-texture:sponsor-title')} <br />
              </strong>
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
                height="250"
                src={texture.sponsorImage}
                alt={`A sponsor image of ${texture.sponsorName}`}
              />
            </a>
            <h3 className="small-font sponsor-texture">
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
            </h3>
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
              <strong className="highlight-patreon underline">
                {t('single-texture:title2')}
              </strong>
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
                  <strong className="small-font-sub">
                    {' '}
                    {t('single-texture:categories')}{' '}
                  </strong>
                  {texture.category.map((category) => (
                    <Link
                      key={category.id}
                      href={`/categories/${category.slug}`}
                    >
                      <a className="highlight-bck">{category.title} </a>
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
                  <strong className="small-font-sub">
                    {' '}
                    {t('single-texture:method')}
                  </strong>{' '}
                  <Link
                    key={texture.method[0].id}
                    href={`/methods/${texture.method[0].slug}`}
                  >
                    <a className="highlight-bck">{texture.method[0].title} </a>
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
                  <strong className="small-font-sub">
                    {' '}
                    {t('single-texture:scale')}
                  </strong>{' '}
                  {texture.scale} {t('single-texture:meters')}.
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
                  <strong className="small-font-sub">
                    {' '}
                    {t('single-texture:location')}{' '}
                  </strong>{' '}
                  {texture.location}.
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
                  <strong className="small-font-sub">
                    {' '}
                    {t('single-texture:published')}{' '}
                  </strong>
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
                  <a className="underline white small-font">Canon 60D.</a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-2')}:{' '}
                  <a className="underline white small-font">Canon 55mm.</a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-3')}:{' '}
                  <a className="underline white small-font">Manfrotto</a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-4')}:{' '}
                  <a className="underline white small-font">Honda</a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-5')}:{' '}
                  <a className="underline white small-font">Pro Studio</a>
                </li>
              </ul>
              <ul className="gear-list">
                <li className="small-font-sub">
                  {t('single-texture:gear-6')}:{' '}
                  <a className="underline white small-font">AMD</a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-7')}:{' '}
                  <a className="underline white small-font">Pro</a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-8')}:{' '}
                  <a className="underline white small-font">Green</a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-9')}:{' '}
                  <a className="underline white small-font">Nvidia GTX 1080.</a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-10')}:{' '}
                  <a className="underline white small-font">AMD Ryzen 3030.</a>
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
