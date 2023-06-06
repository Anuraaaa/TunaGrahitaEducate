import { Link } from 'react-router-dom';
import calculer from '../../asset/img/calculer.png';


export default function TopLayout ({audio1, audio2, audio3, sound1, sound2}) {
    return (
        <>
            <div className="toplayout">
                <div className="toplayout-text">
                    <h1>Selamat Datang di materi Berhitung</h1>
                    <p>Mari berhitung sambil mengenal buah-buahan!</p>
                    <Link to={"/berhitung/game"} onClick={() => {
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
                        audio3.load();
                        audio3.play();
                    }}>
                        <button className='btn animation-bouncetobtm'>Mulai</button>
                    </Link>
                </div>
                <img src={calculer} alt="" className='toplayout-img' />
            </div>
        </>
    )
}