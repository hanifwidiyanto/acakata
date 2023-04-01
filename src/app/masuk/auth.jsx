"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSession, signIn, getProviders } from "next-auth/react";
import Image from "next/legacy/image";

function Auth() {
  return (
    <>
      <audio autoPlay>
        <source src="/assets/sound/sfx-jump.mp3" type="audio/mpeg" />
      </audio>
      <motion.div initial={{ y: "250%" }} animate={{ y: "0%" }}>
        <div className="bg-container-login w-72 h-64 bg-contain bg-no-repeat bg-center">
          <div className="flex justify-center w-full pt-5">
            <h1 className="font-cubano text-3xl text-white outline-title">
              masuk
            </h1>
          </div>

          <div className="w-full flex flex-col pt-12 gap-6 h-full items-center">
            <h4 className="font-cubano text-white outline-title text-lg">
              masuk dengan google
            </h4>
            {/* <button onClick={() => signIn('google')}>Sign in</button> */}

            <button
              className="bg-white border-2 rounded-md border-kuning w-24 items-center justify-center h-8 flex gap-2"
              onClick={() => signIn("google")}
            >
              <Image
                alt="logo google"
                src="/assets/img/logo-google.png"
                width={12}
                height={12}
                priority
              />
              <span className="font-medium">Login</span>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Auth;
