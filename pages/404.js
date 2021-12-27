import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>CG Prospect | Default cube section.</title>
        <meta
          name="description"
          content="Yo! This page is now in the default cube's bin."
        />
      </Head>
      <main className="notfound-cnt">
        <h1 className="big-font">
          The thing that you was searching for, is now in the default cube's
          bin.
        </h1>
        <Link href="/">
          <a className="btn">Go back to home</a>
        </Link>
      </main>
    </>
  );
}
