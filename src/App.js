// import logo from './logo.svg';
import { useRef } from 'react';
import './App.css';
import FooterLayout from './components/FooterLayout';
import MidLayout1 from './components/MidLayout1';
import MidLayout2 from './components/MidLayout2';
import Navbar from './components/Navbar';
import TopLayout from './components/TopLayout';

function App() {
  const about = useRef(null);
  const guide = useRef(null);
  const materi = useRef(null);

  return (
    <>
      <Navbar about={about} guide={guide} materi={materi}/>
      <TopLayout materi={materi}/>
      <MidLayout1 about={about}/>
      <MidLayout2 guide={guide}/>
      <FooterLayout materi={materi}/>
    </>
  )
}

export default App;
