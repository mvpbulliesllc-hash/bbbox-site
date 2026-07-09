"use client";

export function VideoSection() {
  return (
    <section className="relative z-10 w-full bg-black">
      <div className="gold-divider w-full" />
      <video
        className="block w-full h-auto"
        src="/mvp-film.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls
      />
      <div className="gold-divider w-full" />
    </section>
  );
}
