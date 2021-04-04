import Link from 'next/link';

const SponsorHome = () => {
  return (
    <main className="terms-privacy">
      <h1 className="big-font">Sponsor on Homepage</h1>
      <section className="cnt-terms cnt-t-p">
        <h2 className="medium-font">Summary:</h2>
        <ul className="list-term">
          <li className="small-font">
            The price is a fixed monthly fee. For more info,{' '}
            <Link href="/contact">
              <a className="highlight italic">get in contact.</a>
            </Link>
          </li>
          <li className="small-font">
            Your logo will be put in the homepage, and the footer of{' '}
            <strong className="highlight">EVERY</strong> page of the website.
          </li>
          <li className="small-font">
            The logo should be around 500px height and 150px width.
          </li>
          <li className="small-font">
            If you want more info about the traffic of the website just{' '}
            <Link href="/contact">
              <a className="italic highlight"> get in touch.</a>
            </Link>
          </li>
        </ul>
        <h2 className="medium-font highlight-main">
          Want your name and link on a texture page?
        </h2>
        <ul className="list-term">
          <li className="small-font">
            <Link href="/sponsor-texture">
              <a className="italic highlight">See how here.</a>
            </Link>{' '}
          </li>
        </ul>
      </section>
    </main>
  );
};

export default SponsorHome;
