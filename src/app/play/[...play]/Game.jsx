"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
import Footer from "./footer";
import { AiFillPauseCircle, AiFillSound } from "react-icons/ai";
import { RiCloseCircleFill, RiCloseCircleLine } from "react-icons/ri";
import CountScore from "./countScore";
import Bumper from "./bumper";

function Game({ taskGame, uuid, level, mode }) {
  const router = useRouter();

  const [isCountdownActive, setIsCountdownActive] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [game, setGame] = useState(taskGame[currentIndex]);
  const [answer, setAnswer] = useState("");
  const [countTrue, setCountTrue] = useState(1);
  const [gameDone, setGameDone] = useState(false);
  const [isCount, setIsCount] = useState(false);
  const [key, setKey] = useState(0); // state tambahan
  const [taskWord, setTaskWord] = useState("");
  const [fileGame, setFileGame] = useState("");
  const [deleteAns, setDeleteAns] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const typeAnswer = (e) => {
    if (answer.length < game?.word?.length) {
      setAnswer(answer + e);
    }
  };

  const handleAnswer = (ans) => {
    if (ans.length == game?.word?.length || ans.length > game?.word?.length) {
      setTimeout(() => {
        if (ans.toLowerCase() == game?.word.toLowerCase()) {
          let c = countTrue;
          setCountTrue(c + 1);
          setAnswer("");
          setKey(c + 1);
          setDeleteAns(false);
          setDisabledButton([]);
          const nextIndex = (currentIndex + 1) % taskGame.length;
          setCurrentIndex(nextIndex);
          if (nextIndex === 0) {
            setGameDone(true);
            const timeSpend = Date.now() - isCountdownActive;
            router.push(
              `/finish?true=${countTrue}&task=${taskGame.length}&uuid=${uuid}&level=${level}&mode=${mode}&time=${timeSpend}`
            );
          }
          setGame(taskGame[nextIndex]);
        } else if (ans !== game?.word) {
          setIsWrong(true);
          setTimeout(() => {
            setAnswer("");
            console.log("oks");
            setIsWrong(false);
            setDisabledButton([]);
            setCurrentIndex(currentIndex);
          }, 2400);
        }
      }, 300);
      return ans;
    } else {
      return ans;
    }
  };
  function shuffle(array) {
    for (let i = array?.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  useEffect(() => {
    if (taskGame) setGame(taskGame[0]);
  }, [taskGame]);

  useEffect(() => {
    if (game) {
      let word = game?.word.toLowerCase();
      console.log(word);
      const characters = word?.split("");
      let fileg = game?.file?.split(".")[1];
      let randomWord = shuffle(characters)?.join("");
      let valid = true;
      while (valid) {
        if (randomWord !== word) {
          setTaskWord(randomWord);
          setFileGame(fileg);
          valid = false;
        } else {
          randomWord = shuffle(characters)?.join("");
        }
      }
    }
  }, [game, gameDone]);

  function TaskGame() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    function handlePlayPause() {
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
        setTimeout(() => {
          setIsPlaying(false);
        }, 5000);
      } else {
        setIsPlaying(false);
        audioRef.current.pause();
        console.log("play");
      }
    }
    if (fileGame === "png") {
      return (
        <>
          <Image
            src={`https://cdn.acakata.app/${game?.file}`}
            layout="fill"
            objectFit="contain"
            alt="sapi"
            priority
          />
        </>
      );
    } else if (fileGame == "mp3") {
      return (
        <>
          <div className="h-full w-full" onClick={() => handlePlayPause()}>
            <button>
              {isPlaying ? (
                <AiFillPauseCircle className="text-bingu text-6xl" />
              ) : (
                <AiFillSound className="text-bingu text-6xl" />
              )}
            </button>
          </div>
          <audio ref={audioRef} src={`https://cdn.acakata.app/${game?.file}`} />
        </>
      );
    }
  }
  const [disabledButton, setDisabledButton] = useState([]);
  function handleType(e, i) {
    const letter = e.target.innerText;
    console.log(i);
    typeAnswer(letter);
    setDisabledButton([...disabledButton, i]);
    setDeleteAns(true);
    if (!isCount) {
      setIsCountdownActive(Date.now());
      setIsCount(true);
    }
  }

  function handleDelete() {
    setAnswer("");
    setDisabledButton([]);
    setDeleteAns(false);
  }
  function Soal() {
    return (
      <>
        <div className="w-72 h-48 bg-bggameplay border-2 border-bingu rounded-lg mt-8 shadow-lg grid place-content-center relative">
          <TaskGame />
        </div>
        <div className="w-72 flex justify-between mt-4">
          {taskWord?.split("").map((e, i) => (
            <button
              type="button"
              key={i}
              className={
                disabledButton.includes(i)
                  ? "w-10 h-10 border-white outline-bingu bg-bingu border-2 rounded-md grid place-content-center text-white font-cubano text-xl duration-300"
                  : "w-10 h-10 border-bingu bg-bggameplay border-2 rounded-md grid place-content-center text-bingu font-cubano text-xl duration-300"
              }
              onClick={(e) => handleType(e, i)}
              disabled={disabledButton.includes(i)}
            >
              {e}
            </button>
          ))}
        </div>
      </>
    );
  }

  function WrongAns() {
    return (
      <div
        className={
          isWrong
            ? "fixed top-0 left-0 h-screen w-full flex justify-center items-center z-50 duration-300 opacity-1 visible"
            : "fixed top-0 left-0 h-screen w-full flex justify-center items-center z-50 opacity-0 invisible duration-300"
        }
      >
        <Image
          src="/assets/img/gif-wrong.gif"
          width={200}
          height={200}
          autoPlay
        />
      </div>
    );
  }

  console.log("render");
  if (gameDone) {
    return <CountScore />;
  } else {
    return (
      <>
        {answer !== "" && <WrongAns />}
        <div className="flex w-full justify-center flex-col items-center">
          <div className="bg-container-gameplay w-[321px] h-[84px] bg-no-repeat bg-center bg-contain flex justify-center items-center relative text-center flex-col">
            <div className="font-cubano text-2xl outline-title text-white flex flex-col gap-0 relative -top-2">
              <span>Evaluasi Belajar</span>
            </div>
          </div>

          <Soal />
          <form className="w-72 mt-6">
            <input
              type="text"
              className="w-full bg-transparent border-b-2 text-center text-white outline-title font-cubano text-xl"
              value={handleAnswer(answer)}
              disabled
            />
          </form>
          <div className="mt-12 -mb-8">
            {deleteAns ? (
              <RiCloseCircleFill
                className="w-12 h-12 text-white"
                onClick={() => handleDelete()}
              />
            ) : (
              <RiCloseCircleLine className="w-12 h-12 text-white" />
            )}
          </div>
        </div>
        <Footer
          isCountdownActive={isCountdownActive}
          taskGame={taskGame}
          countTrue={countTrue}
          level={level}
          mode={mode}
          uuid={uuid}
        />
        <Bumper
          fileGame={fileGame}
          game={game}
          key={game}
          taskGame={taskGame}
        />
      </>
    );
  }
}

export default Game;
