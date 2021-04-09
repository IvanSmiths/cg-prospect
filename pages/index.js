import CC0 from '../components/Homepage-cc0';
import Header from '../components/Homepage-header';
import Stats from '../components/Homepage-stats';
import Showcase from '../components/Homepage-showcase';
import Myself from '../components/Homepage-myself';
import Patreon from '../components/Homepage-patreon';
import Head from 'next/head';
import Video from '../components/Homepage-video';

export default function Home() {
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
        <meta property="og:image:type" content="image/jpeg" />
      </Head>

      <div className="under-development">
        <p className="big-font">
          THIS WEBSITE IS IN DEVELOPMENT <br />{' '}
          <span className="small-font">
            is about 3D, textures and cool stuff.
          </span>
        </p>
      </div>

      <Header />
      <Stats />
      <Patreon />
      <Video />
      <Showcase />
      <CC0 />
      <Myself />
    </>
  );
}
