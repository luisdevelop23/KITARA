import React from "react";
import lupa from "../../assets/iconos/lupa.svg";
import guardar from "../../assets/iconos/guardar.svg";
import carrito from "../../assets/iconos/carrito.svg";
const NavMovile = () => {
    return (
      <div className="fixed bottom-0 h-[10vh] w-full bg-black md:hidden">
        <div className="flex justify-around items-center h-full  top-0">
          <div>
            <a href="">
                
              <img src={guardar} alt="Guardar" className="text-white w-8" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={lupa} alt="Buscar" className="text-white w-8" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={carrito} alt="Carrito" className="text-white w-8" />
            </a>
          </div>
        </div>

      </div>
    );
  };

export default NavMovile;
