'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type ExtendedUser = {
  name?: string | null
  email?: string | null
  first_name?: string | null
  last_name?: string | null
  username?: string | null
}

export default function Profile(){
  const { data: session, status } = useSession()
  const router = useRouter()

  const user = session?.user as ExtendedUser | undefined

  if(!session){
    return(
      <div className='w-screen h-screen flex items-center justify-center'>
        <button 
          onClick={() => router.push('/login')}
          className='border border-black px-2 py-2 bg-red-300 text-black rounded-lg shadow-md'
        >
          Login
        </button>
      </div>
    )
  }

  return(
    <div className='w-screen h-screen bg-blue-50 flex flex-col items-center gap-4'>
      
      <h1 className='text-black text-3xl mt-15'>Profile</h1>

      <div className='text-black text-center flex flex-col gap-4'>
        <h1 className='text-xl'>Name</h1>
        {user.first_name && <h1 className='' >{user.first_name}</h1>}
        {user.last_name && <h1 className='' >{user.last_name}</h1>}
        {user.name && <h1 className='' >{user.name}</h1>}

        <h1 className='text-xl'>Email</h1>
        {user.email && <h1 className='' >{user.email}</h1>}

        {user.username && <h1 className='text-xl'>Username</h1>}
        {user.username && <h1 className='' >{user.username}</h1>}
      </div>

      <button 
        onClick={() => signOut({ callbackUrl: '/' })}
        className='border border-black rounded-lg shadow-md bg-red-100 text-black py-2 px-2'
      >
        Logout
      </button>
    </div>
  )
}
