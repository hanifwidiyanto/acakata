"use client"

import Footer from './footer'
import Header from './header'
import Play from './play'
import AuthCheck from './AuthCheck'
import Daftar from './daftar'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import validateEmail from '@/utils/validateEmail'
import Loading from './loading'

export default function Page() {
  const router = useRouter()
  const [displayForm, setDisplayForm] = useState(true)
  const { data: session, status } = useSession()
  const email = session?.user?.email
  const data = validateEmail(email)
  console.log(data)
  const [dataUser, setDataUser] = useState(false)
  useEffect(() => {
    if (data) setDataUser(data)
  }, [data])
  const currUrl = usePathname()
  console.log(currUrl)
  function handleRegist() {
    console.log(currUrl)
    router.refresh()
    setDisplayForm(false)
  }

  // if(!data){
  //   return <Loading />
  // }
  return (
    <AuthCheck>
      <div className='bg-home h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-between'>
        {!data && <Daftar onCloseClick={handleRegist} />}
        {data ? <Header timeSpend={data.timeSpend} level={data.level} stars={data.totalStar} name={data.name} email={data.email} avatar={data.avatar} usia={data.usia} uuid={data.uuid} /> : <h1>componen loading</h1>}
        {data ? <Play level={data.level} uuid={data.uuid} /> : <h1>component loading</h1>}
        <Footer />
      </div>
    </AuthCheck>
  )


}



