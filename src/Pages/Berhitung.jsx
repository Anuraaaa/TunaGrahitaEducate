import TopLayout from "../components/Berhitung/TopLayout";
import Navbar from "../components/Membaca/Navbar";

export default function Berhitung ({audio1, audio2, audio3, sound1, sound2}) {
    return (
        <>
            <Navbar/>
            <TopLayout audio1={audio1} audio2={audio2} audio3={audio3} sound1={sound1} sound2={sound2}/>
        </>
    )
}