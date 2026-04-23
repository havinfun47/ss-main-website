"use client";

import { useRef, useState } from "react";

type Props = {
  src: string;
  poster?: string;
};

export default function VideoPlayer({ src, poster }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function start() {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setStarted(true);
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-bg-dark border border-border shadow-2xl">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={started}
        playsInline
        preload="metadata"
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture
        className="w-full h-full block"
        onEnded={() => setStarted(false)}
      />

      {!started && (
        <button
          type="button"
          onClick={start}
          aria-label="Play case study video"
          className="absolute inset-0 w-full h-full flex items-center justify-center group focus:outline-none"
          style={{ background: "rgba(28,28,26,0.35)" }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent flex items-center justify-center transition-transform group-hover:scale-105 shadow-xl ring-4 ring-white/10">
              <svg
                viewBox="0 0 28 28"
                fill="none"
                className="w-7 h-7 md:w-8 md:h-8 translate-x-0.5"
                aria-hidden
              >
                <path d="M9 5L23 14L9 23V5Z" fill="white" />
              </svg>
            </div>
            <span className="text-white/80 text-sm font-medium tracking-wide">
              Play the full teardown
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
