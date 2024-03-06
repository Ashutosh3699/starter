import React, { useState } from 'react';
import Content from './Content';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const TestimonialContent = (props) => {

    const userInfo = props.infoData;
    const [index,setIndex] = useState(0);
    let [userData,setDataUser] = useState(userInfo[index]);

    function leftShiftHandler(){

        if(index-1 < 0){
            setIndex(userInfo.length-1);
        }
        else{
            setIndex(index-1);
        }

        setDataUser(userInfo[index]);
    }

    function rightShiftHandler(){

        if(index+1 >= userInfo.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }

        setDataUser(userInfo[index]);
    }
    
    function supriseHandler(){

        let pos = Math.floor(Math.random()*( 0 + userInfo.length)) + 0;
        setIndex(pos);
        setDataUser(userInfo[index]);
    }

    // setInterval(rightShiftHandler,5000);

  return (
    <div className='flex flex-col justify-center items-center'>


        <Content userData= {userData}/>
     

        <div className='flex gap-4 justify-center items-center my-3'>
            <div onClick={leftShiftHandler} className=' p-3 text-2xl text-white cursor-pointer'>
            <FaChevronLeft />
            </div>

            <div onClick={rightShiftHandler} className=' p-3 text-2xl text-white cursor-pointer'>
            <FaChevronRight />
            </div>
        </div>
        <button onClick={supriseHandler} className='py-3 px-6 bg-sky-700 rounded-md  select-none'>Suprise me</button>

    </div>
  )
}

export default TestimonialContent