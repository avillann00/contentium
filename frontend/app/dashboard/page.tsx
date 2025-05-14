'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SectionCard  from '../components/SectionCard'

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
      className='w-3/4 h-3/4 border border-black text-black rounded-lg px-2 py-2 shadow-md bg-gray-200 shrink-0 mb-4' 
      key={connection.id}
    >
      <SectionCard {...connection} />
    </section>
  ))

  return(
    <div className='min-w-screen min-h-screen bg-blue-50 flex flex-col'>

      {session ? (
        <div className='text-black flex flex-col items-center justify-center h-screen w-screen'>

          {connections.length > 0 ? 
            (
              <div className='flex flex-col w-3/4 h-full items-center overflow-y-auto'>
                {mappedConnections}
              </div>
            ) : (
              <div className='text-black text-5xl' onClick={() => router.push('/dashboard/profile/connections')}>
                Connect your accounts to get started!
              </div>
            )
          }
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
