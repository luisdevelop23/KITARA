import React from 'react'
import img1 from '../../assets/img/siente_la_diferencia/1.png'
import img2 from '../../assets/img/siente_la_diferencia/2.png'
import img3 from '../../assets/img/siente_la_diferencia/3.png'
import img4 from '../../assets/img/siente_la_diferencia/4.png'
import img5 from '../../assets/img/siente_la_diferencia/5.png'
import img6 from '../../assets/img/siente_la_diferencia/6.png'
import img7 from '../../assets/img/siente_la_diferencia/7.png'
import img8 from '../../assets/img/siente_la_diferencia/8.png'
const Catalog = () => {
  return (
    <section className='w-full mb-16'>
          <h1 className="futura-book text-center text-6xl font-bold md:hidden">
        KITARA
      </h1>
        <h1 className='text-3xl font-bold futura-bold text-center py-4 '>SIENTE LA DIFERENCIA, VIVE LA EXPERIENCIA</h1>
        <div className='w-9/12 mx-auto grid grid-cols-2 md:grid-cols-4'>
        <div className='col-span-1 border-2 border-black'>
            <img src={img1} className='' alt="" />
        </div>
        <div className='col-span-1 border-2 border-black'>
            <img src={img2} className='' alt="" />
        </div>
        <div className='col-span-1 border-2 border-black'>
            <img src={img3} className='' alt="" />
        </div>
        <div className='col-span-1 border-2 border-black'>
            <img src={img4} className='' alt="" />
        </div>
        <div className='col-span-1 border-2 border-black'>
            <img src={img5} className='' alt="" />
        </div>
        <div className='col-span-1 border-2 border-black'>
            <img src={img6} className='' alt="" />
        </div>
        <div className='col-span-1 border-2 hidden md:block border-black'>
            <img src={img7} className='' alt="" />
        </div>
        <div className='col-span-1 border-2 border-black hidden md:block'>
            <img src={img8} className='' alt="" />
        </div>
        </div>
    </section>
  )
}

export default Catalog