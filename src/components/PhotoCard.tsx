"use client"

interface PhotoCardProps {
  firstName: string
  carnet: string
  imageUrl: string
  isLoaded?: boolean
}

export default function PhotoCard({ firstName, carnet, imageUrl, isLoaded = false }: PhotoCardProps) {
  return (
    <div className="group cursor-pointer h-full">
      <div
        className="relative bg-gradient-to-br from-white via-cyan-50 to-white rounded-2xl overflow-hidden border-2 border-transparent bg-clip-padding transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-cyan-400 h-full"
        style={{
          borderImage: "linear-gradient(135deg, #06b6d4, #14b8a6, #10b981) 1",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-teal-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

        {/* Image Container */}
        <div className="w-full aspect-square bg-gradient-to-br from-slate-100 to-slate-50 overflow-hidden relative group/img">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={firstName}
            className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-400/30 to-transparent rounded-bl-3xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content Container */}
        <div className="p-6 relative z-10">
          <h3 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-950 to-cyan-600 mb-2 group-hover:from-cyan-600 group-hover:to-emerald-600 transition-all duration-300">
            {firstName}
          </h3>

          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 animate-pulse"></div>
            <p className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
              {carnet}
            </p>
          </div>

          <div className="h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      </div>
    </div>
  )
}
