"use client"

import { useState, useEffect } from "react"
import PhotoCard from "./components/PhotoCard"

const placeholderImage = "/placeholder.svg"
import barcelonaLogo from "./assets/barcelona-logo.png"
import  acevedoImage from "./assets/Acevedo.png"
import CM17145f from "./assets/CM17145.jpg"
import AM18007f from "./assets/AM18007.png"


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
      carnet:"CM17145",
      imageUrl: CM17145f,
    },
    {
      firstName: "Fajardo",
      carnet: "FM22010",
      imageUrl: placeholderImage,
    },
    {
      firstName: "Acevedo",
      carnet: "AA22006",
      imageUrl: acevedoImage,
    },
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 font-sans overflow-hidden`}>
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <header
        className={`transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"} ${isLoaded ? "translate-y-0" : "translate-y-10"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-3 mb-8 group">
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 h-1 w-8 rounded-full group-hover:w-12 transition-all duration-300"></div>
              <span className="text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600 uppercase tracking-widest">
                🚀 Proyecto Académico
              </span>
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 h-1 w-8 rounded-full group-hover:w-12 transition-all duration-300"></div>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-cyan-600 to-emerald-600 mb-6 tracking-tighter leading-tight animate-fadeIn">
              Sistemas Operativos
            </h1>

            <div className="flex flex-col items-center gap-2">
              <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Proyecto de Cátedra
              </p>
              <div className="flex gap-2 justify-center mt-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse animation-delay-1000"></div>
                <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <section
          className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100" : "opacity-0"} ${isLoaded ? "translate-y-0" : "translate-y-10"}`}
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-950 to-cyan-600 mb-6">
              Nuestro Equipo
            </h2>
            <div className="flex gap-2 justify-center mb-8">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 animate-bounce"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 rounded-full"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 animate-bounce animation-delay-1000"></div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 mt-6 max-w-2xl mx-auto font-medium">
              Profesionales comprometidos con la excelencia académica y la innovación tecnológica
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
          className={`mt-32 sm:mt-40 lg:mt-48 pt-24 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${isLoaded ? "translate-y-0" : "translate-y-10"}`}
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-950 to-orange-600 mb-6">
                Barcelona FC
              </h2>
              <div className="flex gap-2 justify-center">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 animate-bounce"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full"></div>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 animate-bounce animation-delay-1000"></div>
              </div>
            </div>

            <div className="relative group">
              <div
                className={`relative bg-gradient-to-br from-white via-cyan-50 to-teal-50 rounded-3xl overflow-hidden border-2 border-transparent bg-clip-padding transition-all duration-500 group-hover:border-orange-400 group-hover:shadow-2xl group-hover:shadow-orange-200`}
                style={{
                  borderImage: "linear-gradient(135deg, #06b6d4, #14b8a6, #f97316) 1",
                  animation: isLoaded ? "float 6s ease-in-out infinite" : "none",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-orange-400/20 pointer-events-none"></div>

                <div className="aspect-square flex items-center justify-center p-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-500 to-emerald-500 animate-spin opacity-20"
                      style={{ animation: "spin 8s linear infinite" }}
                    ></div>
                    <div
                      className="absolute inset-2 rounded-full border-2 border-transparent bg-gradient-to-r from-orange-500 to-pink-500 animate-spin opacity-20"
                      style={{ animation: "spin 6s linear reverse" }}
                    ></div>

                    <img
                      src={barcelonaLogo || "/placeholder.svg"}
                      alt="Escudo del Fútbol Club Barcelona"
                      className="w-full h-full object-contain relative z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gradient mt-20 sm:mt-24 lg:mt-32 bg-gradient-to-r from-cyan-50 via-teal-50 to-emerald-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <p className="text-slate-700 font-bold mb-2 text-lg">© 2025 Sistemas Operativos</p>
            <p className="text-sm text-slate-500 font-medium">
              Todos los derechos reservados. Proyecto de Cátedra Universitaria
            </p>
            <div className="flex gap-2 justify-center mt-4">
              <div className="w-1 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
              <div className="w-1 h-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-500"></div>
              <div className="w-1 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
