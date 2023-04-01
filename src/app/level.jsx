"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import getUsersByID from "@/utils/getUsersById";
import Loading from "./loading";
import { useRouter } from "next/navigation";

function Level({ onCloseClick, level, uuid }) {
  const dataUser = getUsersByID(uuid);
  const initValue = {
    name: "",
    email: "",
    avatar: "",
    usia: 0,
    timeSpend: 0,
    level: 1,
    star: [
      {
        id: "",
        level: 1,
        star: 0,
      },
    ],
  };
  const [loadingLevel, setLoadingLevel] = useState(false);
  const [slideLevel, setSlideLevel] = useState(true);
  const slideLevelFirst = [];
  const slideLevelSecond = [];
  const [userData, setUserData] = useState(initValue);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (dataUser) {
      setUserData(dataUser);
      console.log("ok data user ke set");
    }
  }, [dataUser]);

  function handleBelajar(i) {
    setLoading(true);
    router.push(`belajar/${i}`);
  }
  for (let i = 1; i <= 4; i++) {
    if (i <= userData.level) {
      slideLevelFirst.push(
        <div key={i} onClick={() => handleBelajar(i)}>
          <motion.div
            animate={{ scale: loadingLevel ? 0 : 1 }}
            className="bg-btn-level bg-center bg-contain bg-no-repeat h-16 w-16 grid place-content-center relative"
          >
            <span className="text-white outline-title text-2xl font-cubano">
              {i}
            </span>
            <div className="flex absolute -bottom-3 -mx-2 justify-between">
              <ContentStar i={userData.star[i - 1]} />
            </div>
          </motion.div>
        </div>
      );
    } else {
      slideLevelFirst.push(
        <motion.div
          key={i}
          animate={{ scale: loadingLevel ? 0 : 1 }}
          className="bg-btn-lock bg-center bg-contain bg-no-repeat h-16 w-16 grid place-content-center"
        ></motion.div>
      );
    }
  }
  for (let i = 5; i <= 8; i++) {
    if (i <= level) {
      slideLevelSecond.push(
        <div onClick={() => handleBelajar(i)} key={i}>
          <motion.div
            animate={{ scale: loadingLevel ? 0 : 1 }}
            className="bg-btn-level bg-center bg-contain bg-no-repeat h-16 w-16 grid place-content-center relative"
          >
            <span className="text-white outline-title text-2xl font-cubano">
              {i}
            </span>
            <div className="flex absolute -bottom-3 -mx-2 justify-between">
              <ContentStar i={userData.star[i - 1]} />
            </div>
          </motion.div>
        </div>
      );
    } else {
      slideLevelSecond.push(
        <motion.div
          key={i}
          animate={{ scale: loadingLevel ? 0 : 1 }}
          className="bg-btn-lock bg-center bg-contain bg-no-repeat h-16 w-16 grid place-content-center"
        ></motion.div>
      );
    }
  }

  function ContentStar({ i }) {
    if (i.stars == 0) {
      return (
        <>
          <Image
            src="/assets/img/icon-star-empty.png"
            width={24}
            height={24}
            priority
          />
          <Image
            src="/assets/img/icon-star-empty.png"
            width={32}
            height={32}
            priority
          />
          <Image
            src="/assets/img/icon-star-empty.png"
            width={24}
            height={24}
            priority
          />
        </>
      );
    }
    if (i.stars == 1) {
      return (
        <>
          <Image
            src="/assets/img/icon-star.png"
            width={24}
            height={24}
            priority
          />
          <Image
            src="/assets/img/icon-star-empty.png"
            width={32}
            height={32}
            priority
          />
          <Image
            src="/assets/img/icon-star-empty.png"
            width={24}
            height={24}
            priority
          />
        </>
      );
    }
    if (i.stars == 2) {
      return (
        <>
          <Image
            src="/assets/img/icon-star.png"
            width={24}
            height={24}
            priority
          />
          <Image
            src="/assets/img/icon-star.png"
            width={32}
            height={32}
            priority
          />
          <Image
            src="/assets/img/icon-star-empty.png"
            width={24}
            height={24}
            priority
          />
        </>
      );
    }
    if (i.stars == 3) {
      return (
        <>
          <Image
            src="/assets/img/icon-star.png"
            width={24}
            height={24}
            priority
          />
          <Image
            src="/assets/img/icon-star.png"
            width={32}
            height={32}
            priority
          />
          <Image
            src="/assets/img/icon-star.png"
            width={24}
            height={24}
            priority
          />
        </>
      );
    }
  }

  const changeLevel = (bool) => {
    if (bool !== slideLevel) {
      setLoadingLevel(true);
      setTimeout(() => {
        setLoadingLevel(false);
        setSlideLevel(bool);
      }, 200);
    } else {
      navigator.vibrate(225);
    }
  };
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <audio autoPlay>
          <source src="/assets/sound/sfx-jump.mp3" type="audio/mpeg" />
        </audio>
        <div className="fixed h-screen w-screen bg-black z-40 opacity-40"></div>
        <motion.div
          initial={{ opacity: 0, marginTop: "40%" }}
          animate={{ opacity: 1, marginTop: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-container-listlevel w-[300px] h-[370px] bg-center bg-contain bg-no-repeat flex flex-col justify-between items-center py-5"
        >
          <div className="absolute right-8 top-8 cursor-pointer active:scale-90 duration-100">
            <Image
              src="/assets/img/icon-close.png"
              alt=""
              className=""
              onClick={onCloseClick}
              width={24}
              height={24}
            />
          </div>
          <div className="text-center pt-2">
            <span className="text-white font-cubano text-3xl outline-title">
              level
            </span>
          </div>
          {slideLevel ? (
            <div className="grid grid-cols-2 grid-rows-2 gap-6 -mt-4">
              {slideLevelFirst}
            </div>
          ) : (
            <div className="grid grid-cols-2 grid-rows-2 gap-6 -mt-4">
              {slideLevelSecond}
            </div>
          )}
          <div className="flex relative -top-6 gap-4">
            <div
              className="bg-btn-left bg-center bg-contain bg-no-repeat h-12 w-12 grid place-content-center cursor-pointer active:scale-90 duration-100"
              onClick={() => changeLevel(true)}
            ></div>
            <div
              className="bg-btn-right bg-center bg-contain bg-no-repeat h-12 w-12 grid place-content-center cursor-pointer active:scale-90 duration-100"
              onClick={() => changeLevel(false)}
            ></div>
          </div>
        </motion.div>
      </>
    );
  }
}

export default Level;
