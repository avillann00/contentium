'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function Register(){
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(password !== passwordConfirm){
      alert('Passwords do not match.')
      return
    }

    try{
      const response = await axios.post('http://localhost:8000/users/register/', {
        username: username, 
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password
      })

      alert('Registration successful.')
      router.push('/login')
    }
    catch(e){
      alert('Registration error.')
      console.error('Error registering user: ', e)
    }
  }

    return (
    <div className='w-screen h-screen bg-blue-50 p-10 flex flex-col items-center gap-4'>
      <h1 className='mx-auto text-black text-3xl'>Register with your information then login.</h1>

      <form 
        className='mx-auto border border-black max-w-3xl text-black flex flex-col rounded-lg shadow-md gap-4 bg-white p-10'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          className='text-center'
          placeholder='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type='email'
          className='text-center'
          placeholder='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type='text'
          className='text-center'
          placeholder='first name'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required
        />
        <input
          type='text'
          className='text-center'
          placeholder='last name'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required
        />
        <input
          type='password'
          className='text-center'
          placeholder='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        /> 
        <input
          type='password'
          className='text-center'
          placeholder='confirm password'
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          required
        />

        <button className='px-2 py-2 rounded-lg hover:bg-green-200' type='submit'>Register</button>
      </form>

      <button className='mx-auto text-black hover:text-blue-700' onClick={() => router.push('/login')}>Have an account?</button>
    </div>
  )
}
