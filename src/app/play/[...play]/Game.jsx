'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/legacy/image'

function Game({ taskGame }) {
    useEffect(() => {
        if (taskGame) setGame(taskGame[0])
    }, [taskGame])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [game, setGame] = useState(taskGame[currentIndex])
    console.log(game)
    const [answer, setAnswer] = useState('')
    const [countTrue, setCountTrue] = useState(0)
    const typeAnswer = (e) => {
        if (answer.length < 4) {
            setAnswer(answer + e)
        }
        console.log(answer)

    }

    const handleAnswer = (ans) => {
        if (ans.length == 4 || ans.length > 4) {
            setTimeout(() => {
                if (ans == game?.word) setCountTrue(countTrue + 1)
                setAnswer('')
                const nextIndex = (currentIndex + 1) % taskGame.length;
                setCurrentIndex(nextIndex);
                setGame(taskGame[nextIndex]);
            }, 1000);
            return ans
        } else {
            return ans
        }
    }
    console.log(countTrue)
    function Soal() {

        if (game) {
            let word = game?.word
            const characters = word?.split("");
            const randomWord = shuffle(characters).join("");

            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }
            function handleType(e) {
                const word = e.target.innerText
                typeAnswer(word)
            }
            let taskWord = []
            for (let i = 0; i < randomWord.length; i++) {
                taskWord.push(
                    <div key={i} className='w-10 h-10 border-bingu bg-bggameplay border-2 rounded-md grid place-content-center text-bingu font-cubano text-xl' onClick={handleType}>{randomWord[i]}</div>
                )


            }
            return (
                <>
                    <div className='w-72 h-48 bg-bggameplay border-2 border-bingu rounded-lg mt-8 shadow-lg grid place-content-center relative'>
                        <Image src={`http://localhost:8000/${game?.file}`} layout="fill"
                            objectFit="contain" alt="sapi" />
                    </div>
                    <div className="w-72 flex justify-between mt-4">
                        {taskWord}
                    </div>
                </>
            )
        }

    }
    return (
        <div className="flex w-full justify-center flex-col items-center">
            <div className="bg-container-gameplay w-[321px] h-[84px] bg-no-repeat bg-center bg-contain flex justify-center items-center relative text-center flex-col">
                <div className='font-cubano text-2xl outline-title text-white flex flex-col gap-0 relative -top-2'>
                    <span>Evaluasi Belajar</span>
                </div>
            </div>

            <Soal />
            <form className='w-72 mt-6'>
                <input type="text" className='w-full bg-transparent border-b-2 text-center text-white outline-title font-cubano text-xl' value={handleAnswer(answer)} disabled />
            </form>

        </div>
    )
}

export default Game