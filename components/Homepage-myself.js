function Myself() {
  return (
    <section className="myself flex-50">
      <div>
        <img
          className="image-myself"
          loading="lazy"
          src="/myself.jpg"
          height="350"
          width="380"
          alt="An image of myself"
        />
      </div>
      <div className="myself-text">
        <h2 className="big-font">Ivan Smiths here.</h2>
        <p className="small-font">
          I've built CG Prospect on my own, from the creation of the Textures,
          to the coding of the web site. 3D artist specialized in Photogrammetry
          and web developer, i've built this project for putting myself in game,
          and for sharing my stuff and knowledge with other passionated people.
        </p>
      </div>
    </section>
  );
}

export default Myself;
