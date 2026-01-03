"use client";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        className="h-full w-full object-cover  "
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#0e001a]/80" />
    </div>
  );
}
