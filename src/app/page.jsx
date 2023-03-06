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
const fetcher = (email) => fetch('http://localhost:8000/user/' + email).then((res) => res.json());

export default function Page() {


  const { data: session, status } = useSession()
  const email = session?.user?.email
  const { data, error, mutate } = useSWR(email, fetcher)
  console.log(data)
  const router = useRouter()
  const handleRegist = () => {
      router.refresh()
  }
  return (
    <AuthCheck>
      <div className='bg-home h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-between'>
        {data?.length === 0 && <Daftar onCloseClick={handleRegist} />}
        {<Header timeSpend={data?.length ? data[0].timeSpend : "-"} level={data?.length ? data[0].level : "0"} stars={data?.length ? data[0].stars : "0"} />}
        <Play />
        <Footer />
      </div>
    </AuthCheck>
  )


}



