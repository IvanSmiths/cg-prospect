import Link from 'next/link';
import Head from 'next/head';

const SponsorHome = () => {
  return (
    <>
      <Head>
        <title>CG Prospect | Put your logo on every page</title>
        <meta
          name="description"
          content="Get your logo in all the pages of the website. Get a massive boost of new potential customers/users!"
        />
      </Head>
      <main className="terms-privacy">
        <h1 className="big-font">Sponsor on every page</h1>
        <section className="cnt-terms cnt-t-p">
          <h2 className="medium-font">Summary:</h2>
          <ul className="list-term">
            <li className="small-font">
              The price is a fixed monthly fee. For more info,{' '}
              <Link href="/contact">
                <a className="highlight underline">get in contact.</a>
              </Link>
            </li>
            <li className="small-font">
              Your logo will be put in{' '}
              <strong className="highlight">EVERY</strong> page and in every
              email in the footer.
            </li>
            <li className="small-font">
              The logo should be as lightweight as possible.
            </li>
            <li className="small-font">
              If you want more info about the traffic of the website and the
              contacts of the newsletter just{' '}
              <Link href="/contact">
                <a className="underline highlight"> get in touch.</a>
              </Link>
            </li>
          </ul>
          <h2 className="medium-font highlight-main">
            Want your name and link on a texture/3d model page?
          </h2>
          <ul className="list-term">
            <li className="small-font">
              <Link href="/sponsor-texture">
                <a className="underline highlight">See how here.</a>
              </Link>{' '}
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default SponsorHome;
