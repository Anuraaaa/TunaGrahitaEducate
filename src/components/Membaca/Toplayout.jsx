import { Link } from 'react-router-dom'
import appleimg from '../../asset/img/apple.png'
// import srcAudio from "../../asset/lagu.mp3"


export default function TopLayout () {
    // const audio = new Audio();

    return (
        <>
            <div className="toplayout">
                <div className="toplayout-text">
                    <h1>Selamat datang di materi membaca</h1>
                    <p>Mari membaca dengan mengenal nama nama buah</p>
                    <Link to={"/membaca/game"}>
                        <button className='btn' onClick={() => {
                            // audio.load();    
                            // audio.src = srcAudio;
                            // audio.autoplay = true;
                            // audio.loop = true;
                            // audio.play();
                        }}>Mulai</button>
                    </Link>
                </div>
                <img src={appleimg} alt="" className='toplayout-img' />
            </div>
        </>
    )
}