export default function Navbar ({about, guide, materi}) {
    const scrolltoAbout = () => about.current?.scrollIntoView();
    const scrolltoGuide = () => guide.current?.scrollIntoView();
    const scrolltoMateri = () => materi.current?.scrollIntoView();
    return (
        <nav className="navbar">
            <a className="navbar-title" href="#">Tuna Grahita Educate</a>
            <ul className="navbar-content">
                <li><a onClick={scrolltoAbout}>About</a></li>
                <li><a onClick={scrolltoGuide}>Guide</a></li>
                <li><a onClick={scrolltoMateri}>Materi</a></li>
            </ul>
        </nav>
    )
}