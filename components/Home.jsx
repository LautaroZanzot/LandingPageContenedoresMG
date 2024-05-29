import { motion } from "framer-motion";
import Contenedores from '../src/assets/contenedores.png';
function Home() {
  return (
    <>
      <div className="h-600px md:h-screen">
        <div
          style={{
            backgroundImage: `url(${Contenedores})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-full"
        >
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation when component mounts
          transition={{ duration: 1 }} // Animation duration
          className="absolute inset-x-0 mt-32 flex justify-center items-center"
        >
          <div className="max-w-md md:mx-auto mt-16 mx-8 md:ml-72 rounded-lg z-20" style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)', padding: '20px' }}>
            <h2 className="text-3xl mx-4 md:text-5xl text-black font-bold leading-tight">
              Mantenimiento a Contenedores Reefers y Carga Seca
            </h2>
            <p className="md:text-xl mx-4 text-grey font-semibold text-left">
              Bienvenido a Contenedores MG, tu socio de confianza para el mantenimiento de contenedores refrigerados.
              Nos enorgullecemos de brindar un servicio de clase mundial que garantiza un rendimiento óptimo  de su equipo de refrigeración.
              Nuestro equipo altamente calificado tiene años de experiencia en la industria y está comprometido en mantener
              su cadena de frío intacta y sus operaciones funcionando sin problemas con soluciones personalizadas y eficientes.
              Vea cómo puede proteger sus productos y optimizar sus procesos.
            </p>
          </div>
        </motion.div>
        </div>
      </div>
    </>
  );
}

export default Home;
