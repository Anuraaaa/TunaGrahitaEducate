import { Link } from 'react-router-dom';
import singer from '../../asset/img/singer.png';


export default function TopLayout ({audio1, audio2, audio3, sound1, sound2}) {
    return (
        <>
            <div className="toplayout">
                <div className="toplayout-text">
                    <h1>Selamat Datang di materi bernyanyi dan menari</h1>
                    <p>Mari bernyanyi dan menari dengan melihat cuplikan video!</p>
                    <Link to={"/menyanyimenari/game"} onClick={() => {
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
                    }}>
                        <button className='btn animation-bouncetobtm'>Mulai</button>
                    </Link>
                </div>
                <img src={singer} alt="" className='toplayout-img' />
            </div>
        </>
    )
}