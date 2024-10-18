import React from "react";
import facebook from '../../assets/iconos/facebook.svg'
import instagram from '../../assets/iconos/instagram.svg'
const Footer = () => {
  return (
    <section className=" h-[30vh] w-full bg-black  text-white hidden md:block">
      <div className="mx-auto w-10/12 flex pt-12">
        <div className="w-5/12 px-8">
          <div>
            <h1 className="futura-book text-8xl font-bold">KITARA</h1>
            <h2 className="futura-book text-2xl font-bold">
              Calzado con personalidad
            </h2>
          </div>
          <div className="flex justify-between">
            <p>Pliticas de cancelación de pedidos, devolucion y reemboso</p>
            <a className="bg-white px-8 py-2 font-bold text-black" href="">
              LEER MÁS
            </a>
          </div>
        </div>
        <div className="w-7/12 flex">
          <div className="flex w-4/12 flex-col">
            <div>
              <h2 className="font-bold text-lg">SIGUENOS</h2>
              <div className="flex gap-x-4 py-4">
                <a href=""><img className="w-7" src={facebook} alt="" /></a>
                <a href=""><img className="w-7" src={instagram} alt="" /></a>
              </div>
            </div>
            <h2 className="font-bold text-lg">CONTÁCTATE</h2>
            <p className="py-3 underline">info@sandaliaskitara.com</p>
          </div>
          <div className="flex w-4/12 flex-col">
            <h2 className="font-bold text-lg">LOCACIÓN</h2>
            <p className="mr-20 py-2">Calle del pilar 11 Primero E Seseña toledo</p>
          </div>
          <div className="flex w-4/12 flex-col">
            <h2 className="font-bold text-lg">PÁGINAS</h2>
            <p className="py-2">Home</p>
            <p className="py-2">Productos</p>
            <p className="py-2">Distribuidores</p>
            <p className="py-2">Contactos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
