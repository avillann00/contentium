'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

type ExtendedUser = {
  name?: string | null
  email?: string | null
  first_name?: string | null
  last_name?: string | null
  username?: string | null
  is_pro?: boolean | null
}

export default function Pro(){
  const { data: session, status } = useSession()

  const router = useRouter()

  useEffect(() => {
    alert(`val: ${user?.is_pro}`)
  }, [])

  const user = session?.user as ExtendedUser | undefined

  const handleSubmit = async () => {
    if(!session?.accessToken){
      return
    }

    const { data } = await axios.post('http://localhost:8000/payments/stripe/create-checkout-session/', {}, {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`
      }
    })

    if(data.error){
      console.error(data.error)
      return alert('Failed to create checkout session')
    }

    const stripe = await stripePromise
    const { error } = await stripe!.redirectToCheckout({
      sessionId: data.sessionId
    })
  }

  return(
    <div className='w-screen h-screen bg-blue-50 flex flex-col justify-center items-center'>
      {session ? (
        <>
          <h1 className='text-black text-center text-3xl mb-10'>Pro</h1>
          <div className='flex flex-col text-black items-center'>
            {user?.is_pro ? (
              <h1>You are already a pro!</h1>
            ) : (
              <div className='flex flex-col items-center'>
                <div className='text-black text-xl text-center'>
                  With the pro tier you will have access to advanced features such as AI and Machine Learning integration.
                </div>
                <button
                  onClick={handleSubmit}
                  className='border border-black rounded-lg shadow-md px-4 py-2 bg-white hover:bg-green-300 transition'
                >
                  Become a pro for $4.99/mo!
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <button
          onClick={() => router.push('/login')}
          className='py-4 px-4 rounded-lg shadow-md bg-red-200'
        >
          Sign in
        </button>
      )}
    </div>
  )
}
