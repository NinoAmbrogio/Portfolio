import React from "react";
import { Link } from "react-router-dom";
import fotonino from "../assets/fotonino.png";
import CompetenceCarousel from "../components/CompetenceCarousel";

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-4xl font-extrabold text-white">{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);

const Home = () => {
  return (
    <section
      className="
        relative 
        min-h-screen md:min-h-[100svh] 
       
        text-white 
        flex flex-col justify-center items-center 
        px-4 sm:px-6 lg:px-8 
        py-8 sm:py-12 
        overflow-x-hidden
      "
    >
      {/* Contenuto principale */}
      <div
        className="
          max-w-6xl w-full 
          flex flex-col lg:flex-row 
          items-center justify-between 
          gap-6 sm:gap-8 lg:gap-10 
          mb-12 sm:mb-16 lg:mb-20
        "
      >
        {/* Testo */}
        <div className="flex-1 space-y-4 sm:space-y-5 text-center lg:text-left order-2 lg:order-1">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span className="px-2.5 py-1 rounded-md bg-indigo-600 text-white text-xs">
              Disponibile per collaborazioni
            </span>
            <span className="text-xs text-gray-400">Remote / On-site</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Ciao! Sono Antonino 👋
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-serif">
            Ho 26 anni e sono nato nel 1999. La passione per l'informatica mi
            accompagna fin da piccolo: ho sempre amato esplorare il mondo dei
            computer, comprendere il funzionamento dei componenti hardware e
            approfondire la logica del software. Negli anni ho trasformato
            questa curiosità in una vera professione, diventando un Full Stack
            Web Developer. Mi occupo di progettare e sviluppare applicazioni web
            complete, curando sia la parte frontend che quella backend.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
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
        <div className="flex-1 flex justify-center order-1 lg:order-2">
          <img
            src={fotonino}
            alt="Antonino"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-3xl shadow-2xl ring-1 ring-white/10 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Competenze */}
      <div className="w-full flex flex-col items-center px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 lg:mb-10 text-center">
          💻 Competenze Tecniche
        </h2>
        <div className="bg-[#262c33] rounded-2xl shadow-lg border border-white/10 w-full max-w-5xl overflow-hidden min-h-[200px]">
          <CompetenceCarousel />
        </div>
      </div>
    </section>
  );
};

export default Home;