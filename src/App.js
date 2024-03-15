import React, { useState, useEffect } from "react";
import "./App.css";
import DrumPads from "./components/DrumPads";

// import useSound from 'use-sound';
// import Heater1 from './assets/sounds/Heater1.mp3';
// import Heater2 from './assets/sounds/Heater2.mp3';
// import Heater3 from './assets/sounds/Heater3.mp3';
// import Heater4 from './assets/sounds/Heater4.mp3';
// import Clap from './assets/sounds/Clap.mp3';
// import OpenHH from './assets/sounds/OpenHH.mp3';
// import KicknHat from './assets/sounds/KicknHat.mp3';
// import Kick from './assets/sounds/Kick.mp3';
// import ClosedHH from './assets/sounds/ClosedHH.mp3';

function App() {
  const drumPads = [
    {
      key: "Q",
      name: "Heater 1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      key: "W",
      name: "Heater 2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      key: "E",
      name: "Heater 3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      key: "A",
      name: "Heater 4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      key: "S",
      name: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      key: "D",
      name: "Open HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      key: "Z",
      name: "Kick n' Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      key: "X",
      name: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      key: "C",
      name: "Closed HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const [currentDrum, setCurrentDrum] = useState("Press a Key");

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      const upperKey = event.key.toUpperCase();
      const drum = drumPads.find((item) => item.key === upperKey);
      if (drum) {
        play(upperKey, drum.name);
      }
    });
  });

  const play = (key, drum) => {
    const audio = document.getElementById(key);
    setCurrentDrum(drum);
    audio.currentTime = 0;
    audio.play();
  };

  // const [playSound1] = useSound(Heater1);
  // const [playSound2] = useSound(Heater2);
  // const [playSound3] = useSound(Heater3);
  // const [playSound4] = useSound(Heater4);
  // const [playSound5] = useSound(Clap);
  // const [playSound6] = useSound(OpenHH);
  // const [playSound7] = useSound(KicknHat);
  // const [playSound8] = useSound(Kick);
  // const [playSound9] = useSound(ClosedHH);

  //   const handleClick = (value) => {
  //     setExpression(value);
  // }

  return (
    <div className="App">
      <div id="drum-machine">
        <h1 className="title">DRUM MACHINE</h1>
        <input id="display" type="text" value={currentDrum} readOnly />
        <DrumPads drumPads={drumPads} play={play} />
        {/* <button id="q" className="drum-pad" onClick={() => {handleClick("Heater 1"); playSound1()}}>Q</button>
        <button id="w" className="drum-pad" onClick={() => {handleClick("Heater 2"); playSound2()}}>W</button>
        <button id="e" className="drum-pad" onClick={() => {handleClick("Heater 3"); playSound3()}}>E</button>
        <button id="a" className="drum-pad" onClick={() => {handleClick("Heater 4"); playSound4()}}>A</button>
        <button id="s" className="drum-pad" onClick={() => {handleClick("Clap"); playSound5()}}>S</button>
        <button id="d" className="drum-pad" onClick={() => {handleClick("Open HH"); playSound6()}}>D</button>
        <button id="z" className="drum-pad" onClick={() => {handleClick("Kick n' Hat"); playSound7()}}>Z</button>
        <button id="x" className="drum-pad" onClick={() => {handleClick("Kick"); playSound8()}}>X</button>
        <button id="c" className="drum-pad" onClick={() => {handleClick("Closed HH"); playSound9()}}>C</button> */}
      </div>
    </div>
  );
}

export default App;
