import Link from 'next/link';
import Head from 'next/head';
import Subscribe from '../components/Subscribe';

function Merchandise() {
  return (
    <>
      <Head>
        <title>CG Prospect | Clothes and merch about 3d</title>
        <meta
          name="description"
          content="CG Prospect official merchandise like 3d t-shirt, 3d hoodies and more stuff"
        />
      </Head>
      <header className="merch-cnt">
        <div className="merch-first-col">
          <div>
            <h1 className="big-font">
              DO 3D <br /> Get 3D <br /> Wear 3D.
            </h1>
            <p className="small-font">
              CG Prospect provides free content, support it by buying the
              official merchandise. {''}
              <strong className="highlight-teespring">
                Shop securely now on TeeSpring.
              </strong>
            </p>
            <div className="merch-btn-cnt">
              <a
                className="btn black"
                target="_blank"
                rel="noopener"
                href="https://www.teespring.com"
              >
                Go to the shop
              </a>
              <Link href="/free-textures">
                <a className="btn-line">More info</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="merch-sec-col">
          <img src="/3d-product.png" width="300" height="300" alt="a hoodie" />
        </div>
        <div className="merch-third-col">
          <div>
            <h2 className="small-font highlight">New here?</h2>
            <p>
              You're in the merchandise page of CG Prospect, wich provides free
              textures and 3d models.
            </p>
            <div className="merch-btn-cnt">
              <Link href="/free-textures">
                <a className="btn-line btn3">Free textures</a>
              </Link>
              <Link href="/free-textures">
                <a className="btn-line btn3">Free 3d models</a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <h3 className="big-font white h3-merch">
          One of the best way to support
        </h3>
        <section className="merch-main-cnt flex-50">
          <div className="merch-main-cnt-1">
            <h3 className="small-font highlight white">Lorem Ipsum</h3>
            <p className="small-font">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem recusandae reprehenderit odit non, tenetur harum dolor
              architecto eum qui nulla tempora nostrum officiis error nisi
              voluptates optiod! Doloribus, mollitia non.
            </p>

            <ul className="merch-ico-cnt">
              <li className="merch-ico-list">
                <img
                  className="merch-ico"
                  src="/texture-t-shirt.svg"
                  height="50px"
                  width="50px"
                  alt="icon of a tshirt"
                />
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.redbubble.com"
                >
                  <h4 className="small-font underline highlight">T-shirt</h4>
                </a>
              </li>
              <li className="merch-ico-list">
                <img
                  className="merch-ico"
                  src="/texture-hoodie.svg"
                  height="50px"
                  width="50px"
                  alt="icon of a hoodie"
                />
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.redbubble.com"
                >
                  <h4 className="small-font underline highlight">Hoodies</h4>
                </a>
              </li>
              <li className="merch-ico-list">
                <img
                  className="merch-ico"
                  src="/texture-phone.svg"
                  height="50px"
                  width="50px"
                  alt="icon of a hoodie"
                />
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.redbubble.com"
                >
                  <h4 className="small-font underline highlight">Cover</h4>
                </a>
              </li>
              <li className="merch-ico-list">
                <img
                  className="merch-ico"
                  src="/texture-hat.svg"
                  height="50px"
                  width="50px"
                  alt="icon of a hoodie"
                />
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.redbubble.com"
                >
                  <h4 className="small-font underline highlight">Snapbacks</h4>
                </a>
              </li>
              <li className="merch-ico-list">
                <img
                  className="merch-ico"
                  src="/texture-sticker.svg"
                  height="50px"
                  width="50px"
                  alt="icon of a hoodie"
                />
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.redbubble.com"
                >
                  <h4 className="small-font underline highlight">Stickers</h4>
                </a>
              </li>
              <li className="merch-ico-list">
                <img
                  className="merch-ico"
                  src="/texture-pillow.svg"
                  height="50px"
                  width="50px"
                  alt="icon of a hoodie"
                />
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.redbubble.com"
                >
                  <h4 className="small-font underline highlight">Pillows</h4>
                </a>
              </li>
            </ul>
          </div>

          <div className="merch-main-cnt-2">
            <img
              src="/3d-product.png"
              width="300"
              height="300"
              alt="a hoodie"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Merchandise;
