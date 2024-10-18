import React from "react";
import img from "../../assets/img/foto_para_promoción.png";
 const Promo = () => {
  return (
    <section className="mb-16 flex w-full justify-center bg-gray-200 py-20">
      <div className="flex w-full flex-col md:w-6/12 md:flex-row">
        <div className="mx-auto w-9/12 md:w-6/12">
          <img src={img} className="border-2 border-black" alt="" />
        </div>
        <div className="mx-auto flex w-9/12 flex-col justify-center md:w-6/12">
          <div className="hidden md:block">
            <h2 className="futura-book text-2xl font-bold text-gray-800">
              TE DAMOS UN
            </h2>
            <h1 className="futura-book pb-2 text-xl font-bold md:text-6xl">
              CODIGO DE
            </h1>
            <h1 className="futura-book pb-2 text-xl font-bold md:text-6xl">
              DESCUENTO
            </h1>
            <h1 className="futura-book pb-2 text-xl font-bold md:text-6xl">
              ¡10% OFF EN
            </h1>
            <h1 className="futura-book pb-2 text-xl font-bold md:text-6xl">
              TU CUMPRA!
            </h1>
            <h1 className="futura-book pb-2 text-xl font-bold text-red-600 md:text-6xl">
              KITARA 10
            </h1>
          </div>
          <div className="block md:hidden text-center pt-8">
            <h2 className="futura-book  text-xl font-bold md:text-6xl">
              TE DAMOS UN
            </h2>
            <h1 className="futura-book  text-xl font-bold md:text-6xl">
              CODIGO DE DESCUENTO
            </h1>
            <h1 className="futura-book pb-2 text-xl font-bold md:text-6xl">
              ¡10% OFF EN TU CUMPRA!
            </h1>
            <h1 className="futura-book p-2 text-2xl font-bold w-8/12 mx-auto rounded-xl text-white bg-red-600 ">
              KITARA 10
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;