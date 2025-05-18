'use client'

import { useRouter } from 'next/navigation'

export default function Home(){
  const router = useRouter() 

  return(
    <div className='w-screen min-h-screen bg-blue-50 flex flex-col items-center pt-20'>
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

      <section className='bg-white p-10 rounded-lg shadow-md max-w-4xl mx-auto text-black text-center'>
        <h1 className='text-3xl'>About</h1>
        <p className='mt-5'>
          This app aims to enable contect creators.
          It allows you to connect all of your social media accounts so that you can manage them all in one place.
        </p>
        <p className='mt-5'>
          We plan to use machine learning and artificial intelligence in order to help content creators maximize your growth.
          We will also include features to see how well you are doing with advanced graphs and statistics.
        </p>
        <p className='mt-5'>
          This app is uses Next.js for the front end which is deployed using Vercel.
          It uses Django for the backend which is deployed using Heroku.
          For the database, it uses PostgreSQL which is hosted using Supabase.
        </p>
      </section>

      <section 
        className='bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto text-black mt-10 hover:bg-green-200'
        onClick={() => router.push('/pricing')}
      >
        View pricing
      </section>

      <section className='bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto text-black mt-10'>
        <h3 className='text-2xl font-semibold mb-6 text-center'>Contact</h3>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center text-center'>
          <div>
            <h5 className='text-lg font-medium'>Email</h5>
            <a
              href='mailto:avillann00@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:underline'
            >
              avillann00@gmail.com
            </a>
          </div>
          <div>
            <h5 className='text-lg font-medium'>GitHub</h5>
            <a
              href='https://github.com/avillann00'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:underline'
            >
              GitHub Profile
            </a>
          </div>
          <div>
            <h5 className='text-lg font-medium'>LinkedIn</h5>
            <a
              href='https://www.linkedin.com/in/austin-villanueva-56abbb2b2'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:underline'
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
