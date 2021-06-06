import Link from 'next/link';
import Head from 'next/head';

const SponsorTexture = () => {
  return (
    <>
      <Head>
        <title>CG Prospect | Put your logo on assets pages</title>
        <meta
          name="description"
          content="Get your logo in the textures & 3d models pages. Get a massive boost of new potential customers/users!"
        />
      </Head>
      <main className="terms-privacy">
        <h1 className="big-font">Sponsor on the assets pages</h1>
        <section className="cnt-terms cnt-t-p">
          <img
            loading="lazy"
            width="auto"
            height="auto"
            className="sponsor-example"
            src="/sponsor-texture.jpg"
            alt="Example image for the sponsor"
          />
          <h2 className="medium-font">Summary:</h2>
          <ul className="list-term">
            <li className="small-font">
              Enter the{' '}
              <a href="https://www.patreon.com/" className="italic highlight">
                Cahoot
              </a>{' '}
              (Patreon) at least at 10$ tear. Your name and link will be there{' '}
              <strong className="highlight">FOREVER</strong>, even if you stop
              donating.
            </li>
            <li className="small-font">
              Once you're in, contact CG Prospect directly on patreon, send your
              name that you want to be displayed, the link (can be a link to
              your Instagram, ArtStation, website or others) and the logo/render
              that you want. They will be put in the textur/3d model that have
              more traffic at the moment. If you desire to have your sponsor in
              a specific asset, just tell wich in the moment you're sending all
              the info.
            </li>
            <li className="small-font">
              The image should be 550px width and 250px height, and be as
              lightweight as possible, ideally less than 500kb. Otherwise the
              image will be compressed.
            </li>
            <li className="small-font">
              If you want more info about the traffic of the website, just{' '}
              <Link href="/contact">
                <a className="underline highlight"> get in contact.</a>
              </Link>
            </li>
          </ul>
          <h2 className="medium-font">CG Prospect reserves the right to:</h2>
          <ul className="list-term">
            <li className="small-font">
              Refuse to put the sponsor, or completely remove it once putted (if
              the sponsored content has changed), if the content is promoting in
              any sort of way: violence, racism or hate speech.
            </li>
          </ul>
          <h2 className="medium-font highlight-main">
            Want your logo in every page?
          </h2>
          <ul className="list-term">
            <li className="small-font">
              <Link href="/sponsor-home">
                <a className="underline highlight">See how.</a>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default SponsorTexture;
