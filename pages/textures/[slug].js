import prisma from '../../lib/prisma';
import Link from 'next/link';
import Head from 'next/head';

export default function SingleTexture({ texture }) {
  console.log(texture);
  return (
    <>
      <Head>
        <title>{texture.title}, free 8K pbr textures.</title>
        <meta
          name="description"
          content={`${texture.title} is a seamless, free to download, up to native 8K Pbr
        Texture. Consider joining the Cahoot for exclusive content!`}
        />
      </Head>
      <main className="container-single-texture">
        <div className="container-texture-image">
          <img
            loading="lazy"
            height="500"
            width="500"
            className="single-main-image"
            src={texture.mainImage}
            alt={`The main preview of the Texture ${texture.title}`}
          />
          {/* <div className="ad">
          <img src="/ads3.jpg" alt="" />
        </div> */}
        </div>
        <div className="container-texture-details" key={texture.id}>
          <h1 className="big-font title-texture">{texture.title}</h1>
          <p className="small-font">
            {texture.title} is a seamless, free to download, up to <br /> native
            8K Pbr Texture.{' '}
            <strong className="highlight-patreon">
              Consider joining the Cahoot <br /> for exclusive content!{' '}
            </strong>
            <a
              href="https://www.patreon.com"
              className="italic"
              rel="noopener"
              target="_blank"
            >
              See more.
            </a>
          </p>
          <div className="first-details container-background">
            <div>
              <ul className="list-detail">
                <li className="small-font">
                  <img
                    loading="lazy"
                    className="ico-list"
                    src="/category.svg"
                    alt="Icon of a the category list"
                    height="23"
                    width="23"
                  />
                  <span className="small-font-sub"> Categories: </span>
                  <Link
                    href={`/categories/[texture.category.slug]`}
                    as={`/categories/${texture.category.slug}`}
                  >
                    <a>{texture.category.title}</a>
                  </Link>
                  {/* {texture.category.map((category) => (
                    <Link
                      key={category.id}
                      href={`/categories/${category.slug}`}
                    >
                      <a className="highlight-bck">{category.title} </a>
                    </Link>
                  ))} */}
                </li>
                <li className="small-font">
                  <img
                    loading="lazy"
                    className="ico-list"
                    src="/method.svg"
                    alt="Icon of a the method list"
                    height="23"
                    width="23"
                  />
                  <span className="small-font-sub"> Method:</span>{' '}
                  {/* {methods.map((method) => (
                    <Link key={method._id} href={`/methods/${method.slug}`}>
                      <a className="highlight-bck">{method.title}</a>
                    </Link>
                  ))} */}
                </li>
                <li className="small-font">
                  <img
                    loading="lazy"
                    className="ico-list"
                    src="/scale.svg"
                    alt="Icon of a the scale list"
                    height="23"
                    width="23"
                  />
                  <span className="small-font-sub"> Scale:</span>{' '}
                  {texture.scale} meters.
                </li>
                <li className="small-font">
                  <img
                    loading="lazy"
                    className="ico-list"
                    src="/location.svg"
                    alt="Icon of a the location list"
                    height="23"
                    width="23"
                  />
                  <span className="small-font-sub"> Location: </span>{' '}
                  {texture.location}.
                </li>
                <li className="small-font">
                  <img
                    loading="lazy"
                    className="ico-list"
                    src="/published.svg"
                    alt="Icon of a the date of publish list"
                    height="23"
                    width="23"
                  />
                  {/* <span className="small-font-sub"> Published: </span>{' '}
                  {publishedAt} */}
                </li>
              </ul>
            </div>
          </div>
          <h2 className="btn-font highlight">Gear used for this texture:</h2>
          <div className="first-details">
            <div className="container-gear">
              <ul className="gear-list">
                <li className="small-font">
                  <span className="small-font-sub"> Camera:</span> Canon 60D.
                </li>
                <li className="small-font">
                  <span className="small-font-sub">Lens: </span> Canon 55mm.
                </li>
                <li className="small-font">
                  <span className="small-font-sub">Tripod: </span> Manfrotto
                  Canon 5mm.
                </li>
                <li className="small-font">
                  <span className="small-font-sub">Polarizer: </span> Honda
                  6PLS.
                </li>
              </ul>
              <ul className="gear-list">
                <li className="small-font">
                  <span className="small-font-sub"> White Balance:</span> Pro
                  Col 30.
                </li>
                <li className="small-font">
                  <span className="small-font-sub">GPU: </span> Nvidia GTX 1080.
                </li>
                <li className="small-font">
                  <span className="small-font-sub">CPU: </span> AMD Ryzen 3030.
                </li>
                <li className="small-font">
                  <span className="small-font-sub">Motherboard: </span> AMD
                  3000D.
                </li>
              </ul>
            </div>
          </div>
          <div className="donate-btn">
            <h2 className="small-font">Donate if you want, or grab it free.</h2>
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
          </div>
          <h2 className="btn-font highlight">Resolution & Format:</h2>
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
          <div>
            <h3 className="small-font sponsor-texture">
              <strong className="small-font highlight">
                Sponsored By: <br />
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
                width="550"
                height="250"
                src={texture.sponsorImage}
                alt={`A sponsor image of ${texture.sponsorName}`}
              />
            </a>
            <h3 className="small-font sponsor-texture">
              Want your name, logo, and link here? {''}
              <Link href="/sponsor-texture">
                <a>
                  <span className="highlight italic">See how you can.</span>
                </a>
              </Link>
            </h3>
          </div>
          {/* <div className="social-share-cnt">
          <FacebookShareButton
            url={`https://www.textures.vercel.app/textures/${slug}`}
          >
            <FacebookIcon size={42} round="true" />
          </FacebookShareButton>
          <TwitterShareButton
            url={`https://www.textures.vercel.app/textures/${slug}`}
          >
            <TwitterIcon size={42} round="true" />
          </TwitterShareButton>
          <PinterestShareButton
            media={mainImage.asset.url}
            url={`https://www.textures.vercel.app/textures/${slug}`}
          >
            <PinterestIcon size={42} round="true" />
          </PinterestShareButton>
          <WhatsappShareButton
            url={`https://www.textures.vercel.app/textures/${slug}`}
          >
            <WhatsappIcon size={42} round="true" />
          </WhatsappShareButton>
          <TelegramShareButton
            url={`https://www.textures.vercel.app/textures/${slug}`}
          >
            <TelegramIcon size={42} round="true" />
          </TelegramShareButton>
          <RedditShareButton
            url={`https://www.textures.vercel.app/textures/${slug}`}
          >
            <RedditIcon size={42} round="true" />
          </RedditShareButton>
        </div> */}
          {/* <h3 className="small-font tags">Tags: {tags}</h3> */}
        </div>
      </main>
      <h2 className="medium-font h2-suggest">See also:</h2>
      {/* <section className="texture-suggest">
        {textures.map((texture) => (
          <Link key={texture._id} href={`/textures/${texture.slug}`}>
            <a>
              <img
                loading="lazy"
                width="230"
                height="230"
                className="textures-list"
                src={texture.mainImage.asset.url}
                alt={`A preview of the texture ${texture.title}`}
              />
            </a>
          </Link>
        ))}
      </section> */}
    </>
  );
}

export async function getStaticProps({ params }) {
  const texture = await prisma.texture.findFirst({
    include: { category: true },
    where: {
      slug: String(params.slug),
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
        slug: texture.slug.toString(),
      },
    })),
    fallback: false,
  };
}
