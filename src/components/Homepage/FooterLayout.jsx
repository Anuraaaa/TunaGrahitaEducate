import book from '../../asset/img/book.png';
import singer from '../../asset/img/singer.png';
import calculer from  '../../asset/img/calculer.png'
import { Link } from 'react-router-dom';

export default function FooterLayout({materi}) {
    return (
        <div className="footerlayout" ref={materi}>
            <h1>Materi</h1>
            <div className="materi-container">
                <Link className="rounded1" to={"/membaca"} onClick={() => {window.scrollTo(0, 0)}}>
                    <img src={book} alt="" />
                    <p>Membaca</p>
                </Link>
                <Link className="rounded2" to={"/menyanyimenari"} onClick={() => {window.scrollTo(0, 0)}}>
                    <img src={singer} alt="" />
                    <p>Bernyanyi dan Menari</p>
                </Link>
                <Link className="rounded3" to={"/berhitung"} onClick={() => {window.scrollTo(0, 0)}}>
                    <img src={calculer} alt="" />
                    <p>Berhitung</p>
                </Link>
            </div>
        </div>
    )
}