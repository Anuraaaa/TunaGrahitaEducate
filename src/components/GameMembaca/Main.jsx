import appleimg from "../../asset/img/apple.png";
import appleputus from "../../asset/img/apelputus.png";
import banana from "../../asset/img/banana.png";
import bananaputus from "../../asset/img/bananaputus.png";
import purple from "../../asset/img/purple.png";
import purpleputus from "../../asset/img/purpleputus.png";
import mango from "../../asset/img/mango.png";
import mangoputus from "../../asset/img/mangoputus.png";
import ceri from "../../asset/img/ceri.png";
import ceriputus from "../../asset/img/ceriputus.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Main({audio1, sound1, sound2}) {

    const fruitName = ["A-p-e-l", "P-i-s-a-n-g", "A-n-g-g-u-r", "M-a-n-g-g-a", "C-e-r-i"];
    const fruitListImg = [appleimg, banana, purple, mango, ceri];
    const fruitListImgPutus = [appleputus, bananaputus, purpleputus, mangoputus, ceriputus];
    const [fruit, setFruit] = useState([]);
    const [fruitImg, setFruitImg] = useState([]);
    const [fruitImgPutus, setFruitImgPutus] = useState([]);
    const navigate = useNavigate();
    localStorage.clear();
    const storageCount = Number(localStorage.getItem("count")) ?? 0;
    const [count, setCount] = useState(storageCount);

    const randomUniqueNumber = (range, count) => {
        let nums = new Set();
        while (nums.size < count) {
            nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
        }
        return [...nums];
    }

    useEffect(() => {
        setTimeout(function() {
            let a = Math.floor(Math.random() * 5);
            setFruit(fruitName[a]);
            setFruitImg(fruitListImg[a]);
            setFruitImgPutus(fruitListImgPutus[a]);
        }, 1)
    });


    return (
        <div className="gamemembaca">
            <div className="gamemembaca-container">
                <div className="gamemembaca-wrapper">
                    <div className="gamemembaca-wrap1">
                        <img src={fruitImg} alt="" />
                        <h1>{fruit}</h1>
                    </div>
                    <div className="gamemembaca-wrap2">
                        <img src={fruitImg} alt=""/>
                        <img src={fruitImgPutus} alt="" className="text" />
                    </div>
                </div>
                <button className="animation-bounce" onClick={() => {
                    if (count >= 5) {
                        audio1.pause();
                        audio1.remove();
                        sound1.load();
                        sound1.play();
                        sound2.load();
                        sound2.play();
                        navigate("/membaca/finish");
                    }
                    else {
                        let a = randomUniqueNumber(5, 5);
                        setFruit(fruitName[a]);
                        setFruitImg(fruitListImg[a]);
                        setFruitImgPutus(fruitListImgPutus[a]);
                        setCount((prevCount) => prevCount + 1);
                        localStorage.setItem("count", count);      
                    }}}
                    >Next</button>
            </div>
        </div>
    )
}