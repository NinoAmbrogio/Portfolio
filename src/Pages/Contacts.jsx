import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contacts = () => {
  return (
    <section className="min-h-[calc(100vh-72px)]  flex flex-col justify-center items-center px-6 py-12">
      <div className="text-center space-y-8 w-full max-w-4xl">
        {/* Titolo */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600">
          Contattami
        </h2>

        {/* Icone social */}
        <div className="flex flex-wrap gap-8 sm:gap-10 justify-center items-center text-gray-700">
          <a
            href="https://github.com/NinoAmbrogio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-transform transform hover:scale-110"
          >
            <FaGithub className="text-6xl sm:text-7xl md:text-8xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/antonino-ambrogio-185450326/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-transform transform hover:scale-110"
          >
            <FaLinkedin className="text-6xl sm:text-7xl md:text-8xl" />
          </a>

          <a
            href="mailto:antoninoambrogio@live.it"
            className="hover:text-red-600 transition-transform transform hover:scale-110"
          >
            <FaEnvelope className="text-6xl sm:text-7xl md:text-8xl" />
          </a>

          <a
            href="tel:+393511234567"
            className="hover:text-green-600 transition-transform transform hover:scale-110"
          >
            <FaPhone className="text-6xl sm:text-7xl md:text-8xl" />
          </a>
        </div>

        {/* Contatti testuali */}
        <div className="space-y-4 mt-8">
          <p className="text-lg sm:text-xl text-gray-600">
            📞 <strong>Telefono:</strong>{" "}
            <a
              href="tel:+3451696976"
              className="text-blue-700 hover:underline"
            >
              +39 345 169 6976
            </a>
          </p>

          <p className="text-lg sm:text-xl text-gray-600">
            📧 <strong>Mail:</strong>{" "}
            <a
              href="mailto:antoninoambrogio@live.it"
              className="text-blue-700 hover:underline"
            >
              antoninoambrogio@live.it
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;