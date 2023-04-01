"use client";

import React, { useState } from "react";
import Header from "./header";
import Effect from "./effect";
import Content from "./content";
import Footer from "./footer";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
import Bumper from "./bumper";

function Page() {
  function getStar(mode) {
    if (mode === "hard") return 3;
    if (mode === "medium") return 2;
    if (mode === "easy") return 1;
  }
  const searchParams = useSearchParams();
  const uuid = searchParams.get("uuid");
  const level = searchParams.get("level");
  const stars = getStar(searchParams.get("mode"));
  const mode = searchParams.get("mode");
  const totalTask = searchParams.get("task");
  const totalTrue = searchParams.get("true");
  const time = searchParams.get("time");

  return (
    <div className="bg-home h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-between relative">
      <Effect />
      <Header totalTrue={totalTrue} totalTask={totalTask} level={level} />
      <Content
        totalTrue={totalTrue}
        totalTask={totalTask}
        level={level}
        mode={mode}
        time={time}
      />
      <Footer
        level={level}
        mode={mode}
        stars={stars}
        uuid={uuid}
        totalTrue={totalTrue}
        totalTask={totalTask}
      />
      <Bumper totalTrue={totalTrue} totalTask={totalTask} />
    </div>
  );
}

export default Page;
