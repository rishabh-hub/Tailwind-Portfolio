import React from 'react'
import "../index.css"

const Intro = () => {
  return (
    <div className=''> 
    {/* Source for how to animate: https://vanntile.com/blog/composited-typing-animation#the-starting-point */}
        <h1 className="ml-4 my-4 text-white text-4xl sm:text-5xl sm:leading-[4rem] tracking-wide font-sans leading-[3rem]">
  hi, I&apos;m <br className="block md:hidden" />
  <span className="relative">
    <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-blue-500">
      Rishabh 
      <span className="text-3xl sm:text-5xl">👋</span>
    </span>
    <span
      className="cursor absolute -bottom-0 left-0 -top-1 inline-block bg-black w-full animate-type will-change"
    ></span>
  </span>
</h1>
    </div>
  )
}

export default Intro