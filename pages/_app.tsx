import { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import useTranslation from 'next-translate/useTranslation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Advertising from '../components/Advertising';
import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  let { t } = useTranslation();
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="CG Prospect" />
        <meta content="#ffda38" name="theme-color" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="apple-mobile-web-app-title" content="CG Prospect" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta
          name="p:domain_verify"
          content="fbf05c0e98334a043794496750861ac3"
        />
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <meta name="msapplication-TileColor" content="#ffda38" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-navbutton-color" content="#ffda38" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <div className="social-mobile-cnt">
        <a
          target="_blank"
          rel="noopener"
          href="https://www.instagram.com/cgprospect/"
        >
          <span className="hashtag">#cgprospect</span>
        </a>
      </div>
      <Advertising />
      <CookieConsent
        buttonClasses="btn-cookie"
        style={{
          background: '#08070cd1',
        }}
        buttonText={`${t('common:cookie-btn')}`}
      >
        {t('common:cookie')}
        <Link href="/terms">
          <a className="italic underline">privacy policy</a>
        </Link>
      </CookieConsent>
      <Footer />
    </>
  );
}

export default MyApp;
