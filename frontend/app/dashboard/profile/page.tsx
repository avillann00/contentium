'use client'

import { useSession, signOut } from 'next-auth/react'

export default function Profile(){
  const { data: session, status } = useSession()

  return(
    <div className='w-screen h-screen bg-blue-50 flex flex-col items-center gap-4'>
        <h1 className='text-black text-3xl mt-15'>Profile</h1>

        <div className='text-black text-center flex flex-col gap-4'>
          <h1 className='text-xl'>Name</h1>
          {session?.user.first_name && <h1 className='' >{session?.user.first_name}</h1>}
          {session?.user.last_name && <h1 className='' >{session?.user.last_name}</h1>}
          {session?.user.name && <h1 className='' >{session?.user.name}</h1>}

          <h1 className='text-xl'>Email</h1>
          {session?.user.email && <h1 className='' >{session?.user.email}</h1>}

          {session?.user.username && <h1 className='text-xl'>Username</h1>}
          {session?.user.username && <h1 className='' >{session?.user.username}</h1>}
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
