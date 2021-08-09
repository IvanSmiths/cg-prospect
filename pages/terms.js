import Head from 'next/head';

const Terms = () => {
  return (
    <>
      <Head>
        <title>CG Prospect | Terms & Privacy</title>
        <meta
          name="description"
          content="Terms & Privacy page, get more infos about CG Prospect policies."
        />
      </Head>
      <main className="terms-privacy">
        <h1 className="big-font">Privacy Policy of CG Prospect</h1>
        <section className="cnt-privacy cnt-t-p">
          <h2 className="small-font">
            CG Prospect collects some Personal Data from its Users. <br />{' '}
          </h2>
          <h3 className="medium-font">Owner and Data Controller</h3>
          <h4 className="small-font">
            CG Prospect <br /> Owner contact email: info@cgprospect.com
          </h4>
          <h3 className="medium-font">Types of Data collected</h3>
          <p className="small-font">
            Among the types of Personal Data that CG Prospect collects, by
            itself or through third parties, there are: email address; Tracker;
            Usage Data, Name, Surname, IP Address. <br /> <br /> Complete
            details on each type of Personal Data collected are provided in the
            dedicated sections of this privacy policy or by specific explanation
            texts displayed prior to the Data collection. Personal Data may be
            freely provided by the User, or, in case of Usage Data, collected
            automatically when using CG Prospect. Unless specified otherwise,
            all Data requested by CG Prospect is mandatory and failure to
            provide this Data may make it impossible for CG Prospect to provide
            its services. In cases where CG Prospect specifically states that
            some Data is not mandatory, Users are free not to communicate this
            Data without consequences to the availability or the functioning of
            the Service. Users who are uncertain about which Personal Data is
            mandatory are welcome to contact the Owner. Any use of Cookies – or
            of other tracking tools – by CG Prospect or by the owners of
            third-party services used by CG Prospect serves the purpose of
            providing the Service required by the User, in addition to any other
            purposes described in the present document and in the Cookie Policy,
            if available. Users are responsible for any third-party Personal
            Data obtained, published or shared through CG Prospect and confirm
            that they have the third party's consent to provide the Data to the
            Owner.
          </p>
          <h3 className="medium-font">
            Detailed information on the processing of Personal Data
          </h3>
          <ul className="list-term">
            <li className="small-font">
              Analytics <br />
              The services contained in this section enable the Owner to monitor
              and analyze web traffic and can be used to keep track of User
              behavior. Google Analytics (Google Ireland Limited) Google
              Analytics is a web analysis service provided by Google Ireland
              Limited (“Google”). Google utilizes the Data collected to track
              and examine the use of CG Prospect, to prepare reports on its
              activities and share them with other Google services. Google may
              use the Data collected to contextualize and personalize the ads of
              its own advertising network. Personal Data processed: Tracker;
              Usage Data. Place of processing: Ireland – Privacy Policy – Opt
              Out.
            </li>
            <li className="small-font">
              Contacting the User <br />
              Mailing list or newsletter By registering on the mailing list or
              for the newsletter, the User’s email address will be added to the
              contact list of those who may receive email messages containing
              information of commercial or promotional nature concerning CG
              Prospect. Your email address might also be added to this list as a
              result of signing up to CG Prospect or after making a purchase.
              Personal Data processed: email address. Contact form By filling in
              the contact form with their Data, the User authorizes CG Prospect
              to use these details to reply to requests for information, quotes
              or any other kind of request as indicated by the form’s header.
              Personal Data processed: email address.
            </li>
            <li className="small-font">
              Donations <br />
              CG Prospect does not collect any of your card informations, the
              whole process is done via Stripe. However, CG Prospect, via
              Stripe, can see your name, surname and ip address, for protection
              and security purposes.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Terms;
