export default function HeroFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-[#A327F0] via-[#6a1bbd] to-[#2B0046] animate-[gradient_10s_ease_infinite]">
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </div>
  );
}
