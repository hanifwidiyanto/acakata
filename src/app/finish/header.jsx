import Image from 'next/legacy/image'
import React from 'react'

function Header({params}) {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex w-full justify-center gap-2 px-4 pt-6">
                <Image src="/assets/img/icon-bigstars.png" alt="big stars" width={72} height={56} />
                <div className='-skew-y-2'>
                    <h2 className='text-4xl italic font-cubano text-white outline-title'> HASIL BELAJAR</h2>
                </div>
            </div>
            <div className='flex w-full justify-center italic'>
                <h4 className='text-kuning font-cubano outline-title text-2xl'>Level 1 Selesai</h4>
            </div>
            <div className='flex w-full justify-center'>
              <span className='text-white outline-title text-center w-8/12 text-xl font-cubano'>kamu hebat!<br />kamu dapat melanjutkan ke level selanjutnya</span>
            </div>
        </div>
    )
}

export default Header