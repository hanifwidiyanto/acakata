'use client'

import React, { useState } from 'react'
import Image from 'next/legacy/image'
function Gameplay() {

    const [answer, setAnswer] = useState('')
    const [countTrue, setCountTrue] = useState(0)
    const typeAnswer = (e) => {
        if (answer.length < 4) {
            setAnswer(answer + e)
        }
        console.log(answer)

    }

    const task = [
        {
            "answer": "sapi",
            "img": "/assets/img/quiz/sapi.png",
            "score": 1,
        }, {
            "answer": "buku",
            "img": "/assets/img/quiz/buku.png",
            "score": 1,
        }, {
            "answer": "kuda",
            "img": "/assets/img/quiz/kuda.png",
            "score": 1,
        }, {
            "answer": "susu",
            "img": "/assets/img/quiz/susu.png",
            "score": 1,
        }, {
            "answer": "meja",
            "img": "/assets/img/quiz/meja.png",
            "score": 1,
        }, {
            "answer": "nasi",
            "img": "/assets/img/quiz/nasi.png",
            "score": 1,
        }, {
            "answer": "bola",
            "img": "/assets/img/quiz/bola.png",
            "score": 1,
        }, {
            "answer": "gigi",
            "img": "/assets/img/quiz/gigi.png",
            "score": 1,
        }, {
            "answer": "kaki",
            "img": "/assets/img/quiz/kaki.png",
            "score": 1,
        }, {
            "answer": "baju",
            "img": "/assets/img/quiz/baju.png",
            "score": 1,
        }, {
            "answer": "jari",
            "img": "/assets/img/quiz/jari.png",
            "score": 1,
        }, {
            "answer": "tali",
            "img": "/assets/img/quiz/tali.png",
            "score": 1,
        },
    ]

    const handleAnswer = (ans) => {
        if (ans.length == 4 || ans.length > 4) {
            setTimeout(() => {
                if (ans == 'sapi') setCountTrue(countTrue + 1)
                setAnswer('')
            }, 1000);
            return ans
        } else {
            return ans
        }
    }

    return (
        <div className="flex w-full justify-center flex-col items-center">
            <div className="bg-container-gameplay w-[321px] h-[84px] bg-no-repeat bg-center bg-contain flex justify-center items-center relative text-center flex-col">
                <div className='font-cubano text-2xl outline-title text-white flex flex-col gap-0 relative -top-2'>
                    <span>Evaluasi Belajar</span>
                    {/* <span className='-mt-1'>Pembelajaran</span> */}
                </div>
            </div>
            <div className='w-72 h-48 bg-bggameplay border-2 border-bingu rounded-lg mt-8 shadow-lg grid place-content-center relative'>
                <Image src="/assets/img/quiz/sapi.png" layout="fill"
                    objectFit="contain" alt="sapi" />
            </div>
            <div className="w-72 flex justify-between mt-4">
                <div className='w-10 h-10 border-bingu bg-bggameplay border-2 rounded-md grid place-content-center text-bingu font-cubano text-xl' onClick={() => typeAnswer('S')}>S</div>
                <div className='w-10 h-10 border-bingu bg-bggameplay border-2 rounded-md grid place-content-center text-bingu font-cubano text-xl' onClick={() => typeAnswer('I')}>I</div>
                <div className='w-10 h-10 border-bingu bg-bggameplay border-2 rounded-md grid place-content-center text-bingu font-cubano text-xl' onClick={() => typeAnswer('P')}>P</div>
                <div className='w-10 h-10 border-bingu bg-bggameplay border-2 rounded-md grid place-content-center text-bingu font-cubano text-xl' onClick={() => typeAnswer('A')}>A</div>
            </div>
            <form className='w-72 mt-6'>
                <input type="text" className='w-full bg-transparent border-b-2 text-center text-white outline-title font-cubano' value={handleAnswer(answer)} disabled />
            </form>

        </div>
    )
}

export default Gameplay