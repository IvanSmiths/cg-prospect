import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

function Video() {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 1);
  }, []);
  return (
    <section className="cnt-video">
      <video ref={videoRef} className="video" loop muted>
        <source src="/pbr-texture.mp4" type="video/mp4" />
      </video>
      <div className="text-video">
        <h2 className="big-font">
          8K Resolution of <strong className="highlight-main"> POWER </strong>
        </h2>
        <p className="btn-font highlight">
          Browse between the most photorealistic wood, rock, or metal textures
          that you can find. Free textures never looked so professional.
        </p>
        <Link href="/free-textures">
          <a>
            <button className="btn-line">Enhance your renders</button>
          </a>
        </Link>
      </div>
    </section>
  );
}

export default Video;
