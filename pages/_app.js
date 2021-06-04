import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Advertising from '../components/Advertising';
import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';
import LanguageChange from '../components/LanguageChange';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <meta content="#fee648" name="theme-color" />
        <meta name="apple-mobile-web-app-title" content="CG Prospect" />
        <meta name="application-name" content="CG Prospect" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="msapplication-navbutton-color" content="#fee648" />
        <meta property="og:image:type" content="image/jpeg" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <LanguageChange />
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
    </>
  );
}

export default MyApp;
