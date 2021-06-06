import Link from 'next/link';
import Head from 'next/head';

function Message() {
  return (
    <>
      <Head>
        <title>CG Prospect | Your message was sent</title>
        <meta name="description" content="Your message was sent successfully" />
      </Head>
      <main className="contact-cnt">
        <div className="form-cnt-2">
          <h1 className="big-font">Message successfully sent!</h1>
          <h2 className="small-font">
            You'll receive an answer as soon as possible.
          </h2>
          <Link href="/free-textures">
            <a>
              <button className="btn">Browse assets</button>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Message;
