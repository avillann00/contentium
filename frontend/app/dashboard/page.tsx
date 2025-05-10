'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Dashboard(){
  const { data: session, status } = useSession()

  const router = useRouter()

  return(
    <div className='w-screen h-screen bg-blue-50 flex flex-col'>
      <div className='text-black flex items-center justify-center h-screen w-screen'>
        <h1 className='text-2xl'>Dashboard</h1>
      </div>

      {session ? (
        <div className='text-black flex items-center justify-center h-screen w-screen'>
          <h1>Welcome!</h1>
        </div>
      ) : (
        <div className='flex text-black justify-center items-center h-screen w-screen'>
          <button 
            onClick={() => router.push('/login')}
            className='border border-black rounded-lg shadow-md px-6 py-6 bg-white'
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  )
}
