import React from "react";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";
function DevProfile({ onCloseClick }) {
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-ping border-2 border-bingu rounded-lg w-72 h-48  flex flex-col px-4 py-2"
      >
        <div className="absolute right-0 -top-12 cursor-pointer active:scale-90 duration-100 bg-white p-1 pb-0 rounded-md">
          <Image
            src="/assets/img/icon-close.png"
            alt=""
            className=""
            onClick={onCloseClick}
            width={18}
            height={18}
          />
        </div>
        <div className="absolute -top-16 left-4">
          <Image
            src="/assets/img/icon-bigdev.png"
            width={64}
            height={96}
            priority
          />
        </div>
        <div className="w-full flex justify-end">
          <h4 className="font-cubano text-white w-36 outline-title text-lg text-center">
            Profil Pengembang
          </h4>
        </div>
        <div className="">
          <p className="text-sm text-slate-800 font-medium">
            Nama saya Hanif Tri Widiyanto, mahasiswa Teknologi Pendidikan 2018.
            Media pembelajaran ini diperuntukkan sebagai penyelesaian masa studi
            akhir di Teknologi Pendidikan, UNJ.
          </p>
        </div>
        <div className="absolute -bottom-8 flex gap-4">
          <Link
            className="bg-yellow-100 rounded-md px-2 py-1 text-xs"
            href="https://instagram.com/hanifwidiyanto"
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            className="bg-yellow-100 rounded-md px-2 py-1 text-xs"
            href="https://hanifwidiyanto.com"
            target="_blank"
          >
            Official Site
          </Link>
          <Link
            className="bg-yellow-100 rounded-md px-2 py-1 text-xs"
            href="https://hanifwidiyanto.com/portfolio"
            target="_blank"
          >
            Portfolio
          </Link>
        </div>
      </motion.div>
    </>
  );
}

export default DevProfile;
