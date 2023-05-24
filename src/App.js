import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import MembacaPage from './Pages/MembacaPage';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/membaca' element={<MembacaPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
