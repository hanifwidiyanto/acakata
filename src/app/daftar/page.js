import Image from 'next/image'
import Register from './register'


export default function Home() {
  return (
   <div className='bg-login h-screen w-full bg-center bg-cover bg-no-repeat grid place-content-center'>
      <Register />
   </div>
  )
}
