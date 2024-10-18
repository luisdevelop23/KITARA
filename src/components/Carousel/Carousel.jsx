import React, { useState, useEffect } from "react";
import sandal1 from "../../assets/img/sandalia_azul.png";
import sandal2 from "../../assets/img/sandalia_marino.png";
import sandal3 from "../../assets/img/sandalia_negra.png";

import icoprev from "../../assets/iconos/flechaizquierda.svg";
import iconext from "../../assets/iconos/flechaderecha.svg";

const Carousel = () => {
  const cards = [
    {
      id: 1,
      img: sandal1,
      title: "SANDALIA AZUL",
      description: "PLANA SIN DEDO",
      price: "25€",
    },
    {
      id: 2,
      img: sandal2,
      title: "SANADALIA MARINO",
      description: "PLANA SIN DEDO",
      price: "25€",
    },
    {
      id: 3,
      img: sandal3,
      title: "SANDALIA NEGRA",
      description: "PLANA SIN DEDO",
      price: "25€",
    },
    {
      id: 4,
      img: sandal2,
      title: "SANADALIA MARINO",
      description: "PLANA SIN DEDO",
      price: "25€",
    },
    {
      id: 5,
      img: sandal3,
      title: "SANDALIA NEGRA",
      description: "PLANA SIN DEDO",
      price: "25€",
    },
    {
      id: 6,
      img: sandal1,
      title: "SANDALIA AZUL",
      description: "PLANA SIN DEDO",
      price: "25€",
    },
    {
      id: 7,
      img: sandal2,
      title: "SANADALIA MARINO",
      description: "PLANA SIN DEDO",
      price: "25€",
    },
    {
      id: 8,
      img: sandal1,
      title: "SANDALIA AZUL",
      description: "PLANA SIN DEDO",
      price: "25€",
    },
    {
      id: 9,
      img: sandal3,
      title: "SANDALIA NEGRA",
      description: "PLANA SIN DEDO",
      price: "25€",
    },
    {
      id: 10,
      img: sandal3,
      title: "SANDALIA NEGRA",
      description: "PLANA SIN DEDO",
      price: "25€",
    },
    {
      id: 11,
      img: sandal2,
      title: "SANADALIA MARINO",
      description: "PLANA SIN DEDO",
      price: "25€",
    },
    {
      id: 12,
      img: sandal3,
      title: "SANDALIA NEGRA",
      description: "PLANA SIN DEDO",
      price: "25€",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Estado para el modo móvil

  // Función para detectar el tamaño de la ventana
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Cambia a true si el ancho es menor que 768px
  };

  useEffect(() => {
    handleResize(); // Llama a la función al inicio
    window.addEventListener("resize", handleResize); // Agrega el listener

    return () => {
      window.removeEventListener("resize", handleResize); // Limpia el listener al desmontar
    };
  }, []);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + (isMobile ? 1 : 3)) % cards.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - (isMobile ? 1 : 3) + cards.length) % cards.length);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index * (isMobile ? 1 : 3));
  };

  return (
    <section className="flex flex-col mb-16 h-[80vh] md:h-auto">
      <div className="flex justify-center">
        <button onClick={prev} className="py-2">
          <img src={icoprev} className="w-[100px] h-[100px]" alt="" />
        </button>
        <div className="flex flex-col md:w-8/12">
          <h1 className="text-4xl hidden md:block pl-8 pb-6 futura-book font-bold">
            Nuestras Recomendaciones
          </h1>
          <h1 className="text-6xl text-center md:hidden  pb-20 futura-book font-bold">KITARA</h1>
          {/* container */}
          <div className="flex">
            {cards.slice(currentIndex, currentIndex + (isMobile ? 1 : 3)).map((card) => (
              <div key={card.id} className="px-10">
                <div className="border-2 border-black rounded-lg">
                  <div className="border-b-2 border-black">
                    <img src={card.img} className="" alt="" />
                  </div>
                  <div className="w-10/12 mx-auto flex flex-col py-2">
                    <h3 className="text-2xl font-bold text-left">{card.title}</h3>
                    <p className="text-md">{card.description}</p>
                    <p className="futura-bold font-bold text-3xl text-right">{card.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={next} className="py-2">
          <img src={iconext} className="w-[100px] h-[100px]" alt="" />
        </button>
      </div>

      <div className="flex justify-center mt-6">
        {Array.from({ length: Math.ceil(cards.length / (isMobile ? 1 : 3)) }).map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 mx-1 rounded-full cursor-pointer transition-all duration-300 ${
              index === Math.floor(currentIndex / (isMobile ? 1 : 3)) ? "bg-gray-800" : "bg-gray-500"
            }`}
            onClick={() => goToIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
