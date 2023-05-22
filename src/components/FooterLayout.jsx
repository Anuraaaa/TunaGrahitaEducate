export default function FooterLayout({materi}) {
    return (
        <div className="footerlayout" ref={materi}>
            <h1>Materi</h1>
            <div className="materi-container">
                <div className="rounded1">Membaca</div>
                <div className="rounded2">Bernyanyi dan Menari</div>
                <div className="rounded3">Berhitung</div>
            </div>
        </div>
    )
}