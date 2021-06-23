import data from '../lib/data.json';
import CC0 from '../components/Homepage-cc0';
import Header from '../components/Homepage-header';
import Stats from '../components/Homepage-stats';
import Showcase from '../components/Homepage-showcase';
import Myself from '../components/Homepage-myself';
import Patreon from '../components/Homepage-patreon';
import Models from '../components/Homepage-3dmodel';
import Head from 'next/head';
import Video from '../components/Homepage-video';
import VerticalCarousel from '../components/Homepage-verticalCarousel';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  let { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('home:head-title')}</title>
        <meta name="description" content={`${t('home:head-desc')}`} />
        <meta name="yandex-verification" content="ede26dd5b6d6e4e8" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CG Prospect" key="twhandle" />
        <meta property="og:title" content={`${t('home:head-og-title')}`} />
        <meta property="og:description" content={`${t('home:head-og-desc')}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cgprospect.vercel.app/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/deino2cjx/image/upload/v1617272982/nextjs_media/untitled_xq9mjb.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
      </Head>
      <Header />
      <Stats />
      <Patreon />
      <Video />
      <Showcase />
      <Models />
      <CC0 />
      <VerticalCarousel data={data.slides} leadingText={data.leadingText} />
      <Myself />
    </>
  );
}
