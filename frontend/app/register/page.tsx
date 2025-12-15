'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import LandingNav from '../components/LandingNav'

export default function Register() {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if(password !== passwordConfirm){
      alert('Passwords do not match.')
      return
    }

    if(!agreedToPrivacy || !agreedToTerms){
      alert('You must agree to both the Privacy Policy and Terms of Service.')
      return
    }

    try{
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register/`, {
        username: username,
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password
      })

      alert('Registration successful.')
      router.push('/login')
    } 
    catch(error){
      alert('Registration error.')
      console.error('Error registering user: ', error)
    }
  }

  return(
    <div className='w-screen h-screen bg-blue-50 p-10 flex flex-col items-center gap-4'>
      <LandingNav />

      <h1 className='mx-auto text-black text-3xl mt-5'>Register with your information then login.</h1>

      <form 
        className='mx-auto border border-black max-w-3xl text-black flex flex-col rounded-lg shadow-md gap-4 bg-white p-8'
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

        <label className="flex items-center text-sm gap-2">
          <input
            type="checkbox"
            checked={agreedToPrivacy}
            onChange={(e) => setAgreedToPrivacy(e.target.checked)}
            required
          />
          <span>
            I agree to the{' '}
            <a href="/privacy" target="_blank" className="underline text-blue-600 hover:text-blue-800">
              Privacy Policy
            </a>.
          </span>
        </label>

        <label className="flex items-center text-sm gap-2">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            required
          />
          <span>
            I agree to the{' '}
            <a href="/terms" target="_blank" className="underline text-blue-600 hover:text-blue-800">
              Terms of Service
            </a>.
          </span>
        </label>

        <button className='px-2 py-2 rounded-lg hover:bg-green-200' type='submit'>Register</button>
      </form>

      <button className='mx-auto text-black hover:text-blue-700' onClick={() => router.push('/login')}>
        Have an account?
      </button>
    </div>
  )
}

