import Link from 'next/link';

const Advertising = () => {
  return (
    <section className="advertising">
      <hr className="line" />
      <h2 className=" big-font">Want Your Logo on CgProspect?</h2>
      <p className="small-font">
        CgProspect offers various types of direct advertising. For more
        informations about the <br />
        traffic of the website and other, feel free to get in touch!
      </p>
      <Link href="/sponsor-home">
        <a>
          <button className="btn">Boost your website</button>
        </a>
      </Link>
      <hr className="line" />
    </section>
  );
};

export default Advertising;
