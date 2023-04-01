"use client";

import Image from "next/legacy/image";
import React from "react";
import { motion } from "framer-motion";

export default function Leaderboard({ data }) {
  function avatar(e) {
    if (e) {
      return e;
    } else {
      return "https://www.shareicon.net/data/128x128/2016/06/27/787474_man_512x512.png";
    }
  }
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      className="bg-container-leaderboard flex w-full h-[720px] bg-bottom bg-no-repeat bg-contain absolute -bottom-40  "
    >
      <div className="mx-14 w-full pt-4">
        <div className="flex flex-col w-full items-center">
          <span className="font-cubano text-white outline-title text-2xl">
            Papan peringkat
          </span>
          <span className="font-cubano text-white outline-title text-2xl">
            2023
          </span>
        </div>
        <div className="mt-8 pt-4 pb-12 flex flex-col gap-5 h-4/6 overflow-scroll no-scrollbar">
          {data?.map((e, i) => (
            <div
              className={
                i <= 3
                  ? "bg-container-top-leaderboard w-full rounded-md h-[82px] bg-center bg-no-repeat bg-cover"
                  : "bg-container-bottom-leaderboard w-full rounded-md h-[82px] bg-center bg-no-repeat bg-cover"
              }
              key={i}
            >
              <div className="flex w-full justify-between h-full items-center px-3">
                <div className="flex gap-4 h-full items-center">
                  {/* <div className='w-[49px] h-[49px] bg-center bg-cover bg-no-repeat bg-container-profile-picture rounded-md'></div> */}
                  <div className="min-h-[48px] min-w-[48px]">
                    <Image
                      alt="avatar"
                      src={avatar(e.avatar)}
                      width={48}
                      height={48}
                      layout="responsive"
                      priority
                      className="rounded-md"
                    />
                  </div>
                  <span className="text-xl font-cubano text-white outline-title">
                    {e.name}
                  </span>
                </div>
                <div className="flex flex-col w-full justify-between items-end">
                  <div className="flex gap-2 items-center">
                    <span className="italic text-white text-lg font-cubano outline-title">
                      level
                    </span>
                    <span className="text-kuning text-2xl font-cubano outline-title italic">
                      {e.level}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/assets/img/icon-stars.png"
                      alt="icon stars"
                      width={40}
                      height={32}
                      priority
                    />
                    <span className="text-kuning text-2xl font-cubano outline-title italic">
                      {e.totalStars}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
