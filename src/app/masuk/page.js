import Image from 'next/image'
import Auth from './auth'
import Login from './login'


export default function Home() {
  return (
   <div className='bg-login h-screen w-full bg-center bg-cover bg-no-repeat grid place-content-center'>
     <Auth />
   </div>
  )
}
