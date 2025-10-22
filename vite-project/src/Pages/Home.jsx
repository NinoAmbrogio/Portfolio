import React from "react";
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
    <section className=" min-h-[calc(100vh-72px)] bg-gradient-to-b from-[#0b0f13] to-[#1f242b]  text-white flex flex-col justify-center items-center px-6 ">
      <div className="max-w-6xl w-full grid lg:grid-cols-12 gap-10 items-center mb-20">
        {/* Testo */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-indigo-600 text-white text-xs">
              Disponibile per collaborazioni
            </span>
            <span className="text-xs text-gray-400">Remote / On-site</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold">
            Ciao! Sono Antonino 👋
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed font-serif">
             Ho 26 anni e sono nato nel 1999. La passione per l’informatica mi
            accompagna fin da piccolo: ho sempre amato esplorare il mondo dei
            computer, comprendere il funzionamento dei componenti hardware e
            approfondire la logica del software. Negli anni ho trasformato
            questa curiosità in una vera professione, diventando un Full Stack
            Web Developer. Mi occupo di progettare e sviluppare applicazioni web
            complete, curando sia la parte frontend che quella backend.
          </p>

          
          <div className="flex gap-4 pt-4">
            <a
              href="/projects"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Guarda i progetti
            </a>
            <a
              href="/contacts"
              className="px-6 py-3 rounded-xl border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 transition"
            >
              Scrivimi
            </a>
          </div>
        </div>

        {/* Immagine */}
        <div className="lg:col-span-5 flex roun justify-center">
          <img
            src={fotonino}
            alt="Antonino"
            className="w-80 h-80 object-cover rounded-4xl shadow-2xl ring-1 ring-white/10 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Competenze */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-4xl font-semibold mb-10 text-center">
          💻 Competenze Tecniche
        </h2>
        <div className="bg-[#262c33] rounded-2xl shadow-lg   border border-white/10">
          <CompetenceCarousel />
        </div>
      </div>
    </section>
  );
};

export default Home;