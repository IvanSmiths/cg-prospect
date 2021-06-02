import Link from 'next/link';

function Merchandise() {
  return (
    <>
      <header className="merch-head-cnt flex-50">
        <div className="merch-head-cnt-1">
          <h1 className="big-font">DO 3D, WEAR 3D</h1>ù
          <p className="small-font">
            Visit theofficial shop on RedBubble for getting hoodies, tshirts and
            phone cover in a 3d mood
          </p>
          <a
            target="_blank"
            rel="noopener"
            className="btn"
            href="https://www.redbubble.com"
          >
            See all the merchandise
          </a>
          <img
            loading="lazy"
            className="merch-img"
            src="/3d-product.png"
            width="500"
            height="500"
            alt="a hoodie"
          />
        </div>
        <div className="merch-head-cnt-2">
          <h2 className="large-font">OFFICIAL MERCH</h2>
          <h2 className="large-font">CG PROSPECT</h2>
          <div className="merch-link-home">
            <h3 className="small-font highlight black">
              Free textures & 3d models
            </h3>
            <p className="small-font black">
              CG Prospect provides free textures and 3d models to put in even
              your commercial projects. If you want to see the assets, click the
              button below!
            </p>
            <Link href="/free-textures">
              <a className="btn-line">See assets</a>
            </Link>
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
              voluptates optio! Doloribus, mollitia non.
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
