import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Main ({audio1, audio2, audio3, sound1, sound2}) {
    
    const ytlink = [
        "https://www.youtube-nocookie.com/embed/67Kfp2y_Emo",
        "https://www.youtube-nocookie.com/embed/ThM0EdT1ByU",
        "https://www.youtube-nocookie.com/embed/sj-6MIhk0js",
        "https://www.youtube-nocookie.com/embed/ak77qjjsG_c",
        "https://www.youtube-nocookie.com/embed/XqZsoesa55w",
        "https://www.youtube-nocookie.com/embed/ZEX4u5mCnXc",
        "https://www.youtube-nocookie.com/embed/tWGwFWYXVAs",
        "https://www.youtube-nocookie.com/embed/Rt6Uf0SjseA",
        "https://www.youtube-nocookie.com/embed/BykRCC_kdgY"
    ];
    const titleyt = [
        "a", "b" ,"c", "d", "e", "f", "g", "h", "i"
    ]

    const [isYtLink, setYtLink] = useState([]);
    const [isTitle, setTitle] = useState([]);
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
            let a = Math.floor(Math.random() * 9);
            setYtLink(ytlink[a]);
            setTitle(titleyt[a]);
        }, 1)
    })
    
    return (                
        <>
        <div className="gamemenyanyi">
            <div className="gamemenyanyi-container">
                <div className="gamemenyanyi-wrapper">
                    <iframe src={isYtLink} title={isTitle}></iframe>
                </div>
                <button className="animation-bounce" onClick={() => {
                    if(count >= 9) {
                        audio1.pause();
                        audio1.remove();
                        audio2.pause();
                        audio2.remove();
                        audio3.pause()
                        audio3.remove();
                        sound1.pause();
                        sound1.remove();
                        sound2.pause();
                        sound2.remove();
                        sound1.load();
                        sound1.play();
                        sound2.load();
                        sound2.play();
                        navigate("/menyanyimenari/finish");
                    }
                    else {
                        let a = randomUniqueNumber(9, 9);
                        setYtLink(ytlink[a]);
                        setTitle(titleyt[a]); 
                        setCount((prevCount) => prevCount + 1);
                        localStorage.setItem("count", count);      
                    }

                }}>Next</button>
            </div>
        </div>
        </>
    )
}