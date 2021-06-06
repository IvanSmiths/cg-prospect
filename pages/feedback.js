import Head from 'next/head';
const feedback = () => {
  return (
    <>
      <Head>
        <title>CG Prospect | Leave your feedback!</title>
        <meta
          name="description"
          content="Giving your feedback, you can improve the quality of the content of CG Prospect"
        />
      </Head>
      <main className="feedback-cnt">
        <iframe
          className="feedback"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdskO-G1pqoAp-JmV1Cb_ZtKFC7V6ytnioqV7GxulI0AbwRnQ/viewform?embedded=true"
          width="640"
          height="2716"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </main>
    </>
  );
};

export default feedback;
