"use client"

import { useSearchParams } from 'next/navigation'
import Register from './register'


export default function Home() {
  const searchParams = useSearchParams()

  const email = searchParams.get('email')
  const avatar = searchParams.get('avatar')
  const name = searchParams.get('name')
  
  return (
   <div className='bg-login h-screen w-full bg-center bg-cover bg-no-repeat grid place-content-center'>
      <Register name={name} avatar={avatar} email={email} />
   </div>
  )
}
