export default function TopLayout ({materi}) {
    const scrolltoMateri = () => materi.current?.scrollIntoView();
    return (
        <div className="toplayout">
            <div className="toplayout-text">
                <h1>Media Pembelajaran untuk anak tuna grahita</h1>
                <p>Media yang membantu dalam hal pendidikan, untuk anak berkebutuhan khusus</p>
                <button className="btn" onClick={scrolltoMateri}>Mulai</button>
            </div>
            <div className="toplayout-img">
                <div className="circle"></div>
            </div>
        </div>
    )
}