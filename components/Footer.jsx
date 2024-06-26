import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImagenFooter from '../src/assets/imagenFooter.png';

function Footer() {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  return (
    <>

          <div className="w-full flex justify-center pt-8 mx-auto">
            <motion.div
              //initial={{ opacity: 0, y: 20 }} // Initial animation state
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
              transition={{ duration: 1, delay: 0.5 }} // Animation duration with a delay
            >
              <img src={ImagenFooter} alt="MG Refrigeración" className="w-full" />
            </motion.div>
          </div>


      <div className="footer-bg w-full flex justify-center items-center">
        <p className="text-xl text-gray-200">MG Contenedores Maritimos 2024 | Todos los derechos reservados</p>
      </div>
    </>
  );
}

export default Footer;
