'use client'

import React, {useState, useEffect} from "react";

function CountScore() {
  const [dots, setDots] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (dots === "") {
        setDots(".");
      } else if (dots === ".") {
        setDots("..");
      } else if (dots === "..") {
        setDots("...");
      } else {
        setDots("");
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [dots]);
  return (
    <div className="w-full flex justify-center h-full items-center">
      <div className="mt-24 font-cubano outline-title py-2 px-4 text-center rounded-sm bg-bingu text-white">
        Menghitung Skor{dots}
      </div>
    </div>
  );
}

export default CountScore;
