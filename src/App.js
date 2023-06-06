import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import MembacaPage from './Pages/MembacaPage';
import { useEffect } from 'react';
import GameMembaca from './Pages/GameMembaca';
import FinishMembaca from './Pages/FinishMembaca';
import MenyanyidanMenari from './Pages/MenyanyidanMenari';
import GameMenyanyidanMenari from './Pages/GameMenanyidanMenari';
import FinishMenyanyidanMenari from './Pages/FinishMenyanyidanMenari';
import Berhitung from './Pages/Berhitung';
import GameBerhitung from './Pages/GameBerhitung';

import srcAudio1 from "./asset/mp3/lagu1.mp3"
import srcAudio2 from "./asset/mp3/lagu2.mp3"
import srcAudio3 from "./asset/mp3/lagu3.mp3"
import srcSound1 from "./asset/mp3/sound1.mp3"
import srcSound2 from "./asset/mp3/sound2.mp3"
import FinishBerhitung from './Pages/FinishBerhitung';

function App() {

  const audio1 = new Audio();
  audio1.src = srcAudio1;
  audio1.loop = true;
  const audio2 = new Audio();
  audio2.src = srcAudio2;
  audio2.loop = true;
  const audio3 = new Audio();
  audio3.src = srcAudio3;
  audio3.loop = true;
  const sound1 = new Audio();
  sound1.src = srcSound1;
  const sound2 = new Audio();
  sound2.src = srcSound2;

  useEffect(() => {
    window.scrollTo(0,0);
})
return (
    <Router>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/membaca/' element={<MembacaPage audio1={audio1} audio2={audio2} audio3={audio3} sound1={sound1} sound2={sound2}/>}/>
          <Route path='/membaca/game/' element={<GameMembaca audio1={audio1} audio2={audio2} audio3={audio3} sound1={sound1} sound2={sound2}/>}/>
          <Route path='/membaca/finish/' element={<FinishMembaca/>}/>
          <Route path='/menyanyimenari/' element={<MenyanyidanMenari audio1={audio1} audio2={audio2} audio3={audio3} sound1={sound1} sound2={sound2}/>}/>
          <Route path='/menyanyimenari/game/' element={<GameMenyanyidanMenari audio1={audio1} audio2={audio2} audio3={audio3} sound1={sound1} sound2={sound2}/>}/>
          <Route path='/menyanyimenari/finish/' element={<FinishMenyanyidanMenari/>}/>
          <Route path='/berhitung/' element={<Berhitung audio1={audio1} audio2={audio2} audio3={audio3} sound1={sound1} sound2={sound2}/>}/>
          <Route path='/berhitung/game/' element={<GameBerhitung audio1={audio1} audio2={audio2} audio3={audio3} sound1={sound1} sound2={sound2}/>}/>
          <Route path='/berhitung/finish/' element={<FinishBerhitung/>}/>
      </Routes>
    </Router>
  )
}

export default App;
