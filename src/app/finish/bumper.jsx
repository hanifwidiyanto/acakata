import React, { useState, useEffect } from "react";

function Bumper({ totalTrue, totalTask }) {
  const [isLolos, setIsLolos] = useState(false);
  const [berhasil] = useState(
    new Audio("/assets/sound/instruction/kamu-berhasil.mp3")
  );
  const [gagal] = useState(
    new Audio("/assets/sound/instruction/kamu-gagal.mp3")
  );
  const [finish] = useState(new Audio("/assets/sound/finish.mp3"));
  const [lose] = useState(new Audio("/assets/sound/lose.mp3"));
  useEffect(() => {
    if ((totalTrue / totalTask) * 100 > 50) {
      setIsLolos(true);
      finish.volume = 0.5;
      finish.play();
      berhasil.play();
    } else {
      lose.volume = 0.5;
      lose.play();
      gagal.play();
    }
  }, []);
}

export default Bumper;
