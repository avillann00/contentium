'use client'

import { useState } from 'react'

export default function Pro(){
  const [isPro, setIsPro] = useState(false)

  return(
    <div className='w-screen h-screen bg-blue-50'>
      <h1 className='text-black text-center text-3xl mt-15'>Pro</h1>
      <div className='flex flex-col text-black items-center mt-30'>
        {
          isPro ? 
          (<h1>You are already a pro!</h1>) 
            : 
          (<button className='border border-black rounded-lg shadow-md px-2 py-2 bg-white hover:bg-green-300'>Become a pro!</button>)
        }
      </div>
    </div>

  )
}
