import React from 'react'
import {ReactComponent as IndiaSVG} from "./India.svg"

const Location = () => {
  return (
    <div>
    <div className='ml-4 mb-4 mt-5 text-white/70 text-2xl sm:text-3xl sm:leading-[4rem] text-left tracking-wide font-sans'>
        <div className='inline'>
            Currently located in Lucknow, India
        <svg className='inline mb-1 ml-2 h-8 w-8'>
            <IndiaSVG/>
        </svg>
        </div>
    </div>
    </div>
  )
}

export default Location