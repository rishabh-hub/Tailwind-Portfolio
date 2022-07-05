import React from 'react'
import {ReactComponent as GithubSVG} from "./Github.svg" 
import {ReactComponent as GmailSVG} from "./Gmail.svg" 
import {ReactComponent as LinkedinSVG} from "./Linkedin.svg" 

const Contact = () => {
  return (
    <div>
        <div className=' text-white/70 text-center space-x-10 text-2xl sm:text-3x sm:leading-[4rem] block tracking-wide font-sans leading-[3rem] '>
            <div className='flex space-x-10 justify-center '>
            <div className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300'>
            <GithubSVG/>
            </div>
            <div className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300'>
            <GmailSVG/>
            </div>
            <div className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300'>
            <LinkedinSVG/>
            </div>
            </div>
            {/* <button className='inline hover:opacity-100  hover:text-blue-500 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300'>Github</button>
            <button className='inline hover:opacity-100 hover:text-blue-500 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300'>LinkedIn</button>
            <button className='inline hover:opacity-100 hover:text-blue-500 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300'>Gmail</button> */}
        </div>
    </div>
  )
}

export default Contact