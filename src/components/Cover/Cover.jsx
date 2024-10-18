import React from "react";
import coverImg from "../../assets/img/sandalias_incio.png";
const Cover = () => {
  return (
    <section className="flex h-[80vh] border-b-2 w-full mb-16 ">
      <div className="w-6/12  md:flex items-center justify-center hidden ">
        <div className="w-8/12">
          <h1 className="text-7xl futura-book font-bold pb-3">
            SANDALIAS KITARA
          </h1>
          <h2 className="text-2xl pb-8">
            Descubre nuestra amplia selección de sandalias y complementos para
            mujeres.
          </h2>
          <a className="py-3 px-9 futura-bold border-2 border-black" href="">
            ¡COMPRA AHORA!
          </a>
        </div>
      </div>
      <div className="md:w-6/12 w-full bg-red-300 ">
        <img className="img-cover mx-auto w-full" src={coverImg} alt="" />
      </div>
      {/* Sobrepuesto */}
      <div></div>
    </section>
  );
};

export default Cover;
