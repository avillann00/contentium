'use client'

import { ReactNode } from 'react'
import { FaUser } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

export default function Layout({ children }: { children: ReactNode }){
  const router = useRouter()

  return(
    <div className='bg-blue-50'>

      {/* nav bar */}
      <div 
        className='bg-purple-100 text-black items-center w-full flex flex-row h-16 px-4 shadow-md rounded-lg justify-between fixed top-0 z-50'
      >
        <image className='w-1/3' />
        <h1 className='w-1/3 text-center text-2xl' onClick={() => router.push('/dashboard')}>Contentium</h1>
        <FaUser size={24} color='gray' className='w-1/3' onClick={() => router.push('/dashboard/profile')} />
      </div>

      {/* dashboard content */}
      <div>
        {children}
      </div>
    </div>
  )
}
