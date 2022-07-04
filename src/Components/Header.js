import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  
  const selectDecide=(text)=>
  {
    if(text==="dev")
    {
      setDevButton("text-white sm:px-3 sm:py-2 px-2 py-2 mt-8 mb-4 shadow-lg shadow-blue-500/50 ring-2 rounded-xl ring-blue-500 opacity-100 scale-110 -translate-y-1  duration-300");
      setOtakuButton("text-white sm:px-3 sm:py-2 px-2 py-2 mt-8 mb-4 opacity-50 hover:opacity-100 hover:shadow-lg hover:shadow-red-500/50 hover:ring-2 hover:ring-red-500 rounded-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300");
    }
    if(text==="otaku")
    {
      setOtakuButton("text-white sm:px-3 sm:py-2 px-2 py-2 mt-8 mb-4 shadow-lg shadow-red-500/50 ring-2 rounded-xl ring-red-500 opacity-100 scale-110 -translate-y-1  duration-300");
      setDevButton("text-white sm:px-3 sm:py-2 px-2 py-2 mt-8 mb-4 opacity-50 hover:opacity-100 hover:shadow-lg hover:shadow-blue-500/50 hover:ring-2 hover:ring-blue-500 rounded-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300")
    }
    console.log(text);
  }

  const [devbutton, setDevButton] = useState("text-white sm:px-3 sm:py-2 px-2 py-2 mt-8 mb-4 shadow-lg shadow-blue-500/50 ring-2 rounded-xl ring-blue-500 opacity-100 scale-110 -translate-y-1  duration-300");
  const [otakuButton, setOtakuButton] = useState("text-white sm:px-3 sm:py-2 px-2 py-2 mt-8 mb-4 opacity-50 hover:opacity-100 hover:shadow-lg hover:shadow-red-500/50 hover:ring-2 hover:ring-red-500 rounded-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300");

  return (
    <nav>
    <div className='flex basis-1/3 space-x-12 flex-auto justify-center sm:text-2xl text-xl font-sans'>
        <button className={devbutton} onClick={()=>{selectDecide("dev")}}>
        <Link to="/" >
        Dev mode
        </Link>
        </button>
        <button className={otakuButton} onClick={()=>{selectDecide("otaku")}}>
        <Link to="/otakumode">
        Otaku mode
        </Link>
        </button>

    </div>
    </nav>
  )
}

export default Header