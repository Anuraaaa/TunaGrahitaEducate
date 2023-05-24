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

export default function Main() {

    let randomPick = Math.floor((Math.random() * 5));

    const RandomFruit = (pick) => {
        switch (pick) {
            case 0: {
                return (
                    <>
                        <div className="gamemembaca-wrap1">
                            <img src={appleimg} alt="" />
                            <h1>A-p-e-l</h1>
                        </div>
                        <div className="gamemembaca-wrap2">
                            <img src={appleimg} alt=""/>
                            <img src={appleputus} alt="" className="text" />
                        </div>
                    </>
                )                
                break;
            }
            case 1: {
                return (
                    <>
                        <div className="gamemembaca-wrap1">
                            <img src={banana} alt="" />
                            <h1>A-p-e-l</h1>
                        </div>
                        <div className="gamemembaca-wrap2">
                            <img src={banana} alt=""/>
                            <img src={bananaputus} alt="" className="text" />
                        </div>
                    </>
                )
                break;
            }
            case 2: {
                return (
                    <>
                        <div className="gamemembaca-wrap1">
                            <img src={purple} alt="" />
                            <h1>A-n-g-g-u-r</h1>
                        </div>
                        <div className="gamemembaca-wrap2">
                            <img src={purple} alt=""/>
                            <img src={purpleputus} alt="" className="text" />
                        </div>
                    </>
                )
                break;
            }
            case 3: {
                return (
                    <>
                        <div className="gamemembaca-wrap1">
                            <img src={mango} alt="" />
                            <h1>M-a-n-g-g-a</h1>
                        </div>
                        <div className="gamemembaca-wrap2">
                            <img src={mango} alt=""/>
                            <img src={mangoputus} alt="" className="text" />
                        </div>
                    </>
                )
                break
            }
            case 4: {
                return (
                    <>
                        <div className="gamemembaca-wrap1">
                            <img src={ceri} alt="" />
                            <h1>C-e-r-i</h1>
                        </div>
                        <div className="gamemembaca-wrap2">
                            <img src={ceri} alt=""/>
                            <img src={ceriputus} alt="" className="text" />
                        </div>
                    </>
                )
                break;
            }
        }
    }

    return (
        <div className="gamemembaca">
            <div className="gamemembaca-container">
                <div className="gamemembaca-wrapper">
                    {RandomFruit(randomPick)}
                </div>
                <button>Next</button>
            </div>
        </div>
    )
}