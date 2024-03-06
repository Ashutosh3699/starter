import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { SiNamebase } from "react-icons/si";


const Content = (props) => {

    // console.log(props.userData);
    let info = props.userData;

  return (
    <div className='flex relative h-[270px] my-2 select-none'>

        <div className='w-[25%] rounded-full overflow-hidden  absolute -top-16 -left-4 shadow-[15px_-10px_0px_0px] shadow-[#54ccff9f]'>
            <img src={`${info.image}`} alt=''/>
        </div>

        <div className='w-[75%]  flex justify-center flex-col items-center relative left-32'>
            <div className='flex flex-col gap-2 items-center my-3'>
                <div className='flex gap-2 justify-center items-center text-white font-sans font-bold text-2xl'>
                    <SiNamebase />
                    <h3>{info.name}</h3>
                </div>
                <p className=' text-lg font-semibold text-gray-600'>{info.job}</p>
            </div>
            <div className=' font-semibold text-yellow-50 text-lg flex flex-col items-center'>
                <FaQuoteLeft />
                <p>{info.text}</p>
                <FaQuoteRight />
            </div>

        </div>

    </div>
  )
}

export default Content