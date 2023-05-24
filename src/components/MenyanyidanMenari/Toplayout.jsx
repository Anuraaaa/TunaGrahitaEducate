import { Link } from 'react-router-dom';
import singer from '../../asset/img/singer.png';


export default function TopLayout () {
    return (
        <>
            <div className="toplayout">
                <div className="toplayout-text">
                    <h1>Selamat Datang di materi bernyanyi dan menari</h1>
                    <p>Mari bernyanyi dan menari dengan melihat cuplikan video!</p>
                    <Link to={"/"}>
                        <button className='btn'>Mulai</button>
                    </Link>
                </div>
                <img src={singer} alt="" className='toplayout-img' />
            </div>
        </>
    )
}