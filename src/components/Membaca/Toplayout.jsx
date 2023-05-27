import { Link } from 'react-router-dom'
import appleimg from '../../asset/img/apple.png'

export default function TopLayout ({audio1}) {
    return (
        <>
            <div className="toplayout">
                <div className="toplayout-text">
                    <h1>Selamat datang di materi membaca</h1>
                    <p>Mari membaca dengan mengenal nama nama buah</p>
                    <Link to={"/membaca/game"}>
                        <button className='btn animation-bouncetobtm' onClick={() => {
                            window.scrollTo(0, 0);
                            audio1.load();
                            audio1.play();
                        }}>Mulai</button>
                    </Link>
                </div>
                <img src={appleimg} alt="" className='toplayout-img' />
            </div>
        </>
    )
}