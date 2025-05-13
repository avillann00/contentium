'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import axios from 'axios'

type Connection = {
  id: number,
  external_user_id: string,
  platform: string,
  username: string,
  profile_url: string,
  avatar_url: string,
  access_token: string,
  refresh_token: string,
  token_expiration: string,
  created_at: string,
  updated_at: string,
}

export default function Dashboard(){
  const { data: session, status } = useSession()

  const [connections, setConnections] = useState<Connection[]>([])

  const router = useRouter()

  useEffect(() => {
    if(status !== 'authenticated'){
      alert('Not authenticated')
      return
    }

    const getConnections = async () => {
      console.log('Access Token:', session?.accessToken);

      try{
        const response = await axios.get('http://localhost:8000/socials/connections', {
          headers: {
            Authorization: `Bearer ${session.accessToken}`
          }
        })
        setConnections(response.data)
      }
      catch(error){
        console.error(error)
      }
    }

    getConnections()
  }, [status, session])

  const mappedConnections = connections?.map((connection) => (
    <section 
      className='w-3/4 h-3/4 border border-black text-black rounded-lg px-2 py-2 shadow-md bg-gray-200' 
      key={connection.id}
    >
      <h1 className='text-center text-xl'>{connection.platform}</h1>
    </section>
  ))

  return(
    <div className='min-w-screen min-h-screen bg-blue-50 flex flex-col'>
      <h1 className='mt-30 text-2xl text-black text-center'>Dashboard</h1>

      {session ? (
        <div className='text-black flex flex-col items-center justify-center h-screen w-screen'>

          <div className='flex flex-col w-full h-full items-center'>
            {mappedConnections}
          </div>
       </div>
      ) : (
        <div className='flex text-black justify-center items-center h-screen w-screen'>
          <button 
            onClick={() => router.push('/login')}
            className='border border-black rounded-lg shadow-md px-6 py-6 bg-white'
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  )
}
