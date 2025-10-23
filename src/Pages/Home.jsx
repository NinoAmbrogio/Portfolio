import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import fotonino from "../assets/fotonino.png";
import CompetenceCarousel from "../components/CompetenceCarousel";

const Home = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    
    const setVh = () => {
      if (sectionRef.current) {
        sectionRef.current.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
      }
    };
    setVh();
    window.addEventListener("resize", setVh);

    
    const prevOverflow = document.body.style.overflow;
    const prevBg = document.body.style.background;
    document.body.style.overflow = "hidden";
    document.body.style.background = "#0b0f13";

    
    const preventTouchMove = (e) => {
      
      const el = e.target;
      const scrollable = el.closest?.("[data-allow-scroll='true']");
      if (!scrollable) e.preventDefault();
    };
    
    document.addEventListener("touchmove", preventTouchMove, { passive: false });

    return () => {
      window.removeEventListener("resize", setVh);
      document.body.style.overflow = prevOverflow;
      document.body.style.background = prevBg;
      document.removeEventListener("touchmove", preventTouchMove, { passive: false });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        fixed inset-0
        w-screen
        overflow-hidden overscroll-none
        bg-gradient-to-b from-[#0b0f13] to-[#1f242b]
        text-white
        flex flex-col
      "
     
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
     
      <div className="flex-1 min-h-0 flex items-center">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center px-4 sm:px-6 lg:px-8">
          {/* Testo */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="px-2.5 py-1 rounded-md bg-indigo-600 text-white text-xs">
                Disponibile per collaborazioni
              </span>
              <span className="text-xs text-gray-400">Remote / On-site</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
              Ciao! Sono Antonino 👋
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-serif max-w-2xl mx-auto lg:mx-0">
              Ho 26 anni e sono nato nel 1999. La passione per l'informatica mi
              accompagna fin da piccolo: ho sempre amato esplorare il mondo dei
              computer, comprendere il funzionamento dei componenti hardware e
              approfondire la logica del software. Negli anni ho trasformato
              questa curiosità in una vera professione, diventando un Full Stack
              Web Developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
              <Link
                to="/projects"
                className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition text-center"
              >
                Guarda i progetti
              </Link>
              <Link
                to="/contacts"
                className="px-6 py-3 rounded-xl border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 transition text-center"
              >
                Scrivimi
              </Link>
            </div>
          </div>

          {/* Immagine */}
          <div className="lg:col-span-5 flex justify-center order-first lg:order-last">
            <img
              src={fotonino}
              alt="Antonino"
              className="
                w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72
                object-cover rounded-3xl shadow-2xl ring-1 ring-white/10
                transition-transform duration-500
              "
          
            />
          </div>
        </div>
      </div>

      {/* Barra competenze */}
      <div className="shrink-0 px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-center">
            💻 Competenze Tecniche
          </h2>
          <div
            className="bg-[#262c33] rounded-2xl shadow-lg border border-white/10 w-full"
        
          >
            <CompetenceCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;