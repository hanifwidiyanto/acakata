import Image from 'next/image'
import Footer from './footer'
import Header from './header'
import Play from './play'

export default function Home() {
  return (
   <div className='bg-home h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-between'>
     <Header />
     <Play />
     <Footer />
   </div>
  )
}
