import Image from 'next/image'
import React from 'react'

function Header() {
    const waktuBelajar = '1 jam 22 menit'
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
                <div className='bg-container-timevisit w-52 h-12 bg-center bg-contain bg-no-repeat -ml-4 mt-6 relative flex items-center'>
                    <div className="absolute -top-3 left-16">
                        <span className='font-cubano italic text-sm text-yellow-500 shadow-inner outline-title'>lama belajar</span>
                    </div>
                    <Image src="/assets/img/icon-time.png" width={20} height={24} className="relative left-7" />
                    <span className='font-cubano text-white outline-title relative left-10'>{waktuBelajar}</span>
                </div>
                <div className='flex gap-2 mt-6 mr-3'>
                    <div className='bg-container-level shadow-md w-20 h-6 bg-cover rounded-md bg-no-repeat bg-center relative flex justify-end'>
                        <Image src="/assets/img/icon-level.png" width={33} height={22} className="absolute -top-1 left-1.5" />
                        <span className='text-white font-cubano outline-title relative right-5'>4</span>
                    </div>
                    <div className='bg-container-level shadow-md w-20 h-6 bg-cover rounded-md bg-no-repeat bg-center relative flex justify-end'>
                        <Image src="/assets/img/icon-stars.png" width={26} height={21} className="absolute -top-2 left-2" />
                        <span className='text-white font-cubano outline-title relative right-5'>12</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center mx-3 mt-4'>
                <div className='flex gap-2 h-fit'>
                    <Image src="/assets/img/btn-setting.png" width={34} height={34} className="active:scale-90 duration-100 cursor-pointer" />
                    <Image src="/assets/img/btn-sound.png" width={34} height={34} className="active:scale-90 duration-100 cursor-pointer" />
                </div>
                <div className='bg-profildev bg-right bg-contain bg-no-repeat w-24 h-10 relative active:scale-90 duration-100 cursor-pointer'>
                    <Image src="/assets/img/icon-dev.png" width={20} height={30} className="absolute right-2 -top-4" />
                    <div className='flex flex-col absolute right-1 top-1'>
                        <span className='outline-dev  font-cubano text-white text-xs'>Profil</span>
                        <span className='outline-dev  font-cubano text-white text-xs'>Pengembang</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header