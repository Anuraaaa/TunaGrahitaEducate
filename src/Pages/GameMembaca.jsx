import Main from "../components/GameMembaca/Main";
import Navbar from "../components/Membaca/Navbar";

export default function GameMembaca ({audio1, sound1, sound2}) {
    return (
        <>
            <Navbar/>
            <Main audio1={audio1} sound1={sound1} sound2={sound2}/>
        </>
    )
}