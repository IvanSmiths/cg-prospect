import Link from 'next/link';

const SponsorTexture = () => {
  return (
    <main className="terms-privacy">
      <h1 className="big-font">Sponsor on page texture</h1>
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
            <a href="https://www.patreon.com/" className="italic">
              Cahoot
            </a>{' '}
            (Patreon) at least at 10$ tear. Your name and link will be there{' '}
            <strong className="highlight">FOREVER</strong>, even if you stop
            donating.
          </li>
          <li className="small-font">
            Once you're in, choose the texture (it must be free from any other
            sponsor) that you want your name, logo and link in (can be a link to
            your Instagram, ArtStation, website or others) and contact me.
            Alternatively, the sponsor will be put in the texture wich have more
            traffic at the moment of donation.
          </li>
          <li className="small-font">
            The image should be 550px width and 250px height, and be as
            lightweight as possible, ideally less than 500kb. Otherwise the
            image will be compressed.
          </li>
          <li className="small-font">
            If you want more info about the traffic of the website or per single
            texture, just{' '}
            <Link href="/contact">
              <a className="italic"> get in contact.</a>
            </Link>
          </li>
        </ul>
        <h2 className="medium-font">Egida reserves the right to:</h2>
        <ul className="list-term">
          <li className="small-font">
            Refuse to put the sponsor, or completely remove it once putted (if
            the sponsored content has changed), if the content is promoting in
            any sort of way: violence, racism or hate speech.
          </li>
        </ul>
        <h2 className="medium-font">Want your logo on the homepage?</h2>
        <ul className="list-term">
          <li className="small-font">
            <Link href="/contact">
              <a className="italic">Get in touch</a>
            </Link>{' '}
            for having more info about it.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default SponsorTexture;
