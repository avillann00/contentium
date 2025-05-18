'use client'

import { useRouter } from 'next/navigation'

export default function Pricing(){
  const router = useRouter()

  return(
    <div className='w-screen h-screen bg-blue-50 flex flex-col items-center pt-20'>
      <nav className='h-16 px-4 fixed top-0 z-50 w-full shadow-md rounded-lg flex flex-row justify-between bg-purple-100 items-center'>
        <image className='w-1/3' />
        <h1 className='w-1/3 text-black text-center text-2xl' onClick={() => router.push('/')}>Contentium</h1>
        <div className='w-1/3'>
          <button 
            className='text-black rounded-lg shadow-md border border-black p-2 bg-yellow-100' 
            onClick={() => router.push('/login')}
          >
            Login
          </button>
        </div>
      </nav>

      <h1 className='text-3xl text-black'>Pricing</h1>

      <section className='h-full w-3/4 bg-white shadow-md rounded-lg flex flex-row text-black px-2 py-2'>
        <div className='w-1/2 flex flex-col items-center border-r'>
          <h1 className='text-2xl border-b w-1/2 text-center'>Free tier</h1>
          <h1 className='text-lg border-b w-1/4 text-center text-green-500'>Free</h1>
          <ul>
            <li>Content management</li>
            <li>Social media integration</li>
            <li>Use of graphs</li>
          </ul>
        </div>

        <div className='w-1/2 flex flex-col items-center border-l'>
          <h1 className='text-2xl border-b w-1/2 text-center'>Pro tier</h1>
          <h1 className='text-lg border-b w-1/4 text-center text-green-500'>$4.99/month</h1>
          <ul>
            <li>Content management</li>
            <li>Social media integration</li>
            <li>Use of graphs</li>
            <li>Access to AI</li>
            <li>Machine learning insights</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
