const Terms = () => {
  return (
    <>
      <Head>
        <title>CG Prospect | Terms & Privacy</title>
        <meta
          name="description"
          content="Terms & Privacy page, get more infos about cookies"
        />
      </Head>
      <main className="terms-privacy">
        <h1 className="big-font">Terms & Privacy</h1>
        <section className="cnt-privacy cnt-t-p">
          <h2 className="medium-font">Privacy - Summary</h2>
          <ul className="list-term">
            <li className="small-font">
              CG Prospect uses third party services that sets cookies in order
              to analize the traffic of the website.
            </li>
          </ul>
          <h3 className="btn-font highlight">Cookie Policy</h3>
          <p className="small-font p-terms">
            By continuing to browse CG Prospect, you agree to the use of cookies
            for advertising and audience measurement purposes.
          </p>
        </section>
      </main>
    </>
  );
};

export default Terms;
