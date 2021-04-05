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

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
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
    </>
  );
}

export default MyApp;
