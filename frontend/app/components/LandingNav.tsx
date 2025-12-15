'use client'

import { useRouter } from 'next/navigation'

export default function LandingNav(){
  const router = useRouter()

  return(
    <nav className='h-16 px-4 fixed top-0 z-50 min-w-screen shadow-md rounded-lg flex flex-row justify-between bg-purple-100 items-center'>
      <image className='w-1/3' />
      <h1 className='w-1/3 text-black text-center text-2xl' onClick={() => router.push('/')}>Contentium</h1>
      <div className='w-1/3 flex gap-2'>
        <button 
          className='text-black rounded-lg shadow-md border border-black p-2 bg-yellow-100' 
          onClick={() => router.push('/login')}
        >
          Login
        </button>
        <button 
          className='text-black rounded-lg shadow-md border border-black p-2 bg-yellow-100' 
          onClick={() => router.push('/register')}
        >
          Register
        </button>

      </div>
    </nav>
  )
}
