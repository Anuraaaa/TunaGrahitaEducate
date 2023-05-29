import Main from "../components/GameBerhitung/Main";
import Navbar from "../components/Membaca/Navbar";

export default function GameBerhitung({sound1, sound2}) {
    return (
        <>
            <Navbar/>
            <Main sound1={sound1} sound2={sound2}/>
        </>
    )
}