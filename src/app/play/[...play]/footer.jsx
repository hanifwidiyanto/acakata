import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
   <div className='flex w-full justify-end p-4'>
     <Image src="/assets/img/btn-sound.png" alt="btn sound"  width={34} height={34} className="active:scale-90 duration-100 cursor-pointer" />
   </div>
  )
}

export default Footer