import Link from 'next/link';

function Message() {
  return (
    <main className="contact-cnt">
      <div className="form-cnt-2">
        <h1 className="big-font">Message successfully sent!</h1>
        <h2 className="small-font">
          You'll receive an answer as soon as possible.
        </h2>
        <Link href="/free-textures">
          <a>
            <button className="btn">Browse textures</button>
          </a>
        </Link>
      </div>
    </main>
  );
}

export default Message;
