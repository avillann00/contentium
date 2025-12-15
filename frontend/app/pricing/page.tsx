'use client'

import { useRouter } from 'next/navigation'
import LandingNav from '../components/LandingNav'

export default function Pricing(){
  const router = useRouter()

  return(
    <div className='w-screen h-screen bg-blue-50 flex flex-col items-center pt-20'>
      <LandingNav />

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
