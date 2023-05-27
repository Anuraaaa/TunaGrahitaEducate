import tree from "../../asset/img/tree.png"

export default function Main () {
    return (
        <>
            <div className="gameberhitung">
                <div className="gameberhitung-container">
                    <div className="gameberhitung-wrapper">
                        <h1>Berapa jumlah 13 + 13</h1>
                        <button>Jawab</button>
                    </div>
                    <img src={tree} alt="" />
                </div>
            </div>
        </>
    )
}