"use client";

export default function Ribbon() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] py-4 sm:py-6">
      
      {/* Ribbon Wrapper */}
      <div
        className="
          relative
          w-[140%]
         
          bg-[#D26AFF]
          py-6 sm:py-7
          shadow-xl
          overflow-hidden
        "
      >
        {/* Moving Track */}
        <div className="flex w-max animate-ribbon-loop">
          {/* Duplicate text for seamless loop */}
          {[1, 2,3,4].map((_, i) => (
            <p
              key={i}
              className="
                px-16
                text-xl sm:text-3xl
                font-semibold
                text-white
                whitespace-nowrap
                flex items-center
              "
            >
              One Agency. Every Solution. Maximum Impact.
            </p>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes ribbon-loop {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-ribbon-loop {
          animation: ribbon-loop 10s linear infinite;
        }
      `}</style>
    </section>
  );
}
