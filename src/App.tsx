"use client"

import { useState, useEffect } from "react"
import PhotoCard from "./components/PhotoCard"
import logoPlaceholder from "./assets/image.png"
import logoBarcelona from "./assets/barcelona-logo.png"
import Acevedo from "./assets/Acevedo.png"

const MAIN_TITLE_COLOR = "text-slate-900"
const SUBTITLE_COLOR = "text-blue-600"
const BACKGROUND_COLOR = "bg-gradient-to-b from-slate-50 to-blue-50"
const ACCENT_COLOR = "bg-blue-600"
const ACCENT_HOVER = "hover:bg-blue-700"

const barcelonaLogo = logoBarcelona

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const placeholderImage = logoPlaceholder

  const photos = [
    {
      firstName: "Aviles",
      carnet: "AM18007",
      imageUrl: placeholderImage,
    },
    {
      firstName: "Luis",
      carnet: "Arquitecto de Sistemas",
      imageUrl: placeholderImage,
    },
    {
      firstName: "Carlos",
      carnet: "Documentación y Pruebas",
      imageUrl: placeholderImage,
    },
    {
      firstName: "Acevedo",
      carnet: "AA22006",
      imageUrl: Acevedo,
    },
  ]

  return (
    <div className={`min-h-screen ${BACKGROUND_COLOR} font-sans`}>
      <header
        className={`transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"} ${isLoaded ? "animate-fadeInUp" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-2 mb-6">
              <div className={`${ACCENT_COLOR} h-2 w-12 rounded-full`}></div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Proyecto Académico</span>
              <div className={`${ACCENT_COLOR} h-2 w-12 rounded-full`}></div>
            </div>
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold ${MAIN_TITLE_COLOR} mb-4 tracking-tight`}>
              Sistemas Operativos
            </h1>
            <p className={`text-lg sm:text-xl ${SUBTITLE_COLOR} font-semibold mb-2`}>Proyecto de Cátedra</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <section
          className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100" : "opacity-0"} ${isLoaded ? "animate-fadeInUp" : ""}`}
        >
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${MAIN_TITLE_COLOR} mb-4`}>Nuestro Equipo</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto"></div>
            <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
              Profesionales comprometidos con la excelencia académica y la innovación tecnológica
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            {photos.map((photo, index) => (
              <PhotoCard
                key={index}
                firstName={photo.firstName}
                carnet={photo.carnet}
                imageUrl={photo.imageUrl}
                delay={(index + 1) * 100}
                isLoaded={isLoaded}
              />
            ))}
          </div>
        </section>

        <section
          className={`mt-28 sm:mt-36 lg:mt-48 pt-20 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${isLoaded ? "animate-fadeInUp" : ""}`}
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${MAIN_TITLE_COLOR} mb-4`}>
               Barcelona FC
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto"></div>
            </div>

            <div className="relative group">
              <div
                className={`bg-white rounded-2xl overflow-hidden border-2 border-blue-100 transition-all duration-500 hover:border-blue-300 hover:shadow-2xl ${isLoaded ? "animate-bounce-subtle" : ""}`}
              >
                <div className="aspect-square flex items-center justify-center p-8 hover:scale-105 transition-transform duration-300">
                  <img
                    src={barcelonaLogo || placeholderImage}
                    alt="Escudo del Fútbol Club Barcelona"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-blue-100 mt-20 sm:mt-24 lg:mt-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <p className="text-slate-600 font-medium mb-2">© 2025 Sistemas Operativos</p>
            <p className="text-sm text-slate-500">Todos los derechos reservados. Proyecto de Cátedra Universitaria</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
