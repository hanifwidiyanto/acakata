import React from 'react'

export default function Soal({ checkWord, randomWord, }) {
    function handleType(e) {
        const word = e?.target?.innerText
        typeAnswer(word)
        if (!isCount) {
            setIsCountdownActive(Date.now())
            setIsCount(true)
        }
    }
    let taskWord = []
    for (let i = 0; i < randomWord?.length; i++) {
        taskWord.push(
            <div key={i} className='w-10 h-10 border-bingu bg-bggameplay border-2 rounded-md grid place-content-center text-bingu font-cubano text-xl' onClick={handleType}>{randomWord[i]}</div>
        )
    }
    return (

        <>
            {taskWord}

        </>
    )


}
