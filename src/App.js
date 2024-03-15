import React, { useState } from "react";
import './App.css';

import useSound from 'use-sound';
import Heater1 from './assets/sounds/Heater1.mp3';
import Heater2 from './assets/sounds/Heater2.mp3';
import Heater3 from './assets/sounds/Heater3.mp3';
import Heater4 from './assets/sounds/Heater4.mp3';
import Clap from './assets/sounds/Clap.mp3';
import OpenHH from './assets/sounds/OpenHH.mp3';
import KicknHat from './assets/sounds/KicknHat.mp3';
import Kick from './assets/sounds/Kick.mp3';
import ClosedHH from './assets/sounds/ClosedHH.mp3';


function App() {


  const [playSound1] = useSound(Heater1);
  const [playSound2] = useSound(Heater2);
  const [playSound3] = useSound(Heater3);
  const [playSound4] = useSound(Heater4);
  const [playSound5] = useSound(Clap);
  const [playSound6] = useSound(OpenHH);
  const [playSound7] = useSound(KicknHat);
  const [playSound8] = useSound(Kick);
  const [playSound9] = useSound(ClosedHH);

  const [expression, setExpression] = useState('Press Key')

  const handleClick = (value) => {
    setExpression(value);
}

  return (
    <div className="App">
      <div id="drum-machine">
        <h1 className='title'>DRUM MACHINE</h1>
        <input id="display" type="text" value={expression} readOnly />
        <button id="q" className="drum-pad" onClick={() => {handleClick("Heater 1"); playSound1()}}>Q</button>
        <button id="w" className="drum-pad" onClick={() => {handleClick("Heater 2"); playSound2()}}>W</button>
        <button id="e" className="drum-pad" onClick={() => {handleClick("Heater 3"); playSound3()}}>E</button>
        <button id="a" className="drum-pad" onClick={() => {handleClick("Heater 4"); playSound4()}}>A</button>
        <button id="s" className="drum-pad" onClick={() => {handleClick("Clap"); playSound5()}}>S</button>
        <button id="d" className="drum-pad" onClick={() => {handleClick("Open HH"); playSound6()}}>D</button>
        <button id="z" className="drum-pad" onClick={() => {handleClick("Kick n' Hat"); playSound7()}}>Z</button>
        <button id="x" className="drum-pad" onClick={() => {handleClick("Kick"); playSound8()}}>X</button>
        <button id="c" className="drum-pad" onClick={() => {handleClick("Closed HH"); playSound9()}}>C</button>
      </div>
    </div>
  );
}

export default App;
