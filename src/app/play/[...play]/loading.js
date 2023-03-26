'use client'

import React, { useState, useEffect } from 'react'
import classNames from "classnames";

function Loading() {
    const [boxes, setBoxes] = useState(["a", "b", "c", "d"]);
    const [dots, setDots] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBoxes((prevBoxes) => {
                return [
                    prevBoxes[1],
                    prevBoxes[2],
                    prevBoxes[3],
                    prevBoxes[0],
                ];
            });
            if (dots === '') {
                setDots('.');
            } else if (dots === '.') {
                setDots('..');
            } else if (dots === '..') {
                setDots('...');
            } else {
                setDots('');
            }


        }, 500);

        return () => clearInterval(intervalId);


    }, [dots]);

    return (
        <div className="h-screen flex flex-col justify-center items-center w-screen fixed bg-white">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 font-cubano outline-title">
                {boxes.map((box, index) => (
                    <div
                        key={box}
                        className={classNames({
                            "bg-green-500 p-4 rounded-sm": box === "a",
                            "bg-blue-500 p-4 rounded-sm": box === "b",
                            "bg-red-500 p-4 rounded-sm": box === "c",
                            "bg-yellow-500 p-4 rounded-sm": box === "d",
                        })}
                    >
                        <div className="h-full flex justify-center items-center text-white font-bold text-2xl">
                            {box}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-24 font-cubano outline-title py-2 w-28 text-center rounded-sm bg-bingu text-white">Loading{dots}</div>
        </div>
    );
}

export default Loading