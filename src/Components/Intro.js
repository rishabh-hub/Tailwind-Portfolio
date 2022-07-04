import React from 'react'
import "../index.css"
import {ReactComponent as IndiaSVG} from "./India.svg"

const Intro = () => {
  return (
    <div className='relative h-5/6'> 
    {/* Source for how to animate: https://vanntile.com/blog/composited-typing-animation#the-starting-point */}
        <h1 className="ml-4 my-4 text-white text-4xl sm:text-5xl sm:leading-[4rem] tracking-wide font-sans leading-[3rem] overflow-hidden">
  hi, I&apos;m 
  <br className="block" />
  <span className="relative">
    <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-blue-500">
      Rishabh 
      <span className="text-3xl sm:text-5xl">👋</span>
    </span>
    {/* <span className='after:content-[""] [font-family:monospace] after:block after:absolute after:w-2 after:h-full
after:dark:bg-gray-100 after:bg-gray-900 after:animate-cursor absolute left-0 inline-block w-full bg-white
dark:bg-black -bottom-0 -top-1 animate-type will-change-transform'></span> */}
    <span
      className="cursor absolute -bottom-0 left-0 -top-0 sm:top-2 inline-block h-full bg-black w-full animate-type will-change"
    ></span>
  </span>
</h1>

<div className='ml-4 my-4 text-white/70 text-2xl sm:text-3xl sm:leading-[4rem] tracking-wide font-sans leading-[3rem]'>
  <div className='inline-block '>
  Currently located in Lucknow, India
  <svg className='inline-block h-full w-8 mb-1 ml-2'>
  <IndiaSVG/>
  </svg>
  </div>
</div>

<div className=' text-white/70 text-2xl sm:text-3xl sm:leading-[4rem] tracking-wide font-sans leading-[3rem] absolute bottom-2'>
<div className='inline-block mx-4'>Github</div>
<div className='inline-block mx-4'>LinkedIn</div>
<div className='inline-block'>Gmail</div>


</div>
    </div>
  )
}

export default Intro