import ProgressBar from './ProgressBar';

function Patreon() {
  return (
    <section className="patreon">
      <div className="patreon-text">
        <h2 className="big-font patreon-h2">Join The Cahoot</h2>
        <p className="small-font">
          Joining the Patreon community, you wll get the textures before they
          are uploaded on CG Prospect. Altrough, the quality and the resolution
          is exactly the same. There are{' '}
          <strong className="highlight-patreon">exclusive contents</strong> ,
          like unique textures, 3d objects, tutorials, and a beautiful community
          to talk with or ask for help.
        </p>
      </div>
      <div>
        <ProgressBar />
      </div>
      <a href="https://www.patreon.com/" target="_blank" rel="noopener">
        <button className="btn patreon-clr">Get unique content</button>
      </a>
    </section>
  );
}
export default Patreon;