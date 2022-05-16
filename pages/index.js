import data from "../lib/data.json";
import CC0 from "../components/Homepage-cc0";
import Header from "../components/Homepage-header";
import Stats from "../components/Homepage-stats";
import Showcase from "../components/Homepage-showcase";
import Myself from "../components/Homepage-myself";
import Patreon from "../components/Homepage-patreon";
import Models from "../components/Homepage-3dmodel";
import Head from "next/head";
import Video from "../components/Homepage-video";
import VerticalCarousel from "../components/Homepage-verticalCarousel";
import useTranslation from "next-translate/useTranslation";
import Merch from "../components/Homepage-merch";
import { useRouter } from "next/router";

export default function Home() {
  let { t } = useTranslation();
  let router = useRouter();
  const schemaData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "CG Prospect",
    url: "https://www.cgprospect.com",
    image: "https://www.cgprospect.com/main-texture.jpg",
    description: `${t("home:head-desc")}`,
    brand: {
      "@type": "Brand",
      logo: "https://www.cgprospect.com/logo-icon-white.svg",
    },
    sameAs: "https://www.cgprospect.com",
    author: {
      "@type": "Person",
      name: "Ivan",
      familyName: "Smiths",
      url: "https://www.ivansmiths.com",
    },
    inLanguage: `${router.locale}`,
  };

  return (
    <>
      <Head>
        <title>{t("home:head-title")}</title>
        <meta name="description" content={`${t("home:head-desc")}`} />
        <meta name="msvalidate.01" content="BDB55CCC263678714F8D543BAAFF6FAC" />
        <meta
          name="facebook-domain-verification"
          content="a2q750leq99b25u1f9zkjqrszu8t5t"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <meta name="yandex-verification" content="ede26dd5b6d6e4e8" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="CG Prospect" key="twhandle" />
        <meta property="og:title" content={`${t("home:head-og-title")}`} />
        <meta property="og:description" content={`${t("home:head-og-desc")}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cgprospect.com/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/deino2cjx/image/upload/v1627848204/nextjs_media/apple-icon-152x152_gbwieu.png"
        />
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
