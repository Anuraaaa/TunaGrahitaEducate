import { Link } from 'react-router-dom';
import finishimg from '../../asset/img/finish.png';


export default function TopLayout () {
    return (
        <>
            <div className="toplayout">
                <div className="toplayout-text">
                    <h1>Kamu berhasil</h1>
                    <p>Ayo pelajari materi selanjutnya!</p>
                    <Link to={"/"}>
                        <button className='btn'>Kembali</button>
                    </Link>
                </div>
                <img src={finishimg} alt="" className='toplayout-img' />
            </div>
        </>
    )
}