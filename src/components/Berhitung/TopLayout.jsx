import { Link } from 'react-router-dom';
import calculer from '../../asset/img/calculer.png';


export default function TopLayout ({audio3}) {
    return (
        <>
            <div className="toplayout">
                <div className="toplayout-text">
                    <h1>Selamat Datang di materi Berhitung</h1>
                    <p>Mari berhitung sambil mengenal buah-buahan!</p>
                    <Link to={"/berhitung/game"} onClick={() => {
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