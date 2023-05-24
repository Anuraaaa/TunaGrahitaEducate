import book from '../../asset/img/book.png';
import singer from '../../asset/img/singer.png';
import calculer from  '../../asset/img/calculer.png'

export default function FooterLayout({materi}) {
    return (
        <div className="footerlayout" ref={materi}>
            <h1>Materi</h1>
            <div className="materi-container">
                <div className="rounded1">
                    <img src={book} alt="" />
                    <p>Membaca</p>
                </div>
                <div className="rounded2">
                    <img src={singer} alt="" />
                    <p>Bernyanyi dan Menari</p>
                </div>
                <div className="rounded3">
                    <img src={calculer} alt="" />
                    <p>Berhitung</p>
                </div>
            </div>
        </div>
    )
}