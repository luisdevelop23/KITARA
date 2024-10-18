import React from "react";

import img1 from "../../assets/img/sandalias_ planas.png";
import img2 from "../../assets/img/sandalias_con_cuña.png";
import img3 from "../../assets/img/pendientes_de_plata.png";
import img4 from "../../assets/img/sandalias_solas.png";
import img5 from "../../assets/img/sandalias_laia.png";
import img6 from "../../assets/img/pendientes_de_oro.png";

import icoflecha from "../../assets/iconos/flecha.svg";
const Category = () => {
  const cards = [
    {
      id: 1,
      img: img1,
      subtitle: "Sandalias planas",
    },
    {
      id: 2,
      img: img2,
      subtitle: "Sandalias con cuña",
    },
    {
      id: 3,
      img: img3,
      subtitle: "Pendiendtes de plata",
    },
    {
      id: 4,
      img: img4,
      subtitle: "Sandalias sola",
    },
    {
      id: 5,
      img: img5,
      subtitle: "Sandalias laia",
    },
    {
      id: 6,
      img: img6,
      subtitle: "Pendiendtes de oro",
    },
  ];

  return (
    <section className="mb-16 w-full">
      <h1 className="futura-book text-center text-6xl font-bold md:hidden">
        KITARA
      </h1>
      <div className="py-12">
        <h1 className="futura-book border-black py-4 text-center text-4xl font-bold md:w-3/12 md:border-b-2 md:text-right">
          Categorías
        </h1>
      </div>
      <div className="mx-auto grid w-9/12 md:grid-cols-3 gap-x-10">
        {cards.map((card) => (
          <div className="col-span-1">
            <div className="border-2 border-black">
              <img src={card.img} className="w-full" alt="" />
            </div>
            <div className="flex justify-between px-4">
              <h2 className="font-book text-lg">{card.subtitle}</h2>
              <a href="">
                <img className="w-8" src={icoflecha} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
