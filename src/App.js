import React from "react";
import reviews from "./data";
import Header from "./components/Header";
import TestimonialContent from "./components/TestimonialContent";

  let infoData = reviews;


const App = () => {
  return <div className="w-[100vw] h-[100vh]  overflow-y-auto overflow-x-hidden bg-gray-500">


  <div className="w-11/12 max-w-[720px] mx-auto my-3 flex flex-col justify-center items-center">

      <div className="mt-10 select-none">
          <Header/>
        </div>

        <div className="mt-3  bg-sky-600 rounded-md  p-6 relative">
            <TestimonialContent infoData = {infoData}/>
        </div>
  </div>
  

  </div>;
};

export default App;
