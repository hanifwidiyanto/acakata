"use client"

import Footer from './footer'
import Header from './header'
import Play from './play'
import AuthCheck from './AuthCheck'
import Daftar from './daftar'
import { useState } from 'react'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import validateEmail from '@/utils/validateEmail'
// const fetcher = (email) => fetch('http://localhost:8000/user/' + email).then((res) => res.json());

export default function Page() {

  const { data: session, status } = useSession()
  const email = session?.user?.email
  const data = validateEmail(email)
  console.log(data)
  const router = useRouter()
  const handleRegist = () => {
    router.refresh()
  }
  return (
    <AuthCheck>
      <div className='bg-home h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-between'>
        {!data && <Daftar onCloseClick={handleRegist} />}
        {data ? <Header timeSpend={data.timeSpend} level={data.level} stars={data.stars} name={data.name} email={data.email} avatar={data.avatar} usia={data.usia} /> : <h1>componen loading</h1>}
        {data ? <Play level={data.level} /> : <h1>component loading</h1>}
        <Footer />
      </div>
    </AuthCheck>
  )


}



