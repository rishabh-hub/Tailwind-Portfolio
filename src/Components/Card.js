import React from 'react'

const Card = () => {
  return (
    <div className='flex mx-auto max-w-md sm:w-1/3 sm:h-1/3  bg-orange-500 my-4 rounded-2xl'>
        <img className='w-1/3 sm:w-1/3 sm:h-1/3 rounded-tl-2xl rounded-bl-2xl' src="https://images.unsplash.com/photo-1593955808003-93f6151e6028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"/>
        <div className='w-full  sm:w-full flex flex-col relative'>
        <div className=' w-8/12 sm:w-10/12 mt-2 mx-2 px-1 text-2xl'>
            Hi there
        </div>
        <div className='w-full container py-2 my-2 flex justify-center absolute bottom-0'>
        <button className='bg-sky-500  w-10/12 py-1 sm:w-10/12 hover:bg-green-500 rounded-2xl text-xl text-white font-semibold border-cyan-300'>
            Button
        </button>
        </div>
        </div>
    </div>
  )
}

export default Card