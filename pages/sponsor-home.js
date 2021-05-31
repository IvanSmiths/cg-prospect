import Link from 'next/link';

const SponsorHome = () => {
  return (
    <main className="terms-privacy">
      <h1 className="big-font">Sponsor on every pages</h1>
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
            <strong className="highlight">EVERY</strong> page and email in the
            footer.
          </li>
          <li className="small-font">
            The logo should be around 500px height and 150px width.
          </li>
          <li className="small-font">
            If you want more info about the traffic of the website and the
            newsletter just{' '}
            <Link href="/contact">
              <a className="underline highlight"> get in touch.</a>
            </Link>
          </li>
        </ul>
        <h2 className="medium-font highlight-main">
          Want your name and link on a texture page?
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
  );
};

export default SponsorHome;
