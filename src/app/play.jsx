"use client";

import React, { useEffect, useState } from "react";
import Level from "./level";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/legacy/image";

export default function Play({ level, uuid }) {
  const { data: session, status } = useSession({ required: true });

  const [displayLevel, setDisplayLevel] = useState(false);
  function handleOpen() {
    setDisplayLevel(true);
  }
  function handleClose() {
  }

  return (
    <>
      <motion.div
        initial={{ y: "80%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        className="flex flex-col items-center gap-8 -mt-8 w-full justify-center"
      >
        {/* <Image src="/assets/img/logo-acakata.png" priority width={140} height={112} /> */}
        <div className="w-fit">
          <div className="bg-playbtn w-44 h-14 bg-center bg-contain bg-no-repeat relative ">
            <div
              className="bg-btn-play w-44 h-14 bg-center bg-contain bg-no-repeat absolute -top-2 cursor-pointer z-10 active:scale-90 duration-100 grid place-content-center"
              onClick={handleOpen}
            >
              <h2 className="text-4xl font-cubano outline-title text-white">
                play
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
      {displayLevel && (
        <Level onCloseClick={handleClose} level={level} uuid={uuid} />
      )}
    </>
  );
}
