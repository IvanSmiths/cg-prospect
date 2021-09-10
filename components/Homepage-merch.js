import Carousel from './Homepage-carousel';

const HomepageMerch = () => {
  return (
    <section className="merch-cnt margin-section flex-50">
      <div className="merch-first-col">
        <div>
          <h3 className="big-font">
            DO 3D <br /> Download 3D <br /> Wear 3D.
          </h3>
          <p className="small-font">
            CG Prospect provides{' '}
            <strong>free to download 3d models and pbr textures </strong>
            without any kind of limit. You can support the work of CG Prospect
            by buying the official merchandise. {''}
            <b className="highlight-main">Shop securely now on TeeSpring.</b>
          </p>

          <a
            className="btn black teespring-clr"
            target="_blank"
            rel="noopener"
            href="https://cg-prospect.creator-spring.com"
          >
            Go to the shop
          </a>
        </div>
      </div>
      <div className="merch-sec-col">
        <a
          target="_blank"
          rel="noopener"
          href="https://cg-prospect.creator-spring.com"
        >
          <img
            loading="lazy"
            height="550"
            width="550"
            src="/3d-merch-2.png"
            alt="image of a shirt"
            className="image-merch"
          />
        </a>
      </div>
    </section>
  );
};

export default HomepageMerch;
