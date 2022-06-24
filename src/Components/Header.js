import React from 'react'

const Header = () => {

  const navClick=(text)=>
  {
    if(text==="dev")
    {
      
    }
    if(text==="otaku")
    {

    }
    console.log(text);
  }

  return (
    <div className='flex basis-1/3 space-x-12 flex-auto justify-center text-2xl font-sans  bg-black '>
        <div className='text-white px-1 my-5 opacity-50 hover:shadow-lg hover:shadow-blue-500/50 hover:opacity-100 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300'>
        <button onClick={()=>{navClick("dev")}}>
        Dev mode
        </button>
        </div>
        <div className='text-white px-1 my-5 opacity-50 hover:opacity-100 hover:shadow-lg hover:shadow-red-500/50 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300'>
        <button onClick={()=>{navClick("otaku")}}>
        Otaku mode
        </button>
        </div>

    </div>
  )
}

export default Header