// import React from 'react'
import EN from '@/pages/images/Software-engineer.png'

// // import Data from '../images/Datastructure.png'
import WebS from "@/pages/images/Web_Services.jpeg"
import Java from "@/pages/images/Java.png"
import Com from "@/pages/images/Computational.png"


import React from 'react'

function cards() {
  return (
    <div className='flex item-center justify-center  mx-auto gap-20 container group'>
           <div className='grid grid-cols-1 gap-12  md:grid-cols-2 lg:grid-cols-3'>
        <div className='card bg-white group-hover:blur-sm shadow-xl shadow-blue-100/50  hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 cursor-pointer'> 
        <div className='p-5 flex flex-col'>
          <div className='rounded-xl overflow-hidden'>
          <img className=' ' src={WebS.src} alt="En" />
          </div>
          <h4 className='text-xl font-bold mt-16'>322371 Web Services Methodology</h4>
            <p className='text-sm leading-7 my-3  '>วิทยาการคอมพิวเตอร์ ปริญญาตรี ภาคต้น</p>
            <button className='p-8 bg-[#1373BB] text-white py-2 rounded-lg  mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'> 
              ดูเพิ่มเติม
            </button>
       
        </div>

        </div>
        <div className='card bg-white group-hover:blur-sm shadow-xl shadow-blue-100/50  hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 cursor-pointer'> 
        <div className='p-5 flex flex-col'>
          <div className='rounded-xl overflow-hidden'>
          <img className=' ' src={Java.src}alt="En" />
          </div>
          <h4 className='text-xl font-bold mt-3'>322371 Programming in java</h4>
            <p className='text-sm leading-7 my-3  '>วิทยาการคอมพิวเตอร์ ปริญญาตรี ภาคต้น</p>
            <button className='p-8 bg-[#1373BB] text-white py-2 rounded-lg  mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'> 
              ดูเพิ่มเติม
            </button>
       
        </div>

        </div>
        <div className='card bg-white group-hover:blur-sm shadow-xl shadow-blue-100/50  hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 cursor-pointer'> 
        <div className='p-5 flex flex-col'>
          <div className='rounded-xl overflow-hidden'>
          <img className=' '  src={Com.src} alt="En" />
          </div>
          <h4 className='text-xl font-bold mt-3'>322371 computational science</h4>
            <p className='text-sm leading-7 my-3  '>วิทยาการคอมพิวเตอร์ ปริญญาตรี ภาคต้น</p>
            <button className='p-8 bg-[#1373BB] text-white py-2 rounded-lg  mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'> 
              ดูเพิ่มเติม
            </button>
       
        </div>

        </div>

       </div>
        </div>
  )
}

export default cards