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
  audio1.load();
  audio1.src = srcAudio1;
  audio1.autoplay = true;
  audio1.loop = true;
  const audio2 = new Audio();
  audio2.load();
  audio2.src = srcAudio2;
  audio2.autoplay = true;
  audio2.loop = true;
  const audio3 = new Audio();
  audio3.load();
  audio3.src = srcAudio3;
  audio3.autoplay = true;
  audio3.loop = true;
  const sound1 = new Audio();
  sound1.load();
  sound1.src = srcSound1;
  sound1.autoplay = true;
  const sound2 = new Audio();
  sound2.load();
  sound2.src = srcSound2;
  sound2.autoplay = true;

  useEffect(() => {
    window.scrollTo(0,0);
})
return (
    <Router>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/membaca/' element={<MembacaPage audio1={audio1}/>}/>
          <Route path='/membaca/game/' element={<GameMembaca audio1={audio1} sound1={sound1} sound2={sound2}/>}/>
          <Route path='/membaca/finish/' element={<FinishMembaca/>}/>
          <Route path='/menyanyimenari/' element={<MenyanyidanMenari/>}/>
          <Route path='/menyanyimenari/game/' element={<GameMenyanyidanMenari sound1={sound1} sound2={sound2}/>}/>
          <Route path='/menyanyimenari/finish/' element={<FinishMenyanyidanMenari/>}/>
          <Route path='/berhitung/' element={<Berhitung audio3={audio3}/>}/>
          <Route path='/berhitung/game/' element={<GameBerhitung audio3={audio3} sound1={sound1} sound2={sound2}/>}/>
          <Route path='/berhitung/finish/' element={<FinishBerhitung/>}/>
      </Routes>
    </Router>
  )
}

export default App;
