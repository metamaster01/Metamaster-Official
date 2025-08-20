import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-black text-white">
      <div className="min-h-screen w-full space-y-32">
        
        {/* About Us (with images) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-6 md:px-12 lg:px-24 py-20">
          {/* Left side - Images */}
          <div className="relative">
            {/* Main image */}
            <div className="relative w-[406px] h-[492px] rounded-3xl overflow-hidden border-4 border-purple-500">
              <Image
                src="/about1.png"
                alt="Young professional in modern office"
                width={406}
                height={492}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping second image */}
            <div className="absolute -bottom-20 -right-8 w-[350px] h-[350px]">
              <div className="relative rounded-2xl overflow-hidden border-4 border-purple-500 w-full h-full">
                <Image
                  src="/about2.png"
                  alt="Bearded professional working on laptop"
                  width={350}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              About <span className="text-purple-500">us</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
              Meta Master is your one-stop destination for 360° marketing, branding, and event solutions. 
              We blend creativity, technology, and strategy to turn your vision into reality. 
              Whether you're a startup, growing business, or an established brand — 
              we craft tailor-made experiences that deliver results.
            </p>

            <blockquote className="text-purple-400 text-lg lg:text-xl font-semibold mb-12">
              "BUILT FOR IMPACT, DRIVEN BY RESULTS WITH YOU, FOR YOU."
            </blockquote>

            {/* Founder section */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600">
                  <Image
                    src="/about3.png"
                    alt="Aman Kumar - Founder"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">AMAN KUMAR</h3>
                <p className="text-purple-400 font-medium mb-4">Founder</p>
                <p className="text-gray-300 leading-relaxed">
                  A seasoned digital marketing expert with 3+ years of hands-on experience, 
                  Meta Master is trusted by clients across industries including Real Estate, 
                  Education, Fashion, Events, Pet Brands, and more.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who we are */}
        <section className="px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10">
              Who we <span className="text-purple-500">are</span> ?
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-4xl">
              At Meta Master, we are a team of passionate creators, strategists, designers, and marketers 
              united by one mission — to turn your vision into impactful reality. 
              We are not just a digital marketing agency; we are your growth partners, 
              helping businesses scale with precision, creativity, and performance.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Know more about us
            </button>
          </div>
        </section>

        {/* Our mission (flush right corner image) */}
        <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 px-6 md:px-12 lg:px-0">
          {/* Text */}
          <div className="flex-1 lg:pl-24">
            <h2 className="text-5xl md:text-6xl font-bold mb-10">
              Our <span className="text-purple-500">mission</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              To empower brands and businesses through intelligent marketing, powerful storytelling, 
              and integrated technology solutions. We aim to create digital-first experiences 
              that generate real leads, build trust, and drive sustainable growth. 
              We exist to solve problems, spark visibility, and scale businesses — 
              not just with tools, but with mastery.
            </p>
          </div>

          {/* Half-cylinder image attached to right edge */}
          <div className="flex-shrink-0 relative w-[450px] h-[300px]">
     <div className="absolute inset-0 rounded-l-[150px] overflow-hidden border-4 border-purple-500 shadow-xl">
       <Image
       src="/mission1.png"
      alt="City lights bokeh effect"
       fill
       className="object-cover"
     />
    </div>
  </div>
        </section>

        {/* Our vision (flush left corner image) */}
        <section className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-20 px-6 md:px-12 lg:px-0">
          {/* Text */}
          <div className="flex-1 lg:pr-24">
            <h2 className="text-5xl md:text-6xl font-bold mb-10">
              Our <span className="text-purple-500">vision</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              To become India’s most trusted and performance-driven marketing & branding powerhouse, 
              known for helping brands dominate their space with creativity, strategy, 
              and measurable outcomes. A world where every brand — small or large — 
              can achieve its full potential, digitally and beyond.
            </p>
          </div>

          {/* Half-cylinder image attached to left edge */}
           <div className="flex-shrink-0 relative w-[450px] h-[300px]">
     <div className="absolute inset-0 rounded-r-[150px] overflow-hidden border-4 border-purple-500 shadow-xl">
      <Image
        src="/mission2.png"
         alt="Team collaboration"
        fill
         className="object-cover"
      />
    </div>
   </div>
        </section>
{/* Bottom banner (full width) */}
<section className="bg-gradient-to-b from-[#000000] via-[#1a001a] to-[#D26AFF] px-6 md:px-12 lg:px-24 py-6">
  <div className="text-center w-full">
    <h3 className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold text-white drop-shadow-lg tracking-wide">
      One Agency. Every Solution. Maximum Impact.
    </h3>
  </div>
</section>





      </div>
    </section>
  );
}
