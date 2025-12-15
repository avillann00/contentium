'use client'

import { useRouter } from 'next/navigation'

export default function Footer(){
  const router = useRouter()

  return(
    <footer className='w-full p-4 text-center text-sm text-gray-500 bg-blue-50'>
      <p>
        <button onClick={() => router.push('/privacy')} className='mx-2 underline hover:text-blue-500'>
          Privacy Policy
        </button>
        ·
        <button onClick={() => router.push('/terms')} className='mx-2 underline hover:text-blue-500'>
          Terms of Service
        </button> 
        ·
        <button onClick={() => router.push('/contact')} className='mx-2 underline hover:text-blue-500'>
          Contact
        </button>
      </p>
    </footer>
  )
}
