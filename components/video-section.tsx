"use client";

import MuxPlayer from "@mux/mux-player-react";

// Paste the Mux playback ID here when the video is ready.
const PLAYBACK_ID = "";

export function VideoSection() {
  return (
    <section className="relative z-10 w-full bg-black">
      <div className="gold-divider w-full" />
      {PLAYBACK_ID ? (
        <MuxPlayer
          playbackId={PLAYBACK_ID}
          streamType="on-demand"
          autoPlay="muted"
          loop
          muted
          className="w-full aspect-video"
          accentColor="#f5d061"
        />
      ) : (
        <div className="w-full aspect-video flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(245,208,97,0.06),transparent_65%)]">
          <p className="font-sentient text-3xl sm:text-5xl text-chrome">
            The Film
          </p>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-gold mt-4">
            Dropping Soon
          </p>
        </div>
      )}
      <div className="gold-divider w-full" />
    </section>
  );
}
