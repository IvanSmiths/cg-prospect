import Link from 'next/link';
import Head from 'next/head';

const Brand = () => {
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
        <h1 className="big-font">CG Prospect's brand</h1>
        <section className="cnt-terms cnt-t-p">
          <h2 className="medium-font">
            If you want to put the CG Prospect logo on a project, please follow
            this guide:
          </h2>
          <ul className="list-term">
            <li className="small-font">Do not modify the logo in any way.</li>
            <li className="small-font">
              If the logo is lacking of contrast, make sure to download the
              right one (you can find them in black or white).
            </li>
          </ul>
          <a className="btn" href="/cgprospect-logo.rar">
            Download here
          </a>
        </section>
      </main>
    </>
  );
};

export default Brand;
