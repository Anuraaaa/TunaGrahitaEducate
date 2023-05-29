import Main from "../components/GameBerhitung/Main";
import Navbar from "../components/Membaca/Navbar";

export default function GameBerhitung({audio3, sound1, sound2}) {
    return (
        <>
            <Navbar/>
            <Main audio3={audio3} sound1={sound1} sound2={sound2}/>
        </>
    )
}