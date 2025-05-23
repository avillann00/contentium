'use client'

export default function Contact(){
  return(
    <div className='w-screen min-h-screen bg-blue-50 flex flex-col items-center pt-20'>
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
