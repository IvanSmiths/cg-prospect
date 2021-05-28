function Stats() {
  return (
    <section className="stats">
      <div className="container-cards">
        <div className="card">
          <img
            loading="lazy"
            src="/maps.svg"
            height="60"
            width="60"
            alt="An icon showing maps"
          />
          <h2 className="btn-font highlight">
            All the textures that you need!
          </h2>
          <p className="small-font">
            The textures from CG Prospect can be used in every 3d software like
            Blender, Autodesk Maya, Maxon Cinema 4D, Houdini or with game
            engines like Unity or Unreal Engine.
          </p>
        </div>
        <div className="card card-patreon">
          <img
            loading="lazy"
            src="/hand.svg"
            height="60"
            width="60"
            alt="An icon showing a hand"
          />
          <h2 className="btn-font highlight">Sustained by you.</h2>
          <p className="small-font">
            CG Prospect provides free textures thanks to the Patreons Cahoot, by
            donations on the download, and by advertising on the website.
          </p>
          <a
            target="_blank"
            rel="noopener"
            className="btn-line"
            style={{ color: 'black', border: 'black 2px solid' }}
            href="https://www.patreon.com"
          >
            Support free content
          </a>
        </div>
        <div className="card">
          <img
            loading="lazy"
            src="/cube.svg"
            height="60"
            width="60"
            alt="An icon showing a cube"
          />
          <h2 className="btn-font highlight">CCO License</h2>
          <p className="small-font">
            You can put CG Prospect's textures even in your commercial projects
            like renders or even movies/games totally for free. An attribution
            will be appreciated, but is not required.
          </p>
        </div>
      </div>
      <h3 className="font-color-inverse stats-title big-font">
        New Textures Every Friday!
      </h3>
      <div className="container-numbers">
        <div className="numbers">
          <h4 className="medium-font font-color-inverse">
            15 <br />
            Textures
          </h4>
        </div>
        <div className="numbers">
          <h4 className="medium-font font-color-inverse">
            46 <br />
            Maps in total
          </h4>
        </div>
        <div className="numbers">
          <h4 className="medium-font font-color-inverse">
            6 <br />
            Beautiful Patreons
          </h4>
        </div>
        <div className="numbers">
          <h4 className="medium-font font-color-inverse">
            23 <br />
            Gb of Passion
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Stats;
