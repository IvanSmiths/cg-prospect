import Carousel from './Homepage-carousel';

const HomepageMerch = () => {
  return (
    <section className="merch-cnt margin-section flex-50">
      <div className="merch-first-col">
        <div>
          <h3 className="big-font">
            DO 3D <br /> Get 3D <br /> Wear 3D.
          </h3>
          <p className="small-font">
            CG Prospect provides free content, support it by buying the official
            merchandise. {''}
            <strong className="highlight-teespring">
              Shop securely now on TeeSpring.
            </strong>
          </p>

          <a
            className="btn black teespring-clr"
            target="_blank"
            rel="noopener"
            href="https://www.teespring.com"
          >
            Go to the shop
          </a>
        </div>
      </div>
      <div className="merch-sec-col">
        <Carousel />
      </div>
    </section>
  );
};

export default HomepageMerch;
