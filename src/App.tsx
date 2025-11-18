"use client"

import { useState, useEffect } from "react"
import PhotoCard from "./components/PhotoCard"

const placeholderImage = "/placeholder.svg"
import barcelonaLogo from "./assets/barcelona-logo.png"
import acevedoImage from "./assets/Acevedo.jpg"
import CM17145f from "./assets/CM17145.jpg"
import AM18007f from "./assets/AM18007.png"
import FM22010f from "./assets/FM22010.jpg"

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const photos = [
    {
      firstName: "Aviles",
      carnet: "AM18007",
      imageUrl: AM18007f,
    },
    {
      firstName: "Cornejo",
      carnet: "CM17145",
      imageUrl: CM17145f,
    },
    {
      firstName: "Fajardo",
      carnet: "FM22010",
      imageUrl: FM22010f,
    },
    {
      firstName: "Acevedo",
      carnet: "AA22006",
      imageUrl: acevedoImage,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 font-sans overflow-hidden">
      <div className="fixed inset-0 -z-10 opacity-20" aria-hidden="true">
        <div className="absolute top-0 left-[10%] w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-[10%] w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-violet-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <header
        className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 group">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-0.5 sm:h-1 w-6 sm:w-8 rounded-full group-hover:w-10 sm:group-hover:w-12 transition-all duration-300" />
              <span className="text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 uppercase tracking-widest">
                Proyecto Académico
              </span>
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-0.5 sm:h-1 w-6 sm:w-8 rounded-full group-hover:w-10 sm:group-hover:w-12 transition-all duration-300" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-violet-600 mb-4 sm:mb-6 tracking-tighter leading-tight text-balance">
              Sistemas Operativos
            </h1>

            <div className="flex flex-col items-center gap-2">
              <p className="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Proyecto de Cátedra
              </p>
              <div className="flex gap-2 justify-center mt-2" aria-hidden="true">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse animation-delay-1000" />
                <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse animation-delay-2000" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <section
          className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-600 mb-4 sm:mb-6 text-balance">
              Nuestro Equipo
            </h2>
            
            <div className="flex gap-2 justify-center mb-6 sm:mb-8" aria-hidden="true">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-bounce" />
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 animate-bounce animation-delay-1000" />
            </div>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-4 sm:mt-6 max-w-2xl mx-auto font-medium leading-relaxed text-pretty">
              Profesionales comprometidos con la excelencia académica y la innovación tecnológica
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="animate-fadeInUp"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <PhotoCard
                  firstName={photo.firstName}
                  carnet={photo.carnet}
                  imageUrl={photo.imageUrl}
                  isLoaded={isLoaded}
                />
              </div>
            ))}
          </div>
        </section>

        <section
          className={`mt-20 sm:mt-28 lg:mt-40 pt-16 sm:pt-20 lg:pt-24 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-orange-600 mb-4 sm:mb-6 text-balance">
                Barcelona FC
              </h2>
              <div className="flex gap-2 justify-center" aria-hidden="true">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 animate-bounce" />
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full" />
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 animate-bounce animation-delay-1000" />
              </div>
            </div>

            <div className="relative group">
              <div
                className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-transparent bg-clip-padding transition-all duration-500 group-hover:border-orange-400 group-hover:shadow-2xl group-hover:shadow-orange-200/50"
                style={{
                  borderImage: "linear-gradient(135deg, #3b82f6, #6366f1, #f97316) 1",
                  animation: isLoaded ? "float 6s ease-in-out infinite" : "none",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-orange-400/10 pointer-events-none" />

                <div className="aspect-square  border-8 border-white rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-lg mx-auto
                 flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 
                 group-hover:scale-105 transition-transform duration-500 relative z-10">
                  <div className="relative w-full h-full max-w-sm">
                    <div
                      className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 to-violet-500 opacity-20"
                      style={{ animation: "spin 8s linear infinite" }}
                    />
                    <div
                      className="absolute inset-2 rounded-full border-2 border-transparent bg-gradient-to-r from-orange-500 to-pink-500 opacity-20"
                      style={{ animation: "spin 6s linear reverse" }}
                    />

                    <img
                      src={barcelonaLogo || placeholderImage}
                      alt="Escudo del Fútbol Club Barcelona"
                      className="w-full h-full object-contain relative z-10 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 mt-16 sm:mt-20 lg:mt-32 bg-gradient-to-r from-blue-50/80 via-indigo-50/80 to-violet-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <div className="text-center">
            <p className="text-slate-700 font-bold mb-2 text-base sm:text-lg">
              © 2025 Sistemas Operativos
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Todos los derechos reservados. Proyecto de Cátedra Universitaria
            </p>
            <div className="flex gap-2 justify-center mt-4" aria-hidden="true">
              <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
              <div className="w-1 h-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-500" />
              <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-pink-500" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
