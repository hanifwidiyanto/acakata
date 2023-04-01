"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import axios from "axios";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
import Loading from "./loading";

function Setting({ initValue, onCloseClick }) {
  const router = useRouter();
  const initState = { values: initValue };
  const [formData, setFormData] = useState(initState);

  const { values } = formData;

  const handleChange = ({ target }) => {
    setFormData((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.id]: target.value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: formData.values.name,
      usia: formData.values.usia,
    };
    setFormData((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        name: formData.values.name,
        usia: formData.values.usia,
      },
    }));
    await axios
      .post("https://cdn.acakata.app/update/user/" + values.uuid, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    onCloseClick();
    router.refresh();
    // harusnya pake alert udah berhasil gt, tapi nanti aja dibuat , ribet itu mesti bikin components nya dulu
    // gajadi bikin alert soalnya ga sempet waktunya wkakakak
  };
  const [isLoading, setIsLoading] = useState(false);
  function handleOut() {
    setIsLoading(true);
    signOut();
  }
  if (isLoading) {
    return <Loading />;
  }
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-container-login w-72 h-64 bg-center bg-contain bg-no-repeat flex flex-col px-8 py-4"
      >
        <div className="absolute right-7 top-8 cursor-pointer active:scale-90 duration-100">
          <Image
            src="/assets/img/icon-close.png"
            alt=""
            className=""
            onClick={onCloseClick}
            width={18}
            height={18}
          />
        </div>
        <div className="text-center pt-2">
          <span className="text-white font-cubano text-2xl outline-title">
            pengaturan
          </span>
        </div>
        <form
          autoComplete="off"
          className="mt-4 flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-4 mt-4">
            <label
              className="font-cubano text-white outline-title"
              htmlFor="Nama"
            >
              Nama
            </label>
            <input
              type="text"
              placeholder={values.name}
              id="name"
              className="border-2 border-biru w-36 appearance-none rounded-md text-center"
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <div className="flex gap-4 mt-8">
            <label
              className="font-cubano text-white outline-title"
              htmlFor="Usia"
            >
              Usia
            </label>
            <input
              type="number"
              placeholder={values.usia}
              id="usia"
              className="border-2 border-biru w-16 appearance-none rounded-md text-center"
              onChange={handleChange}
              value={values.usia}
            />
          </div>
          <div className="flex w-full justify-between items-end">
            <button
              type="submit"
              className="bg-btn-login font-cubano w-[80px] h-[28px] bg-contain bg-no-repeat bg-center text-center grid place-content-center text-white outline-title text-md mt-6"
            >
              submit
            </button>

            <div
              onClick={() => handleOut()}
              className="bg-btn-nologin font-cubano w-[70px] h-[24px] bg-contain bg-no-repeat bg-center text-center grid place-content-center text-white outline-title  text-sm active:scale-90 duration-100 cursor-pointer"
            >
              keluar{" "}
            </div>
          </div>
        </form>
      </motion.div>
    </>
  );
}

export default Setting;
