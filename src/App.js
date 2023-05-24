import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import MembacaPage from './Pages/MembacaPage';
import { useEffect } from 'react';
import GameMembaca from './Pages/GameMembaca';

function App() {

  useEffect(() => {
    window.scrollTo(0,0);
})
return (
    <Router>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/membaca' element={<MembacaPage/>}/>
          <Route path='/gamemembaca' element={<GameMembaca/>}/>
      </Routes>
    </Router>
  )
}

export default App;
