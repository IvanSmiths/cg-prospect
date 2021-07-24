import { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import FacebookPixel from '../components/FacebookPixel';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/globals.css';
import Nav from '../components/Nav';
import Wip from '../components/WorkInProgress';
import Footer from '../components/Footer';
import Advertising from '../components/Advertising';
import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
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
    <FacebookPixel>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="CG Prospect" />
        <meta content="#fee648" name="theme-color" />
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
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <meta name="msapplication-TileColor" content="#fee648" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-navbutton-color" content="#fee648" />
      </Head>
      <Wip />
      <Nav />
      <Component {...pageProps} />
      <Advertising />
      <CookieConsent
        buttonClasses="btn-cookie"
        style={{
          background: '#08070cbc',
          display: 'flex',
          justifyContent: 'center',
        }}
        buttonText="Accept"
      >
        By continuing to browse CG Prospect, you agree to the use of cookies for
        advertising and audience measurement purposes. See more in the{' '}
        <Link href="/terms">
          <a className="italic">privacy policy.</a>
        </Link>
      </CookieConsent>
      <Footer />
    </FacebookPixel>
  );
}

export default MyApp;
