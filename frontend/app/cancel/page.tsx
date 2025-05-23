'use client'

import { useRouter } from 'next/navigation'

export default function Cancel(){
  const router = useRouter()

  return(
    <div className='w-screen h-screen bg-blue-50 flex flex-col items-center justify-center gap-4'>
      <div className='text-black text-3xl text-center bg-white rounded-lg shadow-md py-6 px-6 max-w-2/3'>
        <h1>There was an error</h1>
        <h1>Please try again</h1>
      </div>

      <button 
        onClick={() => router.push('/dashboard')}
        className='px-4 py-4 rounded-lg shadow-md text-black bg-white hover:bg-green-200'
      >
        Go home
      </button>

    </div>
  )
}
