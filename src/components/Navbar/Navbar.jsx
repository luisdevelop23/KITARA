import React from "react";
import icoCard from "../../assets/iconos/carrito.svg";
const Navbar = () => {
  return (
    <>
     <h1 className="futura-book text-center text-6xl font-bold md:hidden absolute w-full pt-6">
        KITARA
      </h1>
    <div className="w-full bg-nav md:flex py-6 shadow-2xl absolute hidden ">
      <div className="w-6/12 flex justify-between items-center px-7">
        <h1 className=" text-5xl futura-book font-bold  tracking-widest">KITARA</h1>
        <a href="#">
          <img className="w-[50px]" src={icoCard} alt="" />
        </a>
      </div>
      <div className="w-6/12 flex justify-end items-center">
        <a className="futura-book font-bold px-4 text-xl" href="">SANDALIAS</a>
        <a className="futura-book font-bold px-4 text-xl" href="">COMPLEMENTOS</a>
      </div>
    </div>
    </>
  );
};

export default Navbar;
