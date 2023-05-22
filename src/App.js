// import logo from './logo.svg';
import './App.css';
import FooterLayout from './components/FooterLayout';
import MidLayout1 from './components/MidLayout1';
import MidLayout2 from './components/MidLayout2';
import Navbar from './components/Navbar';
import TopLayout from './components/TopLayout';

function App() {
  return (
    <>
      <Navbar/>
      <TopLayout/>
      <MidLayout1/>
      <MidLayout2/>
      <FooterLayout/>
    </>
  )
}

export default App;
