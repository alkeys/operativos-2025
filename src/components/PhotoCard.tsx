"use client"

interface PhotoCardProps {
  firstName: string
  carnet: string
  imageUrl: string
  delay: number
  isLoaded: boolean
}

export default function PhotoCard({ firstName, carnet, imageUrl, delay, isLoaded }: PhotoCardProps) {
  return (
    <div
      className={`transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"} ${isLoaded ? "animate-fadeInUp" : ""}`}
      style={{
        transitionDelay: isLoaded ? `${delay}ms` : "0ms",
      }}
    >
      <div className="group relative h-full">
        {/* Card Container */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
          {/* Image Section */}
          <div className="aspect-square overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={firstName}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Info Section */}
          <div className="p-5 text-center">
            <h3 className="text-lg font-bold text-slate-900 mb-1 truncate">{firstName}</h3>
            <p className="text-sm text-blue-600 font-medium line-clamp-2">{carnet}</p>
          </div>

          {/* Hover Effect Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/0 transition-all duration-300 pointer-events-none rounded-xl"></div>
        </div>
      </div>
    </div>
  )
}
