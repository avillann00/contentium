'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaGoogle } from 'react-icons/fa'

export default function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleSubmit = () => {

  }

  return (
    <div className='bg-blue-50 h-screen w-screen p-10'>
      
      <div className='text-black text-center mx-auto'>
        <h1 className='text-2xl'>Welcome</h1>
        <h3 className='text-xl'>Login with your usename and password or with Google.</h3>
      </div>

      <div className='flex flex-col items-center text-black max-w-3xl mx-auto p-10 gap-4'>
        <form className='flex flex-col bg-white p-4 border border-lg  rounded-lg shadow-md gap-4' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='text-center'
          />
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='text-center'
          />
          <button type='submit' className='px-2 py-2 rounded-lg hover:bg-green-200'>Login</button>
        </form>

        <button className='flex mx-auto border border-lg rounded-lg p-10 shadow-md bg-red-300 hover:bg-red-500'>
          <FaGoogle />
        </button>

        <button className='hover:text-blue-700' onClick={() => router.push('/register')}>Need an account?</button>
      </div>
    </div>
  )
}
