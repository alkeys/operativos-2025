"use client"

import { useState, useEffect } from "react"
import PhotoCard from "./components/PhotoCard"

const placeholderImage = "/placeholder.svg"
// MODIFICACIÓN: Importa la nueva imagen premium
import barcelonaLogoPremium from "./assets/barcelona-logo.png" // <--- ¡Asegúrate de que esta ruta sea correcta y el archivo exista!
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
      {/* Fondo animado */}
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

        {/* SECCIÓN BARCELONA FC MODIFICADA */}
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

            {/* INICIO DEL CONTENEDOR MEJORADO (GLASSMORPHISM & TECH RINGS) */}
            <div className="relative group w-full max-w-md mx-auto">
              {/* 1. Efecto de brillo ambiental trasero (Azul y Grana) */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-[3rem] opacity-20 group-hover:opacity-60 blur-2xl transition-all duration-700 group-hover:scale-110" />
              
              {/* 2. Tarjeta Principal (Efecto Cristal) */}
              <div
                className="relative aspect-square rounded-[2.5rem] overflow-hidden transition-all duration-500 transform group-hover:-translate-y-2 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/20 bg-white/60 backdrop-blur-xl border border-white/50"
              >
                {/* Brillo superior (reflejo de luz) */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/80 via-transparent to-transparent opacity-50 pointer-events-none z-20" />

                <div className="w-full h-full flex items-center justify-center p-8 sm:p-12 relative z-10">
                  <div className="relative w-full h-full max-w-sm flex items-center justify-center">
                    
                    {/* 3. Anillos giratorios mejorados (Tech/Futurista) */}
                    {/* Anillo Exterior (Azul) */}
                    <div className="absolute w-[120%] h-[120%] rounded-full border border-blue-500/30 border-t-blue-500 border-r-transparent shadow-[0_0_30px_rgba(59,130,246,0.3)]" 
                         style={{ animation: "spin 10s linear infinite" }} />
                         
                    {/* Anillo Interior (Grana/Rojo) - Gira al revés */}
                    <div className="absolute w-[90%] h-[90%] rounded-full border border-red-500/30 border-b-red-500 border-l-transparent shadow-[0_0_30px_rgba(239,68,68,0.3)]" 
                         style={{ animation: "spin 7s linear infinite reverse" }} />

                    {/* Orbe central de fondo (para dar profundidad) */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-red-100/50 rounded-full blur-3xl animate-pulse" />

                    {/* 4. Imagen del Escudo - AHORA USA barcelonaLogoPremium */}
                    <img
                      src={barcelonaLogoPremium || placeholderImage} // <--- CAMBIO AQUÍ
                      alt="Escudo del Fútbol Club Barcelona"
                      className="w-full h-full object-contain relative z-30 drop-shadow-2xl
                       transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
                       border-8 border-white/70 rounded-full
                       "
                      style={{ 
                        filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.15))" 
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* FIN DEL CONTENEDOR MEJORADO */}

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