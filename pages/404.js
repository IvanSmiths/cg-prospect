import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="notfound-cnt">
      <h1 className="big-font">
        The thing that you was searching for, is now in the default cube's bin.
      </h1>
      <Link href="/">
        <a className="btn">Back to home</a>
      </Link>
    </main>
  );
}
