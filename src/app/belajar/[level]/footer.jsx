import React from 'react'
import Image from 'next/image'

function Footer({ menit, detik }) {
  return (
    <div className='flex w-full justify-end px-8 py-4'>
      <div className='w-24 bg-ping rounded-full px-4 py-2 border-2 border-bingu flex gap-2 font-cubano text-white outline-title justify-center'>
        <span>{menit}</span>
        <span>:</span>
        <span>{detik}</span>
      </div>
    </div>
  )
}

export default Footer