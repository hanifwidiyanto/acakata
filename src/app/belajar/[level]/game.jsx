"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/legacy/image";
import { FaPlay } from "react-icons/fa";
import { useSession } from "next-auth/react";
import ValidateEmail from "@/utils/ValidateEmail";
import axios from "axios";
import Footer from "./footer";
import GetMateriByLevel from "@/utils/GetMateri";
import Mode from "./mode";
import GetUsersByID from "@/utils/GetUsersById";

function Game({ level }) {
  const materi = GetMateriByLevel(level);
  const [thumb, setThumb] = useState(
    "https://i.ytimg.com/vi/kV_SDN9QYM0/hqdefault.jpg"
  );
  const [video, setVideo] = useState(
    "https://www.youtube.com/embed/R0caSJYTXiw"
  );

  const [doneButton, setDoneButton] = useState(true);
  const [timePlay, setTimePlay] = useState(null);
  const [timeStop, setTimeStop] = useState(null);
  const [isPlay, setIsPlay] = useState(true);

  const { data: session } = useSession();
  const email = session?.user?.email;
  const dataUser = ValidateEmail(email);
  const uuid = dataUser?.uuid;
  const detailUser = GetUsersByID(uuid);
  const starThisLevel = detailUser?.star[level - 1]?.stars;
  const audioRef = useRef(null);
  const [timeSent, setTimeSent] = useState(false);

  function onPlayClick() {
    const audio = audioRef.current;
    audio.play();

    setIsPlay(false);
    setDoneButton(false);
    setTimePlay(Date.now());
    setRunning(true);
    const durasi = [2, 10];
    if (durasi) {
      const durasiConvert = (durasi[0] * 60 + durasi[1]) * 500;
      setTimeout(() => {
        setDoneButton(true);
      }, durasiConvert);
    }
  }

  const updateTimeSpend = async (data) => {
    await axios
      .post("https://cdn.acakata.app/update/timeSpend/" + uuid, data)
      .then((res) => {
        console.log(res);
        setTimeSent(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (materi) {
      setThumb(materi.thumb);
      setVideo(materi?.video + "?autoplay=1");
    }
    if (timePlay & timeStop) {
      const timeSpend = timeStop - timePlay;
      const prevTimeSpend = dataUser?.timeSpend;
      updateTimeSpend({ timeSpend: prevTimeSpend + timeSpend });
      setRunning(false);
    }

    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [
    timeStop,
    running,
    materi
  ]);

  const menit = Math.floor(time / 60);
  const detik = Math.round(time % 60);

  const [displayMode, setDisplayMode] = useState(false);
  function handleCompleteLearning() {
    setDisplayMode(true);
    if (!timeSent) setTimeStop(Date.now());
  }
  function handleClose() {
    setDisplayMode(false);
    console.log("ok");
  }

  return (
    <>
      <audio ref={audioRef} src="/assets/sound/instruction/mulai-belajar.mp3" />
      {displayMode && (
        <Mode onCloseClick={handleClose} star={starThisLevel} level={level} />
      )}
      <div className="flex w-full justify-center flex-col items-center">
        <div className="bg-container-gameplay w-[321px] h-[84px] bg-no-repeat bg-center bg-contain flex justify-center items-center relative text-center flex-col">
          <div className="font-cubano text-2xl outline-title text-white flex flex-col gap-0 relative -top-2">
            <span>Video</span>
            <span className="-mt-1">Pembelajaran</span>
          </div>
        </div>
        <div className="w-80 h-60 bg-bggameplay border-2 border-blue-900 rounded-lg mt-8 shadow-lg relative">
          {isPlay ? (
            <>
              <Image
                alt="thumbnail"
                src={thumb}
                width={320}
                height={240}
                className="relative blur"
                priority
              />
              <FaPlay
                className="absolute transform top-1/2 left-1/2 text-white text-6xl -translate-x-1/2 -translate-y-1/2 cursor-pointer active:scale-90 duration-100"
                onClick={() => onPlayClick()}
              />
            </>
          ) : (
            <iframe
              title="Youtube Embed"
              width="100%"
              height="100%"
              src={video}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </div>
        {doneButton ? (
          <div
            className="flex justify-center w-full mt-12 active:scale-90 duration-100 cursor-pointer"
            onClick={() => handleCompleteLearning()}
          >
            <div className="w-fit">
              <button
                type="submit"
                className="bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg"
              >
                <Image
                  src="/assets/img/icon-done.png"
                  alt="icondone"
                  width={24}
                  height={24}
                  priority
                />
                <span className="text-xl">selesai</span>
              </button>
            </div>
          </div>
        ) : (
          <div
            className="flex justify-center w-full mt-12 active:scale-90 duration-100 cursor-pointer"
            onClick={() => navigator.vibrate(225)}
          >
            <div className="w-fit">
              <button
                type="submit"
                className="bg-btn-videolock font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg"
              ></button>
            </div>
          </div>
        )}
      </div>
      <Footer menit={menit} detik={detik} />
    </>
  );
}

export default Game;
