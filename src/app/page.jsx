'use client'

import Footer from './footer'
import Header from './header'
import Play from './play'
import { useSession } from 'next-auth/react'
import validateEmail from '@/utils/validateEmail'
import { useState } from 'react'

export default function Page() {
  const { data: session, status } = useSession({ required: true })
  const [userValid, setUserValid] = useState(true)
  const email = session?.user?.email
  const data = validateEmail(email)
  if (data && data.length > 0) {
    setUserValid(false)
  }

  if (status === 'loading') {
    return (
      <h1> Loading </h1>
    )
  }
  else if (status === 'authenticated') {
    return (
      <>
        <div className='bg-home h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-between'>
          <Header />
          <Play />
          <Footer />
        </div>
      </>
    )
  }


}



