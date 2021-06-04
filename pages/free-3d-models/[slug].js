import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';
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

export default function SingleTexture({ model, models }) {
  return (
    <>
      <Head>
        <title>{model.title}, free 8K pbr models.</title>
        <meta
          name="description"
          content={`${model.title} is a seamless, free to download, up to native 8K Pbr
        Texture. Consider joining the Cahoot for exclusive content!`}
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CgProspect" key="twhandle" />
        <meta
          property="og:title"
          content={`CgProspect | ${model.title}, Free 3d model`}
        />
        <meta
          property="og:description"
          content={`${model.title} is one of the multiple free models of CgProspect.`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://cgprospect.com/free-3d-models/${model.slug}`}
        />
        <meta property="og:image" content={model.mainImage} />
      </Head>
      <main className="container-single-texture">
        <div className="cnt-first-col">
          <div className="container-texture-image">
            <img
              loading="lazy"
              height="500"
              width="500"
              className="single-main-image"
              src={model.mainImage}
              alt={`The main preview of the model ${model.title}`}
            />
          </div>
          <div>
            <h3 className="small-font sponsor-texture">
              <strong className="small-font highlight">
                Sponsored By: <br />
              </strong>
              <a
                href={model.sponsorLink}
                className="medium-font underline highlight-main"
                target="_blank"
                rel="noopener"
              >
                {' '}
                {model.sponsorName}{' '}
              </a>{' '}
            </h3>
            <br />
            <a href={model.sponsorLink} target="_blank" rel="noopener">
              <img
                loading="lazy"
                className="sponsor-img"
                loading="lazy"
                width="550"
                height="250"
                src={model.sponsorImage}
                alt={`A sponsor image of ${model.sponsorName}`}
              />
            </a>
            <h3 className="small-font sponsor-texture">
              Want your name, logo, and link here? {''}
              <Link href="/sponsor-texture">
                <a>
                  <span className="highlight underline">See how you can.</span>
                </a>
              </Link>
            </h3>
          </div>
        </div>
        <div className="container-texture-details" key={model.id}>
          <h1 className="big-font title-texture">{model.title}</h1>
          <p className="small-font p-slug">
            {model.title} is a free to download 3d model, available at lowpoly,
            midpoly and highpoly resolutions.{' '}
            <a href="https://www.patreon.com" rel="noopener" target="_blank">
              <strong className="highlight-patreon underline">
                Consider joining the Cahoot for exclusive content!{' '}
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
                    alt="categories of the 3d model"
                    height="23"
                    width="23"
                  />
                  <span className="small-font-sub"> Categories: </span>
                  {model.modelCategory.map((category) => (
                    <Link
                      key={category.id}
                      href={`/categories-3d-model/${category.slug}`}
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
                    alt="methods of the 3d model"
                    height="23"
                    width="23"
                  />
                  <span className="small-font-sub"> Method:</span>{' '}
                  <Link
                    key={model.modelMethod[0].id}
                    href={`/methods-3d-model/${model.modelMethod[0].slug}`}
                  >
                    <a className="highlight-bck">
                      {model.modelMethod[0].title}{' '}
                    </a>
                  </Link>
                </li>
                <li className="small-font">
                  <img
                    loading="lazy"
                    className="ico-list-single"
                    src="/resolution-texture.svg"
                    alt="scale of the 3d model"
                    height="23"
                    width="23"
                  />
                  <span className="small-font-sub"> Scale:</span> {model.scale}{' '}
                  meters.
                </li>
                <li className="small-font">
                  <img
                    loading="lazy"
                    className="ico-list-single"
                    src="/location-texture.svg"
                    alt="location of the 3d model"
                    height="23"
                    width="23"
                  />
                  <span className="small-font-sub"> Location: </span>{' '}
                  {model.location}.
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
                  <span className="small-font-sub"> Published: </span>
                </li>
              </ul>
            </div>
          </div>
          <h2 className="btn-font highlight">Gear that i currently use:</h2>
          <div className="first-details">
            <div className="container-gear">
              <ul className="gear-list">
                <li className="small-font-sub">
                  Camera <a className="underline small-font">Canon 60D.</a>
                </li>
                <li className="small-font-sub">
                  Lens: <a className="underline small-font">Canon 55mm.</a>
                </li>
                <li className="small-font-sub">
                  Tripod: <a className="underline small-font">Manfrotto</a>
                </li>
                <li className="small-font-sub">
                  Polarizer: <a className="underline small-font">Honda</a>
                </li>
                <li className="small-font-sub">
                  Lights: <a className="underline small-font">Pro Studio</a>
                </li>
              </ul>
              <ul className="gear-list">
                <li className="small-font-sub">
                  White Balance <a className="underline small-font">Pro</a>
                </li>
                <li className="small-font-sub">
                  Green Screen: <a className="underline small-font">Green</a>
                </li>
                <li className="small-font-sub">
                  GPU: <a className="underline small-font">Nvidia GTX 1080.</a>
                </li>
                <li className="small-font-sub">
                  CPU: <a className="underline small-font">AMD Ryzen 3030.</a>
                </li>
                <li className="small-font-sub">
                  Motherboard: <a className="underline small-font">AMD</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="donate-btn">
            <h2 className="btn-font highlight">
              Donate if you want, or grab it free.
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
          <h2 className="btn-font highlight">Resolution & Format:</h2>
          <div className="container-links">
            <ul>
              <li className="small-font">
                <a href={model.lowlopy} rel="noopener">
                  Lowpoly (approx. 80mb)
                </a>
              </li>
              <li className="small-font">
                <a href={model.midlopy} rel="noopener">
                  Midpoly (approx. 300mb)
                </a>
              </li>
            </ul>
            <ul>
              <li className="small-font">
                <a href={model.highlopy} rel="noopener">
                  Highpoly (approx. 500mb)
                </a>
              </li>
            </ul>
          </div>
          <div className="social-share-cnt">
            <FacebookShareButton
              url={`https://www.cgprospect.com/free-3d-models/${model.slug}`}
            >
              <FacebookIcon size={42} round="true" />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://www.cgprospect.com/free-3d-models/${model.slug}`}
            >
              <TwitterIcon size={42} round="true" />
            </TwitterShareButton>
            <PinterestShareButton
              media={model.mainImage}
              url={`https://www.cgprospect.com/free-3d-models/${model.slug}`}
            >
              <PinterestIcon size={42} round="true" />
            </PinterestShareButton>
            <WhatsappShareButton
              url={`https://www.cgprospect.com/free-3d-models/${model.slug}`}
            >
              <WhatsappIcon size={42} round="true" />
            </WhatsappShareButton>
            <TelegramShareButton
              url={`https://www.cgprospect.com/free-3d-models/${model.slug}`}
            >
              <TelegramIcon size={42} round="true" />
            </TelegramShareButton>
            <RedditShareButton
              url={`https://www.cgprospect.com/free-3d-models/${model.slug}`}
            >
              <RedditIcon size={42} round="true" />
            </RedditShareButton>
          </div>
        </div>
      </main>
      <h2 className="medium-font h2-suggest">See also:</h2>
      <section className="texture-suggest">
        {models.map((model) => (
          <Link key={model.id} href={`/free-3d-models/${model.slug}`}>
            <a>
              <img
                loading="lazy"
                width="230"
                height="230"
                className="textures-list"
                src={model.mainImage}
                alt={`A preview of the texture ${model.title}`}
              />
            </a>
          </Link>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps({ params }) {
  const model = await prisma.model3d.findFirst({
    include: { modelCategory: true, modelMethod: true },
    where: {
      slug: String(params.slug),
    },
  });

  const models = await prisma.model3d.findMany({
    include: { modelCategory: true },
    orderBy: {
      id: 'desc',
    },
    take: 4,
  });

  return {
    props: {
      model,
      models,
    },
  };
}

export async function getStaticPaths() {
  const models = await prisma.model3d.findMany();

  return {
    paths: models.map((model) => ({
      params: {
        slug: model.slug.toString(),
      },
    })),
    fallback: false,
  };
}
