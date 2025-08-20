import { Button } from "@/components/Ui/button"

export default function OurWork() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          Recent <span className="text-purple-500">Works</span>
        </h1>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Zaina Collection */}
          <div className="group cursor-pointer">
            <div className="aspect-[2/-5] rounded-2xl overflow-hidden bg-gray-800">
              <img
                src="/work1.png"
                alt="Zaina Collection"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 items-start">
              <h3 className="text-white font-semibold text-lg text-left">
                Zaina Collection
              </h3>
              <p className="text-gray-300 text-sm text-center">
                Web Design/Visual Design
              </p>
              <p className="text-gray-400 text-sm text-right">2025</p>
            </div>
          </div>

          {/* Streetspheree Group */}
          <div className="group cursor-pointer">
            <div className="aspect-[2/-5] rounded-2xl overflow-hidden bg-gray-800">
              <img
                src="/work2.png"
                alt="Streetspheree Group"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 items-start">
              <h3 className="text-white font-semibold text-lg text-left">
                Streetspheree Group
              </h3>
              <p className="text-gray-300 text-sm text-center">
                Website Design/Visual Design
              </p>
              <p className="text-gray-400 text-sm text-right">2024</p>
            </div>
          </div>

          {/* Shah Tzu Dog Brand */}
          <div className="group cursor-pointer">
            <div className="aspect-[2/-5] rounded-2xl overflow-hidden bg-gray-800">
              <img
                src="/work3.png"
                alt="Shah Tzu Dog Brand"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 items-start">
              <h3 className="text-white font-semibold text-lg text-left">
                Shah Tzu Dog Brand
              </h3>
              <p className="text-gray-300 text-sm text-center">
                Web Design/Visual Design
              </p>
              <p className="text-gray-400 text-sm text-right">2025</p>
            </div>
          </div>

          {/* Xplore Events */}
          <div className="group cursor-pointer">
            <div className="aspect-[2/-5] rounded-2xl overflow-hidden bg-gray-800">
              <img
                src="/work4.png"
                alt="Xplore Events"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 items-start">
              <h3 className="text-white font-semibold text-lg text-left">
                Xplore Events
              </h3>
              <p className="text-gray-300 text-sm text-center">
                Website Design/Visual Design
              </p>
              <p className="text-gray-400 text-sm text-right">2025</p>
            </div>
          </div>
        </div>

        {/* See More Work Button */}
        <Button
          variant="outline"
          className="bg-transparent border-white-600 text-white hover:bg-white-600 hover:border-gray-500"
        >
          See more work
        </Button>
      </div>
    </div>
  )
}
