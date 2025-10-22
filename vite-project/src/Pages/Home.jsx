import fotonino from "../assets/fotonino.png";
import CompetenceCarousel from "../components/CompetenceCarousel";

const Home = () => {
  return (
    <>
      {/* Sezione principale */}
      <section className="flex flex-row justify-center min-h-[calc(100vh-72px)]  px-4 bg-gray-400">
        <div className="flex flex-col justify-center w-1/2 space-y-6 ">
          <h1 className="text-7xl font-extrabold mb-6">
            Ciao! Sono Antonino 👋
          </h1>

          <div className="flex flex-col justify-center items-center">
            <p className=" font-serif leading-relaxed text-gray-800 text-justify text-2xl">
              Ho 26 anni e sono nato nel 1999. La passione per l’informatica mi
              accompagna fin da piccolo: ho sempre amato esplorare il mondo dei
              computer, comprendere il funzionamento dei componenti hardware e
              approfondire la logica del software. Negli anni ho trasformato
              questa curiosità in una vera professione, diventando un Full Stack
              Web Developer. Mi occupo di progettare e sviluppare applicazioni
              web complete, curando sia la parte frontend che quella backend.
              Amo costruire soluzioni digitali funzionali, pulite e ben
              strutturate, con un’attenzione particolare all’esperienza utente e
              alle buone pratiche di sviluppo. Questo portfolio raccoglie i miei
              progetti, le mie esperienze e la mia crescita professionale nel
              mondo del web development. Continuo a formarmi costantemente per
              migliorare le mie competenze e affrontare nuove sfide nel settore
              tech.
            </p>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center overflow-hidden">
          <img src={fotonino} alt="Foto di Antonino" className="" />
        </div>
      </section>

      {/* Sezione competenze */}
      <section className="py-40 flex flex-col items-center justify-between bg-gray-400 min-h-screen">
        <h2 className="text-4xl font-semibold mb-12 text-center">
          💻 Competenze Tecniche
        </h2>
        <div className="w-full flex justify-center">
          <CompetenceCarousel />
        </div>
      </section>
    </>
  );
};

export default Home;
