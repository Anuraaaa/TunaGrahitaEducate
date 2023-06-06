import Navbar from "../components/Membaca/Navbar";
import TopLayout from "../components/MenyanyidanMenari/Toplayout";

export default function MenyanyidanMenari ({audio1, audio2, audio3, sound1, sound2}) {
    return (
        <>
            <Navbar/>
            <TopLayout audio1={audio1} audio2={audio2} audio3={audio3} sound1={sound1} sound2={sound2}/>        
        </>
    )
}