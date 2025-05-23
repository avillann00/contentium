'use client'

import { SiX } from 'react-icons/si'
import { FaYoutube } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

export default function Connections(){
  const connections = [
    { name: 'Youtube', icon: <FaYoutube /> },
    { name: 'TikTok', icon: <SiTiktok /> },
    { name: 'X', icon: <SiX /> },
    { name: 'Instagram', icon: <FaInstagram /> },
    { name: 'Facebook', icon: <FaFacebook /> }
  ]

  const mappedConnections = connections.map((connection) => (
    <button 
      className='text-black border border-black rounded-lg shadow-md px-4 py-4 flex flex-col items-center bg-white min-h-1/4 min-w-1/4' 
      key={connection.name}
    >
      {connection.name}
      {connection.icon}
    </button>
  ))

  return(
    <div className='w-screen h-screen bg-blue-50'>
      <h1 className='text-black text-center text-3xl mt-15'>Connections</h1>
      <div className='text-black text-center text-xl'>
        Sign in with the social media platform of your choosing to get started
      </div>
      <div className='flex flex-col items-center gap-4 mt-10'>
        {mappedConnections}
      </div>
    </div>
  )
}
