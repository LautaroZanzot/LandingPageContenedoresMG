import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BoxComponent = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [showSpecialization, setShowSpecialization] = useState(false);
  const specializationControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      specializationControls.start({ opacity: 1, y: 0 });
    }
  }, [inView, specializationControls]);

  const handleBoxClick = (boxId) => {
    setSelectedBox((prevSelectedBox) =>
      prevSelectedBox === boxId ? null : boxId
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const triggerOffset = windowHeight / 2; // Adjust this value as needed

      if (scrollPosition > triggerOffset) {
        animateBoxes();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animateBoxes = () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box, index) => {
      setTimeout(() => {
        box.style.opacity = 1;
        box.style.transform = "translateX(0)";
      }, index * 200); // Adjust the delay time as needed
    });
  };

  // Define content variables
  const box1Content = (
    <div>
      <h1 className="text-xl relative top-10 md:top-20 md:text-3xl text-center">Defensa de la competencia</h1>
    </div>
  );

  const box2Content = (
    <div>
      <h1 className="text-xl relative text-white top-10 md:top-20 md:text-3xl text-center">Defensa del consumidor</h1>
    </div>
  );

  const box3Content = (
    <div>
      <h1 className="text-xl relative md:top-20 md:text-3xl text-center">Desarrollo de proyectos, financiamiento & infrastructura</h1>
    </div>
  );

  const boxData = [
    { id: 1, content: box1Content, bgColor: "gray" },
    { id: 2, content: box2Content, bgColor: "blue" },
    { id: 3, content: box3Content, bgColor: "orange" },
    // Add more box data with content variables
  ];

  return (
    <div className="bg-black py-16">
      <div className="text-center my-16">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-semibold text-white"
        >
          Nos especializamos en:
        </motion.h2>
      </div>
      <div className="flex flex-wrap mx-8 md:mx-32 h-full relative">
        {boxData.map((box, index) => (
          <motion.div
            key={box.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? "-50%" : "50%", scale: 1 }} // Initial position and size
            animate={{
              opacity: 1,
              x: 0,
              scale: selectedBox === box.id ? 1.2 : 1 // Scale up the selected box
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Animation duration and delay
            className={`w-full md:w-1/3 h-48 md:h-96 bg-${box.bgColor}-box ${
              selectedBox === box.id ? "maximized" : "normal"
            } transition-all duration-500 ease-in-out box`}
            onClick={() => handleBoxClick(box.id)}
          >
            <div className="border border-gray-300 h-full w-full flex items-center justify-center cursor-pointer">
              <div>{box.content}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BoxComponent;