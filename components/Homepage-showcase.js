import Link from 'next/link';

function Showcase() {
  return (
    <main className="texture-example">
      <div className="texture-example-1 texture-example-all">
        <div></div>
        <div>
          <h3 className="big-font">+70 Millions of polygons</h3>
          <p className="small-font">
            <strong className="highlight">Photogrammetry</strong> is one of the
            best workflow in order to create high quality textures. It can
            ensure sharp displacement and normal maps, especially with rocks,
            terrains, wood and other complex shapes. CG Prospect's textures are
            baked with extremely high poly 3d models, granting production ready
            textures, that can fits any kind of shaders.
          </p>
          <Link href="/methods/photogrammetry">
            <a className="btn-line btn-texture-example">
              Photogrammetry Textures
            </a>
          </Link>
        </div>
      </div>
      <div className="texture-example-2 texture-example-all">
        <div>
          <h3 className="big-font">Raw photos with low ISO</h3>
          <p className="small-font">
            <strong className="highlight">Ai to Material</strong> is a technique
            that can mimik the photogrammetry results. Using a full frame
            camera, during the capturing process, CG Prospect is able to use a
            single photograph in order to provide extremely photorealistic
            textures.
          </p>
          <Link href="/methods/ai-to-material">
            <a className="btn-line btn-texture-example">
              Ai to Material Textures
            </a>
          </Link>
        </div>
        <div></div>
      </div>
      <div className="texture-example-3 texture-example-all">
        <div></div>
        <div>
          <h3 className="big-font">Extreme cure</h3>
          <p className="small-font">
            <strong className="highlight">Procedural</strong> texturing creation
            is still one of the most creative and professional way to create
            seamless PBR textures. They are natively exported in 8K, granting
            awesome detailed maps to put in your 3d models and renders!
          </p>
          <Link href="/methods/procedural">
            <a className="btn-line btn-texture-example">Procedural Textures</a>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Showcase;
