import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Form() {
  const [isInView, setIsInView] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    comentario: "",
  });
  const [isSent, setIsSent] = useState(false); // State for success message
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Apply input validation based on the input name
    switch (name) {
      case "nombre":
        updatedValue = value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and whitespaces
        break;
      case "telefono":
        updatedValue = value.replace(/[^+\d]/g, ""); // Allow only '+' and numbers
        break;
      case "email":
        // Validating email format using a simple regex
        if (value.length <= 40) updatedValue = value;
        break;
      case "comentario":
        if (value.length <= 200) updatedValue = value;
        break;
      default:
        break;
    }

    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== "");

    if (allFieldsFilled) {
      // Send email using mailto: link
      const { nombre, telefono, email, comentario } = formData;
      const mailtoLink = `mailto:youremail@example.com?subject=Form Submission&body=Nombre y Apellido: ${nombre}%0ATeléfono: ${telefono}%0AEmail: ${email}%0AComentario: ${comentario}`;
      window.location.href = mailtoLink;

      // Show success message
      setIsSent(true);

      // Clear form after 3 seconds
      setTimeout(() => {
        setIsSent(false);
        setFormData({
          nombre: "",
          telefono: "",
          email: "",
          comentario: "",
        });
      }, 3000);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <div className="form-bg py-16">
        <div className="w-5/6 md:w-4/5 m-auto">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
            transition={{ duration: 1 }} // Animation duration
            className="text-3xl font-bold text-white text-center"
          >
            Si quieres conocer más sobre nuestros productos y servicios, contáctanos.
          </motion.p>
        </div>
        <div className="flex justify-center">
          <form className=" w-4/5 md:w-full max-w-lg mt-8" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="nombre" className="block text-lg font-medium text-white mb-2">
                Nombre y apellido <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="telefono" className="block text-lg font-medium text-white mb-2">
                Teléfono <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="comentario" className="block text-lg font-medium text-white mb-2">
                Comentario <span className="text-red-600">*</span>
              </label>
              <textarea
                id="comentario"
                name="comentario"
                value={formData.comentario}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg h-32 resize-none focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-1/4 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      {isSent && (
        <div className="fixed bottom-0 left-0 right-0 bg-green-500 text-white py-2 z-50 text-center">
          Enviado satisfactoriamente
        </div>
      )}
    </>
  );
}

export default Form;
