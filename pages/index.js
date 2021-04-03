import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ProgressBar from '../components/ProgressBar';
import CC0 from '../components/Homepage-cc0';

export default function Home() {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 1);
  }, []);
  return (
    <>
      <Head>
        <title>Free 8K textures</title>
        <meta
          name="description"
          content="Egida is one of multiple categories of free to download, up to native 8K Pbr
          Texture. Consider joining the Cahoot for exclusive content!"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="Egida" key="twhandle" />
        <meta property="og:title" content="Egida, Free PBR Textures" />
        <meta
          property="og:description"
          content="Free 8K Textures, to put in your projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://postgres.pages.dev/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/deino2cjx/image/upload/v1617272982/nextjs_media/untitled_xq9mjb.jpg"
        />
      </Head>

      <div className="under-development">
        <p className="big-font">
          THIS WEBSITE IS IN DEVELOPMENT <br />{' '}
          <span className="small-font">
            is about 3D, textures and cool stuff.
          </span>
        </p>
      </div>

      <main className="container-mainpage">
        <div className="container-ico">
          <a href="https://www.youtube.com/" target="_blank" rel="noopener">
            <img
              loading="lazy"
              src="/ico_youtube.svg"
              width="22"
              height="22"
              alt="Icon of YouTube"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener">
            <img
              loading="lazy"
              src="/ico_instagram.svg"
              width="22"
              height="22"
              alt="Icon of Instagram"
            />
          </a>
          <a href="https://www.artstation.com/" target="_blank" rel="noopener">
            <img
              loading="lazy"
              src="/ico_artstation.svg"
              width="22"
              height="22"
              alt="Icon of ArtStation"
            />
          </a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noopener">
            <img
              loading="lazy"
              src="/ico_pinterest.svg"
              width="22"
              height="22"
              alt="Icon of Pinterest"
            />
          </a>
          <a href="https://www.patreon.com/" target="_blank" rel="noopener">
            <img
              loading="lazy"
              src="/ico_patreon.svg"
              width="22"
              height="22"
              alt="Icon of Patreon"
            />
          </a>
        </div>
        <div>
          <h1 className="large-font">
            Free 8K Textures <br /> Grab them free.
          </h1>
          <h2 className="small-font">
            Up to 8K Native PBR Textures, to put in your 3D projects. <br /> No
            limits, no paywall,{' '}
            <a href="https://www.patreon.com/" target="_blank" rel="noopener">
              <strong className="highlight-patreon">
                donate if you like to.
              </strong>
            </a>
          </h2>
          <Link href="/textures">
            <a>
              <button className="btn main-btn">Browse Textures</button>
            </a>
          </Link>
        </div>
        <div>
          <img
            loading="lazy"
            className="main-image"
            src="/main-image.png"
            height="512"
            width="512"
            alt="An image of a texture"
          />
        </div>
      </main>
      <section className="stats">
        <div className="container-cards">
          <div className="card">
            <img
              loading="lazy"
              src="/maps.svg"
              height="60"
              width="60"
              alt="An icon showing maps"
            />
            <h2 className="btn-font highlight">All the maps that you need!</h2>
            <p className="small-font">
              Up to 8K, the maps from Egida are <br /> achieved wth AI seam
              removal, AI <br />
              delighter, and much more advanced <br /> technics of baking.
            </p>
          </div>
          <div className="card card-patreon">
            <img
              loading="lazy"
              src="/hand.svg"
              height="60"
              width="60"
              alt="An icon showing a hand"
            />
            <h2 className="btn-font highlight">Supported by you.</h2>
            <p className="small-font">
              Egida runs thanks to the Patreons,
              <br /> by donations on the <br />
              download, and by advertising on the <br /> Website.
            </p>
          </div>
          <div className="card">
            <img
              loading="lazy"
              src="/cube.svg"
              height="60"
              width="60"
              alt="An icon showing a cube"
            />
            <h2 className="btn-font highlight">CCO License</h2>
            <p className="small-font">
              This means that you can also put these <br /> textures on your
              commercial <br /> projects, without paying or with any kind <br />
              of obbligation. See more about.
            </p>
          </div>
        </div>
        <h3 className="font-color-inverse stats-title big-font">
          New Textures Every Friday!
        </h3>
        <div className="container-numbers">
          <div className="numbers">
            <h4 className="medium-font font-color-inverse">
              15 <br />
              Textures
            </h4>
          </div>
          <div className="numbers">
            <h4 className="medium-font font-color-inverse">
              46 <br />
              Total maps
            </h4>
          </div>
          <div className="numbers">
            <h4 className="medium-font font-color-inverse">
              6 <br />
              Beautiful Patreons
            </h4>
          </div>
          <div className="numbers">
            <h4 className="medium-font font-color-inverse">
              23 <br />
              Gb of Passion
            </h4>
          </div>
        </div>
      </section>
      <section className="patreon">
        <div className="patreon-text">
          <h2 className="big-font patreon-h2">Join The Cahoot</h2>
          <p className="small-font">
            Joining the Patreon community, you'll get the textures before they
            are uploaded on Egida. Altrough, the quality and the resolution is
            exactly the same. There are{' '}
            <strong className="highlight-patreon">exclusive contents</strong> ,
            like textures, tutorials, alpha channels, behind the scene, and a
            beautiful community to talk with or ask for help, and more.
          </p>
        </div>
        <div>
          <ProgressBar />
        </div>
        <Link prefetch={false} href="https://www.patreon.com/">
          <a target="_blank" rel="noopener">
            <button className="btn patreon-clr">Get unique content</button>
          </a>
        </Link>
      </section>
      <section className="cnt-video">
        <video ref={videoRef} className="video" loop muted>
          <source src="/pbr-texture.mp4" type="video/mp4" />
        </video>
        <div className="text-video">
          <h2 className="big-font">
            8K Resolution of <strong className="highlight-main"> POWER </strong>
          </h2>
          <p className="btn-font highlight">
            Egida's textures are made with extreme cure. Free textures never
            looked so professional.
          </p>
          <Link href="/textures">
            <a>
              <button className="btn-line">Enhance your projects</button>
            </a>
          </Link>
        </div>
      </section>
      <section className="showcase">
        <div className="showcase-1 showcase-all">
          <div></div>
          <div>
            <h3 className="big-font">+70 Millions of poligons</h3>
            <p className="small-font">
              <strong className="highlight">Photogrammetry</strong> is one of
              the best techniques in order to create high quality textures. It
              can ensure sharp textures, especially with rocks, terrains, wood
              and other complex shapes. Egida's textures are baked with an
              extremely high poly mesh, granting professional usable textures.
            </p>
            <Link href="/methods/photogrammetry">
              <a>
                <button className="btn-line btn-showcase">
                  Photogrammetry Textures
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="showcase-2 showcase-all">
          <div>
            <h3 className="big-font">Raw photos with low ISO</h3>
            <p className="small-font">
              <strong className="highlight">Ai to Material</strong> is a new
              technique that can mimik the photogrammetry texture creation
              results. Thanks to this Artificial Intelligence, Egida is able to
              produce much more textures than it normally could, without
              compromising quality and professional standards.
            </p>
            <Link href="/methods/ai-to-material">
              <a>
                <button className="btn-line btn-showcase">
                  Ai to Material Textures
                </button>
              </a>
            </Link>
          </div>
          <div></div>
        </div>
        <div className="showcase-3 showcase-all">
          <div></div>
          <div>
            <h3 className="big-font">Extreme cure</h3>
            <p className="small-font">
              <strong className="highlight">Procedural</strong> texture cration
              is still one of the most creative and professional way to craete
              seamless PBR textures. Are natively exported in 8K, granting
              awesome textures to put in your projects!
            </p>
            <Link href="/methods/procedural">
              <a>
                <button className="btn-line btn-showcase">
                  Procedural Textures
                </button>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <CC0 />
      <section className="advertising">
        <hr className="line" />
        <h2 className=" big-font">Want Your Logo on Egida?</h2>
        <p className="small-font">
          Egida is opened to direct advertising. For more informations about the{' '}
          <br />
          traffic of the website and other, feel free to get in touch!
        </p>
        <Link href="/sponsor-home">
          <a>
            <button className="btn">Boost your website</button>
          </a>
        </Link>
        <hr className="line" />
      </section>
      <section className="myself">
        <div>
          <img
            className="image-myself"
            loading="lazy"
            src="/myself.jpg"
            height="350"
            width="380"
            alt="An image of myself"
          />
        </div>
        <div className="myself-text">
          <h2 className="big-font">Ivan Smiths here.</h2>
          <p className="small-font">
            I've built Egida on my own, from the br creation of the Textures, to
            the coding of the Web Site. 3D artist specialized in Photogrammetry
            and Web Developer, i've built this project for putting myself in
            game, and for sharing my things with other passionated people.
          </p>
        </div>
      </section>
    </>
  );
}
