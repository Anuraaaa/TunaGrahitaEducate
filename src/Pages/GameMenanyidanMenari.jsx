import Main from "../components/GameMenyanyidanMenari/Main"
import Navbar from "../components/Membaca/Navbar"

export default function GameMenyanyidanMenari({audio1, audio2, audio3, sound1, sound2}){
    return (
        <>
            <Navbar/>
            <Main audio1={audio1} audio2={audio2} audio3={audio3} sound1={sound1} sound2={sound2}/>
        </>
    )
}