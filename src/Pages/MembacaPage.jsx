import Navbar from "../components/Membaca/Navbar";
import TopLayout from "../components/Membaca/Toplayout";

export default function MembacaPage({audio1}) {
    return (
        <>
            <Navbar/>
            <TopLayout audio1={audio1}/>
        </>
    )
}