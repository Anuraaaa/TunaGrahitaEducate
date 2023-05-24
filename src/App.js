import { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TopLayout from './components/Homepage/TopLayout';
import MidLayout1 from './components/Homepage/MidLayout1';
import MidLayout2 from './components/Homepage/MidLayout2';
import FooterLayout from './components/Homepage/FooterLayout';

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
