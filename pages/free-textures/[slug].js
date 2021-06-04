import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
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
  return (
    <>
      <Head>
        <title>CG Prospect | {texture.title}, free 8K texture.</title>
        <meta
          name="description"
          content={`${texture.title} is a seamless, free to download, up to native 8K Pbr
        Texture. Use it withBlende, Unreal Engine, or other 3d softwares!`}
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CGProspect" key="twhandle" />
        <meta
          property="og:title"
          content={`CGProspect | ${texture.title}, 8K Free Texture`}
        />
        <meta
          property="og:description"
          content={`${texture.title} is a free texture of CGProspect.`}
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
            <img
              loading="lazy"
              height="500"
              width="500"
              className="single-main-image"
              src={texture.mainImage}
              alt={`The main preview of the Texture ${texture.title}`}
            />
          </div>
          <div>
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
                  <span className="highlight underline">
                    {' '}
                    {t('single-texture:sponsor-desc2')}
                  </span>
                </a>
              </Link>
            </h3>
          </div>
        </div>
        <div className="container-texture-details" key={texture.id}>
          <h1 className="big-font title-texture">{texture.title}</h1>
          <p className="small-font p-slug">
            {texture.title} {t('single-texture:title')}
            <a
              href="https://www.patreon.com"
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
                    height="23"
                    width="23"
                  />
                  <span className="small-font-sub">
                    {' '}
                    {t('single-texture:categories')}{' '}
                  </span>
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
                    height="23"
                    width="23"
                  />
                  <span className="small-font-sub">
                    {' '}
                    {t('single-texture:method')}
                  </span>{' '}
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
                    height="23"
                    width="23"
                  />
                  <span className="small-font-sub">
                    {' '}
                    {t('single-texture:scale')}
                  </span>{' '}
                  {texture.scale} meters.
                </li>
                <li className="small-font">
                  <img
                    loading="lazy"
                    className="ico-list-single"
                    src="/location-texture.svg"
                    alt="Icon of the location"
                    height="23"
                    width="23"
                  />
                  <span className="small-font-sub">
                    {' '}
                    {t('single-texture:location')}{' '}
                  </span>{' '}
                  {texture.location}.
                </li>
                <li className="small-font">
                  <img
                    loading="lazy"
                    className="ico-list-single"
                    src="/date-texture.svg"
                    alt="Icon of the date"
                    height="23"
                    width="23"
                  />
                  <span className="small-font-sub">
                    {' '}
                    {t('single-texture:published')}{' '}
                  </span>
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
                  {t('single-texture:gear-camera')}{' '}
                  <a className="underline small-font">Canon 60D.</a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-lens')}{' '}
                  <a className="underline small-font">Canon 55mm.</a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-tripod')}{' '}
                  <a className="underline small-font">Manfrotto</a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-polarizer')}{' '}
                  <a className="underline small-font">Honda</a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-lights')}{' '}
                  <a className="underline small-font">Pro Studio</a>
                </li>
              </ul>
              <ul className="gear-list">
                <li className="small-font-sub">
                  {t('single-texture:gear-checker')}{' '}
                  <a className="underline small-font">AMD</a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-laptop')}{' '}
                  <a className="underline small-font">Pro</a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-gpu')}{' '}
                  <a className="underline small-font">Green</a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-cpu')}{' '}
                  <a className="underline small-font">Nvidia GTX 1080.</a>
                </li>
                <li className="small-font-sub">
                  {t('single-texture:gear-mobo')}{' '}
                  <a className="underline small-font">AMD Ryzen 3030.</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="donate-btn">
            <h2 className="btn-font highlight">
              {t('single-texture:donate-title')}
            </h2>
            <div className="donate-buttons">
              <form
                action="https://www.paypal.com/donate"
                method="post"
                target="_top"
              >
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="BKVAF83PZ7GB2"
                />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                  border="0"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
              </form>
              <div>
                <a
                  className="donate-with-crypto crypto"
                  href="https://commerce.coinbase.com/checkout/a00d1c2c-6ee8-43d0-b814-d2d0c21e4ea2"
                >
                  Donate with Crypto
                </a>
                <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807"></script>
              </div>
            </div>
          </div>
          <h2 className="btn-font highlight">
            {t('single-texture:download-title')}
          </h2>
          <div className="container-links">
            <ul>
              <li className="small-font">
                <a href={texture.png2k} rel="noopener">
                  PNG 2K (approx. 200mb)
                </a>
              </li>
              <li className="small-font">
                <a href={texture.png4k} rel="noopener">
                  PNG 4K (approx. 800mb)
                </a>
              </li>
              <li className="small-font">
                <a href={texture.png8k} rel="noopener">
                  PNG 8K (approx. 1.2gb)
                </a>
              </li>
            </ul>
            <ul>
              <li className="small-font">
                <a href={texture.jpg2k} rel="noopener">
                  Jpg 2K (approx. 30mb)
                </a>
              </li>
              <li className="small-font">
                <a rel="noopener" href={texture.jpg4k}>
                  Jpg 4K (approx. 100mb)
                </a>
              </li>
              <li className="small-font">
                <a href={texture.jpg8k} rel="noopener">
                  Jpg 8K (approx. 500mb)
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
