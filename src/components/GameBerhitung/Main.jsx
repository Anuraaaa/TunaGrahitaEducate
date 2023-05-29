import apple from "../../asset/img/apple.png"
import banana from "../../asset/img/banana.png"
import purple from "../../asset/img/purple.png";
import mango from "../../asset/img/mango.png";
import ceri from "../../asset/img/ceri.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Main ({sound1, sound2}) {
    
    const [question, setQuestion] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [image, setImage] = useState([]);
    const [type, setType] = useState([]);
    localStorage.clear();
    const step = Number(localStorage.getItem("buttonStep")) ?? 0;
    let buttonStep = step;
    const levelStep = Number(localStorage.getItem("levelMainStep")) ?? 0;
    let levelMainStep = levelStep;

    const listImg = [apple, banana, purple, mango, ceri];
    const listAnswer = [7, 6, 4, 5, 4];
    const listQuestion = ["3 + 4 ?", "2 + 4 ?", "10 - 6 ?", "18 - 13 ?", "1 + 2"];
    const listType = ["apple", "banana", "purple", "mango", "ceri"];
    const navigate = useNavigate();
    
    let value = Math.floor(Math.random() * 5);
    useEffect(() => {
        setTimeout(() => {
            setQuestion(listQuestion[value]);
            setAnswer(listAnswer[value]);
            setImage(listImg[value]);
            setType(listType[value]);
        }, 1)
    })

    const RandomGameBerhitung = (value) => {
        
        if (value === 0) {
            return (
                <>
                    <div className="gameberhitung-wrapper-text">
                        <h1>{question}</h1>
                        <button className="animation-bouncetobtm" id={`btn${type}`} onClick={() => {
                            document.getElementById(`btn${type}`).textContent = answer;
                        }}>Jawab</button>
                    </div>
                    <div className="gameberhitung-img animation-translateX">
                        <img src={image} alt="" id={`${type}1`} onClick={() => {document.getElementById(`${type}1`).style.opacity = 0.5; document.getElementById(`${type}1`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}2`} onClick={() => {document.getElementById(`${type}2`).style.opacity = 0.5; document.getElementById(`${type}2`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}3`} onClick={() => {document.getElementById(`${type}3`).style.opacity = 0.5; document.getElementById(`${type}3`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}4`} onClick={() => {document.getElementById(`${type}4`).style.opacity = 0.5; document.getElementById(`${type}4`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}5`} onClick={() => {document.getElementById(`${type}5`).style.opacity = 0.5; document.getElementById(`${type}5`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}6`} onClick={() => {document.getElementById(`${type}6`).style.opacity = 0.5; document.getElementById(`${type}6`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}7`} onClick={() => {document.getElementById(`${type}7`).style.opacity = 0.5; document.getElementById(`${type}7`).style.animation = "bounce 1s"; buttonStep++;}}/>
                    </div>
                </>
            )            
        }
        else if (value === 1) {
            return (
                <>
                    <div className="gameberhitung-wrapper-text">
                        <h1>{question}</h1>
                        <button className="animation-bouncetobtm" id={`btn${type}`} onClick={() => {
                            document.getElementById(`btn${type}`).textContent = answer;
                            
                        }}>Jawab</button>
                    </div>
                    <div className="gameberhitung-img animation-translateX">
                        <img src={image} alt="" id={`${type}1`} onClick={() => {document.getElementById(`${type}1`).style.opacity = 0.5; document.getElementById(`${type}1`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}2`} onClick={() => {document.getElementById(`${type}2`).style.opacity = 0.5; document.getElementById(`${type}2`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}3`} onClick={() => {document.getElementById(`${type}3`).style.opacity = 0.5; document.getElementById(`${type}3`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}4`} onClick={() => {document.getElementById(`${type}4`).style.opacity = 0.5; document.getElementById(`${type}4`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}5`} onClick={() => {document.getElementById(`${type}5`).style.opacity = 0.5; document.getElementById(`${type}5`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}6`} onClick={() => {document.getElementById(`${type}6`).style.opacity = 0.5; document.getElementById(`${type}6`).style.animation = "bounce 1s"; buttonStep++;}}/>
                    </div>
                </>
            )
        }
        else if (value === 2) {
            return (
                <>
                    <div className="gameberhitung-wrapper-text">
                        <h1>{question}</h1>
                        <button className="animation-bouncetobtm" id={`btn${type}`} onClick={() => {
                            document.getElementById(`btn${type}`).textContent = answer;
                            
                        }}>Jawab</button>
                    </div>
                    <div className="gameberhitung-img animation-translateX">
                        <img src={image} alt="" id={`${type}1`} onClick={() => {document.getElementById(`${type}1`).style.opacity = 0.5; document.getElementById(`${type}1`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}2`} onClick={() => {document.getElementById(`${type}2`).style.opacity = 0.5; document.getElementById(`${type}2`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}3`} onClick={() => {document.getElementById(`${type}3`).style.opacity = 0.5; document.getElementById(`${type}3`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}4`} onClick={() => {document.getElementById(`${type}4`).style.opacity = 0.5; document.getElementById(`${type}4`).style.animation = "bounce 1s"; buttonStep++;}}/>
                    </div>
                </>
            )
        }
        else if (value === 3) {
            return (
                <>
                    <div className="gameberhitung-wrapper-text">
                        <h1>{question}</h1>
                        <button className="animation-bouncetobtm" id={`btn${type}`} onClick={() => {
                            document.getElementById(`btn${type}`).textContent = answer;
                            
                        }}>Jawab</button>
                    </div>
                    <div className="gameberhitung-img animation-translateX">
                        <img src={image} alt="" id={`${type}1`} onClick={() => {document.getElementById(`${type}1`).style.opacity = 0.5; document.getElementById(`${type}1`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}2`} onClick={() => {document.getElementById(`${type}2`).style.opacity = 0.5; document.getElementById(`${type}2`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}3`} onClick={() => {document.getElementById(`${type}3`).style.opacity = 0.5; document.getElementById(`${type}3`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}4`} onClick={() => {document.getElementById(`${type}4`).style.opacity = 0.5; document.getElementById(`${type}4`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}4`} onClick={() => {document.getElementById(`${type}4`).style.opacity = 0.5; document.getElementById(`${type}4`).style.animation = "bounce 1s"; buttonStep++;}}/>
                    </div>
                </>
            )
        }
        else if (value === 4) {
            return (
                <>
                    <div className="gameberhitung-wrapper-text">
                        <h1>{question}</h1>
                        <button className="animation-bouncetobtm" id={`btn${type}`} onClick={() => {
                            document.getElementById(`btn${type}`).textContent = answer;
                            
                        }}>Jawab</button>
                    </div>
                    <div className="gameberhitung-img animation-translateX">
                        <img src={image} alt="" id={`${type}2`} onClick={() => {document.getElementById(`${type}2`).style.opacity = 0.5; document.getElementById(`${type}2`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}3`} onClick={() => {document.getElementById(`${type}3`).style.opacity = 0.5; document.getElementById(`${type}3`).style.animation = "bounce 1s"; buttonStep++;}}/>
                        <img src={image} alt="" id={`${type}4`} onClick={() => {document.getElementById(`${type}4`).style.opacity = 0.5; document.getElementById(`${type}4`).style.animation = "bounce 1s"; buttonStep++;}}/>
                    </div>
                </>
            )
        }
    }
    return (
        <>
            <div className="gameberhitung">                        
                <div className="gameberhitung-container">
                    <div className="gameberhitung-wrapper">
                        {RandomGameBerhitung(value)}
                    </div>
                    <button className="animation-bounce btnNextGameberhitung" onClick={() => {
                        if (buttonStep >= answer) {
                            if (levelMainStep >= 4) {
                                sound1.load();
                                sound1.play();
                                sound2.load();
                                sound2.play();
                                navigate("/berhitung/finish");
                            }
                            else {
                                let a = Math.floor(Math.random()  * 5);
                                setQuestion(listQuestion[a]);
                                setAnswer(listAnswer[a]);
                                setImage(listImg[a]);
                                setType(listType[a]);
                                levelMainStep++;
                            }
                        }
                    }}>Next</button>
                </div>
            </div>
        </>
    )
}