import React, { useState, useEffect } from "react";

function Bumper({ game, fileGame, taskGame }) {
  const [task, setTask] = useState([]);
  const [orderGame, setOrderGame] = useState(0);
  const [dengar] = useState(
    new Audio("/assets/sound/instruction/dengarkan-audio.mp3")
  );
  const [lihat] = useState(
    new Audio("/assets/sound/instruction/lihat-gambar.mp3")
  );
  useEffect(() => {
    console.log(task[orderGame]);
    if (task[orderGame]?.file?.split('.')[1] == "mp3") {
      dengar.play();
    } else if (task[orderGame]?.file?.split('.')[1] == "png") {
      lihat.play();
    }
    setOrderGame(orderGame + 1);
    if (taskGame) setTask(taskGame);
  }, [game]);
  console.log(task);
}

export default Bumper;
