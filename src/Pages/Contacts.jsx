import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contacts = () => {
  return (
    <section className="min-h-[calc(100vh-72px)] bg-gradient-to-b from-[#0b0f13] to-[#1f242b] flex flex-col justify-center items-center px-6 ">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold mb-8 text-gray-600">Contattami</h2>

        <div className="flex flex-row gap-10 justify-center items-center text-gray-700">
          <a
            href="https://github.com/NinoAmbrogio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-transform transform hover:scale-110"
          >
            <FaGithub size={96} />
          </a>

          <a
            href="https://www.linkedin.com/in/antonino-ambrogio-185450326/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={96} />
          </a>

          <a
            href="mailto:antoninoambrogio@live.it"
            className="hover:text-red-600 transition-transform transform hover:scale-110"
          >
            <FaEnvelope size={96} />
          </a>

          <a
            href="tel:+393511234567"
            className="hover:text-green-600 transition-transform transform hover:scale-110"
          >
            <FaPhone size={96} />
          </a>
        </div>

        <p className="mt-6 text-xl text-gray-600">
          📞 <strong>Telefono:</strong>{" "}
          <a
            href="tel:+3451696976"
            className="text-blue-700 hover:underline"
          >
           
            +39 3451696976
          </a>
        
          
        </p>
        <p className="mt-6 text-xl text-gray-600">
          📧 <strong>Mail:</strong>{" "}
          <a
          type="mail"
            href="antoninoambrogio@live.it"
            className="text-blue-700 hover:underline"
          >
           
            antoninoambrogio@live.it
          </a>
        
          
        </p>
      </div>
    </section>
  );
};

export default Contacts;