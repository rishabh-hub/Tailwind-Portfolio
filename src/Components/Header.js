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
    <div className='flex basis-1/3 space-x-12 flex-auto justify-center sm:text-2xl text-xl font-sans  bg-black '>
        <div className='text-white sm:px-3 sm:py-2 px-2 py-2 my-5 opacity-50 hover:shadow-lg hover:shadow-blue-500/50 hover:ring-2 rounded-xl hover:ring-blue-500 hover:opacity-100 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300' onClick={()=>{navClick("dev")}}>
        Dev mode
        </div>
        <div className='text-white sm:px-3 sm:py-2 px-2 py-2 my-5 opacity-50 hover:opacity-100 hover:shadow-lg hover:shadow-red-500/50 hover:ring-2 hover:ring-red-500 rounded-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300' onClick={()=>{navClick("otaku")}}>
        Otaku mode
        </div>

    </div>
  )
}

export default Header