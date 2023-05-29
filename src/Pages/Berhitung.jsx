import TopLayout from "../components/Berhitung/TopLayout";
import Navbar from "../components/Membaca/Navbar";

export default function Berhitung ({audio3}) {
    return (
        <>
            <Navbar/>
            <TopLayout audio3={audio3}/>
        </>
    )
}