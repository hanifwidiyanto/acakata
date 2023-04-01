"use client";

import GetGamesByLevel from "@/utils/GetGamesBylevel";
import React, { useEffect, useState } from "react";
import Game from "./Game";
import Header from "./header";
import { useSession } from "next-auth/react";
import ValidateEmail from "@/utils/ValidateEmail";

export default function Page({ params }) {
  const { data: session } = useSession();
  const email = session?.user?.email;
  const data = ValidateEmail(email);
  const dataGames = GetGamesByLevel(params.play[0]);
  const [taskGame, setTaskGame] = useState([]);

  useEffect(() => {
    if (dataGames?.length > 1) {
      const shuffledData = dataGames?.sort(() => 0.5 - Math.random());

      // Split shuffled data into each mode based on percentage
      const easyWords = shuffledData.slice(0, 5);
      const mediumWords = shuffledData.slice(0, 8);
      const hardWords = dataGames;

      if (params.play[1] === "hard") setTaskGame(hardWords);
      if (params.play[1] === "medium") setTaskGame(mediumWords);
      if (params.play[1] === "easy") setTaskGame(easyWords);
    }
  }, [dataGames, params.play]);
  console.log(taskGame);
  return (
    <div className="bg-gameplay h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-between">
      <Header level={params.play[0]} />
      <Game
        taskGame={taskGame}
        uuid={data?.uuid}
        level={params.play[0]}
        mode={params.play[1]}
      />
    </div>
  );
}
