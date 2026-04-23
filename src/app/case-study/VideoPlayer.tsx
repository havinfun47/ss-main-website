"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster?: string;
};

export default function VideoPlayer({ src, poster }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [unmuted, setUnmuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, []);

  function handleStart() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.play().catch(() => {});
    setUnmuted(true);
    setIsPlaying(true);
  }

  return (
    <div
      className="relative w-full max-w-[1040px] mx-auto aspect-video rounded-lg overflow-hidden border"
      style={{ backgroundColor: "#1C1C1A", borderColor: "#E0DDD6" }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={unmuted}
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {!unmuted && (
        <>
          {/* Dim overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(28,28,26,0.45)" }}
          />

          {/* Top chrome */}
          <div className="absolute top-0 left-0 right-0 hidden md:flex items-start justify-between px-6 pt-6 pointer-events-none">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
              style={{
                backgroundColor: "rgba(45,92,63,0.2)",
                border: "1px solid rgba(45,92,63,0.5)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#5C8F6E" }}
              />
              <span
                className="text-[11px] font-semibold uppercase"
                style={{ color: "#9CC7A9", letterSpacing: "0.12em" }}
              >
                Live case study
              </span>
            </div>
            <div
              className="inline-flex items-center rounded-full px-3 py-1.5"
              style={{
                backgroundColor: "rgba(245,243,238,0.06)",
                border: "1px solid rgba(245,243,238,0.12)",
              }}
            >
              <span
                className="text-[11px] font-medium"
                style={{ color: "rgba(245,243,238,0.7)" }}
              >
                18 min breakdown
              </span>
            </div>
          </div>

          {/* Bottom chrome */}
          <div className="hidden md:flex absolute bottom-0 left-0 right-0 items-end justify-between px-6 pb-6 pointer-events-none">
            <div className="flex flex-col gap-1.5 max-w-[60%]">
              <p
                className="text-[11px] font-semibold uppercase"
                style={{ color: "rgba(245,243,238,0.4)", letterSpacing: "0.12em" }}
              >
                Full funnel teardown
              </p>
              <p
                className="font-serif italic text-2xl leading-tight"
                style={{ color: "#F5F3EE" }}
              >
                Kitchen Appliance Brand
              </p>
              <p
                className="text-[13px] leading-snug"
                style={{ color: "rgba(245,243,238,0.6)" }}
              >
                Scaled from $0 to $122K monthly revenue · 3.17 blended ROAS · 60 days
              </p>
            </div>
            <div className="flex items-center gap-[18px]">
              {[
                { label: "Revenue", value: "$122K" },
                { label: "ROAS", value: "3.17×" },
                { label: "Time", value: "60 days" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-[18px]">
                  <div className="flex flex-col gap-0.5">
                    <p
                      className="text-[11px] font-medium uppercase"
                      style={{ color: "rgba(245,243,238,0.4)", letterSpacing: "0.04em" }}
                    >
                      {stat.label}
                    </p>
                    <p
                      className="font-serif italic text-[22px] leading-none"
                      style={{ color: "#F5F3EE" }}
                    >
                      {stat.value}
                    </p>
                  </div>
                  {i < 2 && (
                    <span
                      className="block w-px h-[34px]"
                      style={{ backgroundColor: "rgba(245,243,238,0.12)" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Center action button — becomes Play if autoplay blocked */}
          <button
            type="button"
            onClick={handleStart}
            aria-label={isPlaying ? "Tap to unmute" : "Play the full teardown"}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[14px] group focus:outline-none"
          >
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-transform group-hover:scale-105"
              style={{
                backgroundColor: "#2D5C3F",
                border: "2px solid rgba(245,243,238,0.1)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
              }}
            >
              {isPlaying ? (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
                  <path
                    d="M13 10L7 14H3V18H7L13 22V10Z"
                    fill="#F5F3EE"
                    stroke="#F5F3EE"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12C20.5 13 21.5 14.5 21.5 16C21.5 17.5 20.5 19 19 20"
                    stroke="#F5F3EE"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M23 9C25.5 10.5 27 13 27 16C27 19 25.5 21.5 23 23"
                    stroke="#F5F3EE"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
                  <path d="M9 5L23 14L9 23V5Z" fill="#F5F3EE" />
                </svg>
              )}
            </div>
            <span
              className="text-[13px] font-medium tracking-wide"
              style={{ color: "rgba(245,243,238,0.85)", letterSpacing: "0.02em" }}
            >
              {isPlaying ? "Tap to unmute" : "Play the full teardown"}
            </span>
          </button>
        </>
      )}
    </div>
  );
}
