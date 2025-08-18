// import Image from "next/image"

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-black text-white p-8 lg:p-16">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left side - Images */}
//           <div className="relative">
//             {/* Main image */}
//             <div className="relative w-full max-w-md mx-auto lg:mx-0">
//               <div className="relative rounded-3xl overflow-hidden border-4 border-purple-500">
//                 <Image
//                   src="/about1.png"
//                   alt="Young professional in modern office"
//                   width={350}
//                   height={400}
//                   className="w-full h-auto object-cover"
//                 />
//               </div>

//               {/* Overlapping second image */}
//             <div className="absolute -bottom-25 -right-8" style={{ width: "300px", height: "400px" }}>
//   <div className="relative rounded-2xl overflow-hidden border-4 border-purple-500 w-full h-full">
//     <Image
//       src="/about2.png"
//       alt="Bearded professional working on laptop"
//       width={300}
//       height={400}
//       className="w-full h-full object-cover"
//     />
//   </div>
// </div>

//             </div>
//           </div>

//           {/* Right side - Content */}
//           <div className="space-y-8">
//             <div>
//               <h1 className="text-5xl lg:text-6xl font-bold mb-8">
//                 About <span className="text-purple-500">us</span>
//               </h1>

//               <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
//                 Meta Master is your one-stop destination for 360° marketing, branding, and event solutions. We blend
//                 creativity, technology, and strategy to turn your vision into reality. Whether you're a startup, growing
//                 business, or an established brand — we craft tailor-made experiences that deliver results.
//               </p>

//               <blockquote className="text-purple-400 text-lg lg:text-xl font-semibold mb-12">
//                 "BUILT FOR IMPACT, DRIVEN BY RESULTS WITH YOU, FOR YOU."
//               </blockquote>
//             </div>

//             {/* Founder section */}
//             <div className="flex items-start gap-6">
//               <div className="flex-shrink-0">
//                 <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600">
//                   <Image
//                     src="/about3.png"
//                     alt="Aman Kumar - Founder"
//                     width={64}
//                     height={64}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-2xl font-bold mb-1">AMAN KUMAR</h3>
//                 <p className="text-purple-400 font-medium mb-4">Founder</p>

//                 <p className="text-gray-300 leading-relaxed">
//                   A seasoned digital marketing expert with 3+ years of hands-on experience, Meta Master is trusted by
//                   clients across industries including Real Estate, Education, Fashion, Events, Pet Brands, and more.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:px-12 lg:px-24 space-y-32">
        
        {/* About Us (with images) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
            <div className="absolute -bottom-20 -right-8 w-[350px] h-[420px]">
              <div className="relative rounded-2xl overflow-hidden border-4 border-purple-500 w-full h-full">
                <Image
                  src="/about2.png"
                  alt="Bearded professional working on laptop"
                  width={350}
                  height={420}
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
        <section>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10">
              Who we <span className="text-purple-500">are</span> ?
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl">
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

        {/* Our mission */}
        <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-bold mb-10">
              Our <span className="text-purple-500">mission</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              To empower brands and businesses through intelligent marketing, powerful storytelling, 
              and integrated technology solutions. We aim to create digital-first experiences 
              that generate real leads, build trust, and drive sustainable growth.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-[10px] border-purple-500">
              <Image
                src="/blurred-city-lights-bokeh.png"
                alt="City lights bokeh effect"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Our vision */}
        <section className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-20">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-bold mb-10">
              Our <span className="text-purple-500">vision</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              To become India's most trusted and performance-driven marketing & branding powerhouse, 
              known for helping brands dominate their space with creativity, strategy, and measurable outcomes.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-[10px] border-purple-500">
              <Image
                src="/professional-collaboration.png"
                alt="Team collaboration"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Bottom banner */}
        <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 px-6 py-24 md:px-12 lg:px-24">
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              One Agency. Every Solution. Maximum Impact.
            </h3>
          </div>
        </section>

      </div>
    </div>
  );
}
