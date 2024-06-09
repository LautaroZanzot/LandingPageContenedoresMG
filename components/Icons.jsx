import React, { useState, useEffect, useRef } from 'react';
import '../src/App.css'; // Import the CSS file with animations
import Imagen2 from '../src/assets/image2.png';
import Imagen4 from '../src/assets/image4.png';
import Imagen5 from '../src/assets/image5.png';
import Imagen1 from '../src/assets/image1.png';
import Imagen3 from '../src/assets/image3.png';
import Imagen6 from '../src/assets/image6.png';
import ImagenPTI from '../src/assets/image7.png';

function Icon({ image, title, description, index, visibleTextIndex, toggleTextVisibility, animationApplied }) {
  const animationClass = animationApplied ? (index % 2 === 0 ? 'animate-slide-left visible' : 'animate-slide-right visible') : '';

  return (
    <div className={`flex flex-col px-8 md:px-0 justify-center items-center relative container ${animationClass}`}>
      <img src={image} className="h-48 w-48" onClick={() => toggleTextVisibility(index)} />
      <h3
        className="text-black hover:text-red-900 cursor-pointer my-4 text-4xl text-center toggle-text"
        onClick={() => toggleTextVisibility(index)}
      >
        {title}
      </h3>
      <div className={`w-full md:w-2/3 text-black text-lg text-justify ${visibleTextIndex === index ? 'visible-text' : 'hidden-text'}`}>
        <p className="text-black text-lg md:text-justify">{description}</p>
      </div>
    </div>
  );
}


function Icons() {
  const iconsRef = useRef(null);
  const [visibleTextIndex, setVisibleTextIndex] = useState(null);
  const [animationsApplied, setAnimationsApplied] = useState(Array(5).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const elements = iconsRef.current.querySelectorAll('.container');
      elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight * 0.75 && !animationsApplied[index]) {
          setAnimationsApplied((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [animationsApplied]);

  const toggleTextVisibility = (index) => {
    setVisibleTextIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const iconsData = [
    {
      image: Imagen2,
      title: 'Mantenimiento y Reparación de  contenedores',
      description:
        'Expertos en reparación de contenedores refrigerados (Reefer) y de carga seca de todas las marcas, incluyendo reparación de estructura. Somos un equipo altamente capacitado que ofrecemos soluciones confiables. Confía en nosotros para mantener tu cadena de frío en perfecto estado.',
    },
    {
      image: Imagen4,
      title: 'Prueba previaje PTI',
      description: (
        <div>
        <img src={ImagenPTI} alt="Imagen de la prueba previaje PTI" />
        <p>
          La Inspección PreViaje (PTI Pre Trip Inspection) es esencial para verificar el rendimiento del contenedor refrigerado antes de cada viaje. Realizada antes de cargar cualquier carga térmica, esta prueba identifica posibles problemas en el funcionamiento del equipo.
        </p>
      </div>
      )
    },
    {
      image: Imagen5,
      title: 'Venta de Contenedores',
      description:
        'Somos especialistas en la venta de contenedores refrigerados (Reefer) y de Carga Seca. Ofrecemos contenedores refrigerados operativos y no operativos, con garantía de funcionamiento y servicio de post venta.',
    },
    {
      image: Imagen1,
      title: 'Star Wash',
      description:
        'Realizamos hidrolavadoras de agua fría/caliente, conn productos aprobados.',
    },
    {
      image: Imagen3,
      title: 'Inspección de Contenedores',
      description:
        'Determinacion de daños y preventivos realizados por inspectores IICL (Institute of International Container Lessors)',
    },
    {
      image: Imagen6,
      title: 'Transporte',
      description:
        'Transporte a todo el país con o sin grúa hidráulica',
    },
  ];

  return (
    <>
      <div ref={iconsRef} className="h-full bg-white flex flex-col space-y-16 py-8 md:py-16 justify-center items-center m-auto">
        {iconsData.map((icon, index) => (
          <Icon
            key={index}
            index={index}
            image={icon.image}
            title={icon.title}
            description={icon.description}
            visibleTextIndex={visibleTextIndex}
            toggleTextVisibility={toggleTextVisibility}
            animationApplied={animationsApplied[index]}
          />
        ))}
      </div>
    </>
  );
}

export default Icons;