import Image from 'next/legacy/image'
import React, { useState, useEffect } from 'react'

function Content({ totalTrue, totalTask, level, mode, time }) {
    const [isLolos, setIsLolos] = useState(false)

    useEffect(() => {
        if (totalTrue / totalTask * 100 > 50) {
            setIsLolos(true)
        }
    }, [])
    function ResultStar() {
        if (mode === 'easy') {
            return (
                <div className="absolute top-5 left-5 z-20">
                    <Image src="/assets/img/icon-star.png" width={48} height={48} priority />
                </div>
            )
        }
        if (mode === 'medium') {
            return (
                <div className="absolute top-5 left-5 z-20">
                    <Image src="/assets/img/icon-star.png" width={36} height={36} priority />
                    <Image src="/assets/img/icon-star.png" width={36} height={36} priority />
                </div>
            )
        }
        if (mode === 'hard') {
            return (
                <div className="absolute top-5 left-5 z-20">
                    <Image src="/assets/img/icon-star.png" width={36} height={36} priority />
                    <Image src="/assets/img/icon-star.png" width={48} height={48} priority />
                    <Image src="/assets/img/icon-star.png" width={36} height={36} priority />
                </div>
            )
        }
    }

    function ResultScoreAndTime() {
        const spendTime = () => {

        }
        return (
            <div className="absolute top-24 left-5 z-20 flex flex-col gap-3">
                <div className=" flex gap-2 items-center">
                    <div className="w-fit">
                        <Image src="/assets/img/icon-finish.png" width={16} height={12} priority />
                    </div>
                    <span className="font-cubano outline-title text-white text-2xl italic">{totalTrue}/5</span>
                    <span className="font-cubano outline-title text-kuning -rotate-6 text-sm shadow-md relative -left-6 top-4">benar</span>
                </div>
                <div className=" flex gap-2 items-center">
                    <div className="w-fit">
                        <Image src="/assets/img/icon-time.png" width={15} height={18} priority />
                    </div>
                    <span className="font-cubano outline-title text-white text-2xl italic">{parseFloat((time / 1000).toFixed(1))} Detik</span>
                </div>
            </div>
        )
    }
    function ResultTropi() {
        if (isLolos) {
            if (mode === 'easy') {
                return (
                    <div className="absolute top-20 right-2 z-20 flex flex-col gap-3">
                        <Image src="/assets/img/icon-tropi-perunggu.png" width={90} height={112} priority />
                    </div>
                )
            }
            if (mode === 'medium') {
                return (
                    <div className="absolute top-20 right-2 z-20 flex flex-col gap-3">
                        <Image src="/assets/img/icon-tropi-perak.png" width={90} height={112} priority />
                    </div>
                )
            }
            if (mode === 'hard') {
                return (
                    <div className="absolute top-20 right-2 z-20 flex flex-col gap-3">
                        <Image src="/assets/img/icon-tropi-emas.png" width={90} height={112} priority />
                    </div>
                )
            }
        } else {
            return (
                <div className="absolute top-20 right-2 z-20 flex flex-col gap-3">
                    <Image src="/assets/img/icon-tropi-failed.png" width={90} height={112} priority />
                </div>
            )
        }
    }
    return (
        <div className='flex w-full justify-center'>
            <div className='h-64 w-72 bg-bggameplay rounded-xl border-2 border-bingu relative overflow-hidden'>
                <ResultStar />
                <ResultScoreAndTime />
                <ResultTropi />
                <div className='absolute top-0 -left-1 w-full bg-effect-cfinish-top bg-no-repeat bg-center bg-cover h-16 z-0'></div>
                <div className='absolute bottom-0 h-9 bg-biru w-full z-0'></div>
                <div className='absolute -bottom-3 -right-1 w-full bg-effect-cfinish-bottom  bg-no-repeat bg-right bg-contain h-20 z-0'></div>
            </div>
        </div>
    )
}

export default Content