import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Client",
    sector: "Real Estate Sector",
    testimonial:
      "Meta Master took our social media to the next level. Leads started flowing from day 1! Highly recommend!",
    image: "/client1.jpg",
    bg: "#4F21A1",
  },
  {
    id: 2,
    name: "Rosemary",
    sector: "Beauty Culture",
    testimonial:
      "Metamask talented and attentive team. They understood our vision and provided valuable insights that elevated our design process.",
    image: "/client2.png",
    bg: "#D26AFF",
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
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-lg overflow-hidden"
            >
              {/* Client Image */}
              <div className="h-full">
                <Image
                  src={t.image || "/placeholder.svg"}
                  alt={`${t.name} testimonial`}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Testimonial Content */}
              <div
                className="flex flex-col justify-between p-6"
                style={{ backgroundColor: t.bg }}
              >
                <p className="text-white text-sm md:text-base leading-relaxed mb-6">
                  “{t.testimonial}”
                </p>
                <div className="text-white">
                  <p className="font-semibold text-lg">{t.name}</p>
                  <p className="text-gray-200 text-sm">{t.sector}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
