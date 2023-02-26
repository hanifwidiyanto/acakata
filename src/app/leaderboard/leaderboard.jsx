// import Image from 'next/legacy/image'
import Image from 'next/legacy/image'
import React from 'react'

export default function Leaderboard() {
  return (
    <div className='bg-container-leaderboard flex w-full h-[720px] bg-bottom bg-no-repeat bg-contain absolute -bottom-40  '>
      <div className='mx-12 w-full pt-4'>
        <div className="flex flex-col w-full items-center">
          <span className='font-cubano text-white outline-title text-3xl'>Papan peringkat</span>
          <span className='font-cubano text-white outline-title text-3xl'>maret 2023</span>
        </div>
        <div className='mt-6 pt-2 pb-12 flex flex-col gap-5 h-4/6 overflow-scroll scroll-'>
          <div className='bg-container-top-leaderboard w-full rounded-md h-[82px] bg-center bg-no-repeat bg-cover'>
            <div className="flex w-full justify-between h-full items-center px-3">
              <div className='flex gap-4 h-full items-center'>
                <div className='w-[49px] h-[49px] bg-center bg-cover bg-no-repeat bg-container-profile-picture rounded-md'></div>
                <span className='text-2xl font-cubano text-white outline-title'>nama</span>
              </div>
              <div className='flex flex-col w-full justify-between items-end'>
                <div className='flex gap-2 items-center'>
                  <span className='text-white text-lg font-cubano outline-title'>level</span>
                  <span className='text-kuning text-2xl font-cubano outline-title italic'>8</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <Image src="/assets/img/icon-stars.png" alt='icon stars' width={40} height={32} />
                  <span className='text-kuning text-2xl font-cubano outline-title italic'>12</span>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-container-top-leaderboard w-full rounded-md h-[82px] bg-center bg-no-repeat bg-cover'>
            <div className="flex w-full justify-between h-full items-center px-3">
              <div className='flex gap-4 h-full items-center'>
                <div className='w-[49px] h-[49px] bg-center bg-cover bg-no-repeat bg-container-profile-picture rounded-md'></div>
                <span className='text-2xl font-cubano text-white outline-title'>nama</span>
              </div>
              <div className='flex flex-col w-full justify-between items-end'>
                <div className='flex gap-2 items-center'>
                  <span className='text-white text-lg font-cubano outline-title'>level</span>
                  <span className='text-kuning text-2xl font-cubano outline-title italic'>8</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <Image src="/assets/img/icon-stars.png" alt='icon stars' width={40} height={32} />
                  <span className='text-kuning text-2xl font-cubano outline-title italic'>12</span>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-container-top-leaderboard w-full rounded-md h-[82px] bg-center bg-no-repeat bg-cover'>
            <div className="flex w-full justify-between h-full items-center px-3">
              <div className='flex gap-4 h-full items-center'>
                <div className='w-[49px] h-[49px] bg-center bg-cover bg-no-repeat bg-container-profile-picture rounded-md'></div>
                <span className='text-2xl font-cubano text-white outline-title'>nama</span>
              </div>
              <div className='flex flex-col w-full justify-between items-end'>
                <div className='flex gap-2 items-center'>
                  <span className='text-white text-lg font-cubano outline-title'>level</span>
                  <span className='text-kuning text-2xl font-cubano outline-title italic'>8</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <Image src="/assets/img/icon-stars.png" alt='icon stars' width={40} height={32} />
                  <span className='text-kuning text-2xl font-cubano outline-title italic'>12</span>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-container-top-leaderboard w-full rounded-md h-[82px] bg-center bg-no-repeat bg-cover'>
            <div className="flex w-full justify-between h-full items-center px-3">
              <div className='flex gap-4 h-full items-center'>
                <div className='w-[49px] h-[49px] bg-center bg-cover bg-no-repeat bg-container-profile-picture rounded-md'></div>
                <span className='text-2xl font-cubano text-white outline-title'>nama</span>
              </div>
              <div className='flex flex-col w-full justify-between items-end'>
                <div className='flex gap-2 items-center'>
                  <span className='text-white text-lg font-cubano outline-title'>level</span>
                  <span className='text-kuning text-2xl font-cubano outline-title italic'>8</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <Image src="/assets/img/icon-stars.png" alt='icon stars' width={40} height={32} />
                  <span className='text-kuning text-2xl font-cubano outline-title italic'>12</span>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-container-top-leaderboard w-full rounded-md h-[82px] bg-center bg-no-repeat bg-cover'>
            <div className="flex w-full justify-between h-full items-center px-3">
              <div className='flex gap-4 h-full items-center'>
                <div className='w-[49px] h-[49px] bg-center bg-cover bg-no-repeat bg-container-profile-picture rounded-md'></div>
                <span className='text-2xl font-cubano text-white outline-title'>nama</span>
              </div>
              <div className='flex flex-col w-full justify-between items-end'>
                <div className='flex gap-2 items-center'>
                  <span className='text-white text-lg font-cubano outline-title'>level</span>
                  <span className='text-kuning text-2xl font-cubano outline-title italic'>8</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <Image src="/assets/img/icon-stars.png" alt='icon stars' width={40} height={32} />
                  <span className='text-kuning text-2xl font-cubano outline-title italic'>12</span>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-container-top-leaderboard w-full rounded-md h-[82px] bg-center bg-no-repeat bg-cover'>
            <div className="flex w-full justify-between h-full items-center px-3">
              <div className='flex gap-4 h-full items-center'>
                <div className='w-[49px] h-[49px] bg-center bg-cover bg-no-repeat bg-container-profile-picture rounded-md'></div>
                <span className='text-2xl font-cubano text-white outline-title'>nama</span>
              </div>
              <div className='flex flex-col w-full justify-between items-end'>
                <div className='flex gap-2 items-center'>
                  <span className='text-white text-lg font-cubano outline-title'>level</span>
                  <span className='text-kuning text-2xl font-cubano outline-title italic'>8</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <Image src="/assets/img/icon-stars.png" alt='icon stars' width={40} height={32} />
                  <span className='text-kuning text-2xl font-cubano outline-title italic'>12</span>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-container-bottom-leaderboard w-full rounded-md h-[82px] bg-center bg-no-repeat bg-cover'>
            <div className="flex w-full justify-between h-full items-center px-3">
              <div className='flex gap-4 h-full items-center'>
                <div className='w-[49px] h-[49px] bg-center bg-cover bg-no-repeat bg-container-profile-picture rounded-md'></div>
                <span className='text-2xl font-cubano text-white outline-title'>nama</span>
              </div>
              <div className='flex flex-col w-full justify-between items-end'>
                <div className='flex gap-2 items-center'>
                  <span className='text-white text-lg font-cubano outline-title'>level</span>
                  <span className='text-kuning text-2xl font-cubano outline-title italic'>8</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <Image src="/assets/img/icon-stars.png" alt='icon stars' width={40} height={32} />
                  <span className='text-kuning text-2xl font-cubano outline-title italic'>12</span>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-container-bottom-leaderboard w-full rounded-md h-[82px] bg-center bg-no-repeat bg-cover'>
            <div className="flex w-full justify-between h-full items-center px-3">
              <div className='flex gap-4 h-full items-center'>
                <div className='w-[49px] h-[49px] bg-center bg-cover bg-no-repeat bg-container-profile-picture rounded-md'></div>
                <span className='text-2xl font-cubano text-white outline-title'>nama</span>
              </div>
              <div className='flex flex-col w-full justify-between items-end'>
                <div className='flex gap-2 items-center'>
                  <span className='text-white text-lg font-cubano outline-title'>level</span>
                  <span className='text-kuning text-2xl font-cubano outline-title italic'>8</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <Image src="/assets/img/icon-stars.png" alt='icon stars' width={40} height={32} />
                  <span className='text-kuning text-2xl font-cubano outline-title italic'>12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
