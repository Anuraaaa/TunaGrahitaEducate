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

function App() {

  useEffect(() => {
    window.scrollTo(0,0);
})
return (
    <Router>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/membaca' element={<MembacaPage/>}/>
          <Route path='/membaca/game' element={<GameMembaca/>}/>
          <Route path='/membaca/finish' element={<FinishMembaca/>}/>
          <Route path='/menyanyimenari/' element={<MenyanyidanMenari/>}/>
          <Route path='/menyanyimenari/game' element={<GameMenyanyidanMenari/>}/>
          <Route path='/menyanyimenari/finish' element={<FinishMenyanyidanMenari/>}/>
          <Route path='/berhitung' element={<Berhitung/>}/>
      </Routes>
    </Router>
  )
}

export default App;
