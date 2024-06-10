import { motion } from "framer-motion";
import Contenedores from '../src/assets/contenedores2.jpg';
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
          <div className="max-w-md md:mx-auto mt-16 mx-8 md:ml-72 rounded-lg z-20" style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)', padding: '15px' }}>
          <h2 className="text-4xl md:text-5xl text-black font-bold leading-tight mx-4">
            Service a Contenedores Reefers
          </h2>
            <p className="md:text-2xl mx-4 text-grey font-semibold text-left">
            En MG Contenedores Maritimos, sabemos lo importante que es mantener tus productos a la temperatura adecuada. 
            Nos especializamos en el mantenimiento y reparación de contenedores refrigerados (reefers). 
            Nuestro equipo de expertos se asegura de que tus contenedores funcionen perfectamente, protegiendo lo que más valoras. 
            </p>
          </div>
        </motion.div>
        </div>
      </div>
    </>
  );
}

export default Home;
