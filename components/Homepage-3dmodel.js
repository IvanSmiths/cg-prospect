import Link from 'next/link';

const Homepage3dModel = () => {
  return (
    <section>
      <div className="hp-3d-model-cnt">
        <h3 className="big-font">3D Models of everything</h3>
        <p className="small-font highlight">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          consequuntur eius debitis quidem sint. Quisquam qui rem omnis
          accusantium asperiores?
        </p>
        <Link href="/freee-3d-models">
          <a className="btn-line">Browse 3d models</a>
        </Link>
      </div>
      <div className="flex-50 model-3d-example-cnt">
        <div>
          <h4 className="medium-font">Extreme realism</h4>
          <p className="small-font">
            3d models free to download? Got you covered! You can find 3d models
            of food, rocks and various objects in both low poly and high poly,
            all free to use in your commercial projects.
          </p>
          <Link href="/freee-3d-models">
            <a className="btn-line">Browse 3d models</a>
          </Link>
        </div>
        <div className="model-3d-example">
          <img
            loading="lazy"
            src="/3d-model-showcase-2.jpeg"
            height="300"
            width="300"
            alt="3d model example"
          />
        </div>
      </div>
      <div className="flex-50 model-3d-example-cnt-2">
        <div className="model-3d-example">
          <img
            loading="lazy"
            src="/3d-model-showcase-3.jpeg"
            height="300"
            width="300"
            alt="3d model example"
          />
        </div>
        <div>
          <h4 className="medium-font">Extreme realism</h4>
          <p className="small-font">
            3d models free to download? Got you covered! You can find 3d models
            of food, rocks and various objects in both low poly and high poly,
            all free to use in your commercial projects.
          </p>
          <Link href="/freee-3d-models">
            <a className="btn-line">Browse 3d models</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Homepage3dModel;
