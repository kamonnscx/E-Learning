// import React from 'react'
import EN from '../images/Software-engineer.png'
import Link from 'next/link';
// // import Data from '../images/Datastructure.png'
import Network from "../images/network.png"
import Parallel from "../images/parallel-programming.webp"
import Xml from "../images/XML.png"


import React from 'react'

function cards() {
  return (
    <div className='flex item-center justify-center  mx-auto gap-20 container group'>
      <div className='grid grid-cols-1 gap-12  md:grid-cols-2 lg:grid-cols-3'>

        <Link href="/components/Coursedetail" className='card bg-white group-hover:blur-sm shadow-xl shadow-blue-100/50  hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 cursor-pointer'>
          <div className='p-5 flex flex-col'>
            <div className='rounded-xl overflow-hidden'>
              <img className=' ' src={Network.src} alt="En" />
            </div>
            <h4 className='text-xl font-bold mt-3'>322371 Web Desigh Technologies</h4>
            <p className='text-sm leading-7 my-3  '>เทคโนโลยีสารสนเทศ ปริญญาตรี</p>
            <button className='p-8 bg-[#1373BB] text-white py-2 rounded-lg  mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>
            เริ่มเรียน
            </button>

          </div>

        </Link>
        <div className='card bg-white group-hover:blur-sm shadow-xl shadow-blue-100/50  hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 cursor-pointer'>
          <div className='p-5 flex flex-col'>
            <div className='rounded-xl overflow-hidden'>
              <img className=' ' src={EN.src} alt="En" />
            </div>
            <h4 className='text-xl font-bold mt-3'>322371 Software engineering</h4>
            <p className='text-sm leading-7 my-3  '>เทคโนโลยีสารสนเทศ ปริญญาตรี</p>
            <button className='p-8 bg-[#1373BB] text-white py-2 rounded-lg  mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>
            เริ่มเรียน
            </button>

          </div>

        </div>
        <div className='card bg-white group-hover:blur-sm shadow-xl shadow-blue-100/50  hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 cursor-pointer'>
          <div className='p-5 flex flex-col'>
            <div className='rounded-xl overflow-hidden'>
              <img className=' ' src={Parallel.src} alt="En" />
            </div>
            <h4 className='text-xl font-bold mt-3'>322371 Palallel programming</h4>
            <p className='text-sm leading-7 my-3  '>เทคโนโลยีสารสนเทศ ปริญญาตรี</p>
            <button className='p-8 bg-[#1373BB] text-white py-2 rounded-lg  mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>
              เริ่มเรียน
            </button>

          </div>

        </div>

      </div>



      {/* <Link href="/components/Coursedetail">
      <div className='bg-white p-8 rounded-xl group-hover:blur-sm shadow-xl shadow-blue-100/50  hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 cursor-pointer '>

            <img className='h-40 wx-[40em] rounded-xl ' src={Network.src} alt="En" />
            <h4 className='text-xl font-bold mt-5'>322371 Web Desigh Technologies</h4>
            <p className='text-sm leading-7 my-3  '>เทคโนโลยีสารสนเทศ ปริญญาตรี</p>
            <button className='p-8 bg-[#1373BB] text-white  py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'> 
              ดูเพิ่มเติม
            </button>
          </div>
      </Link>
          
          <div className='bg-white p-8 rounded-xl shadow-xl shadow-blue-100/50  group-hover:blur-sm hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 cursor-pointer  '>
            <img className='h-40 w-auto rounded-xl ' src={EN.src} alt="En" />
            <h4 className='text-xl font-bold mt-5'> 322371 Software engineering</h4>
            <p className='text-sm leading-7 my-3  '>เทคโนโลยีสารสนเทศ ปริญญาตรี</p>
            <button className='p-8 bg-[#1373BB] text-white py-2 rounded-lg  mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'> 
              ดูเพิ่มเติม
            </button>
          </div>
          <div className='bg-white p-8 rounded-xl group-hover:blur-sm shadow-xl shadow-blue-100/50  hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 cursor-pointer '>
            <img className='h-40 wx-auto rounded-xl ' src={Parallel.src} alt="En" />
            <h4 className='text-xl font-bold mt-5'> 322371 Palallel programming</h4>
            <p className='text-sm leading-7 my-3  '>เทคโนโลยีสารสนเทศ ปริญญาตรี</p>
            <button className='p-8 bg-[#1373BB] text-white  py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'> 
              ดูเพิ่มเติม
            </button>
          </div> */}
    </div>
  )
}

export default cards