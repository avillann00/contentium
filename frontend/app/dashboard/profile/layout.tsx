
'use client'

import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter()
  return (
    <div className='w-screen h-screen flex'>

      {/* Sidebar */}
      <div 
        className='w-64 h-full border-r border-black flex flex-col items-start px-4 py-4 gap-4 bg-white mt-15 text-black'
      >
        <button onClick={() => router.push('/dashboard/profile')}>Profile</button>
        <button onClick={() => router.push('/dashboard/profile/connections')}>Connections</button>
        <button onClick={() => router.push('/dashboard/profile/settings')}>Settings</button>
      </div>

      {/* Main content */}
      <div className='flex-1 h-full overflow-auto bg-blue-50 p-6'>
        {children}
      </div>
    </div>
  )
}
