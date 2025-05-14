'use client'

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

export default function SectionCard(connection: Connection){
  return(
    <button className='w-full h-full flex flex-col items-center'>
      <h1 className='text-black text-3xl'>{connection.platform}</h1>
      <div className='w-full h-full'>
        Other Information.
      </div>
    </button>
  )
}
