'use client'

import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }){
  return(
    <div className='bg-blue-50'>

      {/* nav bar */}
      <div 
        className='bg-purple-100 text-black items-center w-full flex flex-row h-16 px-4 shadow-md rounded-lg justify-between fixed top-0 z-50'
      >
        <image className='w-1/3' alt='Home' />
        <h1 className='w-1/3 text-center text-2xl'>Contentium</h1>
        <image className='w-1/3' alt='Profile' />
      </div>

      {/* dashboard content */}
      <div>
        {children}
      </div>
    </div>
  )
}
