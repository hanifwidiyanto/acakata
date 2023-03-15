'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/legacy/image'
import { useRouter } from 'next/navigation'
import Footer from './footer'
import { FaPlay, FaStop } from 'react-icons/fa';

function Game({ taskGame, uuid, level, mode }) {
    const router = useRouter()

    const [isCountdownActive, setIsCountdownActive] = useState(0);
    const [isCountdownStop, setIsCountdownStop] = useState(0)
    useEffect(() => {
        if (taskGame) setGame(taskGame[0])
    }, [taskGame])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [game, setGame] = useState(taskGame[currentIndex])
    const [answer, setAnswer] = useState('')
    const [countTrue, setCountTrue] = useState(0)
    const [gameDone, setGameDone] = useState(false)
    const [isCount, setIsCount] = useState(false)
    const [key, setKey] = useState(0); // state tambahan
    const typeAnswer = (e) => {
        if (answer.length < game?.word?.length) {
            setAnswer(answer + e)
        }

    }

    const handleAnswer = (ans) => {
        if (ans.length == game?.word?.length || ans.length > game?.word?.length) {
            setTimeout(() => {
                if (ans == game?.word) {
                    let c = countTrue
                    setCountTrue(c + 1);
                    setKey(key + 1);
                }
                setAnswer('')
                const nextIndex = (currentIndex + 1) % taskGame.length;
                setCurrentIndex(nextIndex);
                if (nextIndex === 0) {
                    setGameDone(true)
                    setIsCountdownStop(Date.now())
                    setKey(key + 1);
                    const time = isCountdownStop - isCountdownActive
                    router.push(`/finish?true=${countTrue}&task=${taskGame.length}&uuid=${uuid}&level=${level}&mode=${mode}&time=${time}`)
                }
                setGame(taskGame[nextIndex]);
            }, 1000);
            return ans
        } else {
            return ans
        }
    }



    function TaskGame() {
        const [isPlaying, setIsPlaying] = useState(false);
        const audioRef = useRef(null);

        const handlePlayPause = () => {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
                setTimeout(() => {
                    setIsPlaying(false)
                }, 4000);
            }
        };
        if (game.file.split('.')[1] === 'png') {
            return (
                <Image src={`http://localhost:8000/${game?.file}`} layout="fill"
                    objectFit="contain" alt="sapi" priority />
            )
        } else if (game.file.split('.')[1] == 'mp3') {
            console.log(game.file)
            return (
                <>
                    <button onClick={handlePlayPause}>
                        {isPlaying ? <FaStop /> : <FaPlay />}
                    </button>
                    <audio ref={audioRef} src={`http://localhost:8000/${game?.file}`} />
                </>

            )
        }
    }
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
                if (!isCount) {
                    setIsCountdownActive(Date.now())
                    setIsCount(true)
                }
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
                        <TaskGame />
                    </div>
                    <div className="w-72 flex justify-between mt-4">
                        {taskWord}
                    </div>
                </>
            )
        }
    }
    if (gameDone) {
        return (
            <h1>test</h1>
        )
    } else {

        return (
            <>
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
                <Footer isCountdownActive={isCountdownActive} taskGame={taskGame} countTrue={countTrue + 1} level={level} mode={mode} uuid={uuid} />
            </>
        )
    }
}

export default Game