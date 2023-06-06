import Main from "../components/GameBerhitung/Main";
import Navbar from "../components/Membaca/Navbar";

export default function GameBerhitung({audio1, audio2, audio3, sound1, sound2}) {
    return (
        <>
            <Navbar/>
            <Main audio1={audio1} audio2={audio2} audio3={audio3} sound1={sound1} sound2={sound2}/>
        </>
    )
}