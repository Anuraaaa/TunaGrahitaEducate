import kidsimg from '../../asset/img/kids.png'
import srcAudio from "../../asset/lagu.mp3"

export default function TopLayout ({materi}) {
    const scrolltoMateri = () => materi.current?.scrollIntoView();

    const audio = new Audio();
    document.body.addEventListener("click", function() {
        audio.load();    
        audio.src = srcAudio;
        audio.autoplay = true;
        audio.loop = true;
        audio.play();
    })

    return (
        <div className="toplayout">
            <div className="toplayout-text">
                <h1>Media Pembelajaran untuk anak tuna grahita</h1>
                <p>Media yang membantu dalam hal pendidikan, untuk anak berkebutuhan khusus</p>
                <button className="btn" onClick={scrolltoMateri}>Mulai</button>
            </div>
            <img src={kidsimg} alt="" className='toplayout-img' />
        </div>
    )
}