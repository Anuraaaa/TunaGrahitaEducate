import Main from "../components/GameMenyanyidanMenari/Main"
import Navbar from "../components/Membaca/Navbar"

export default function GameMenyanyidanMenari({sound1, sound2}){
    return (
        <>
            <Navbar/>
            <Main sound1={sound1} sound2={sound2}/>
        </>
    )
}