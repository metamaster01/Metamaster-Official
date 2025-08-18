import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Client",
    sector: "Real Estate Sector",
    testimonial:
      "Meta Master took our social media to the next level. Leads started flowing from day 1! Highly recommend!",
    image: "/professional-woman-cat-smile.png",
  },
  {
    id: 2,
    name: "Rosemary",
    sector: "Beauty Culture",
    testimonial:
      "Metamask talented and attentive team. They understood our vision and provided valuable insights that elevated our design process.",
    image: "/elegant-woman-gold.png",
  },
]

export function ClientTestimonials() {
  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="text-white">Our </span>
          <span className="text-purple-500">Clients</span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex gap-6">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-40 rounded-lg overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.name} testimonial`}
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                <div className="bg-purple-600 rounded-lg p-4 mb-4 relative">
                  <p className="text-white text-sm leading-relaxed">"{testimonial.testimonial}"</p>
                  {/* Speech bubble arrow */}
                  <div className="absolute bottom-0 left-4 transform translate-y-full">
                    <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-purple-600"></div>
                  </div>
                </div>

                <div className="text-white">
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.sector}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
