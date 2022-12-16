import Loop from "./img/loop.svg"
function Rank(){
    return(
        <div className="container">
        <div className="ranks">
        <div className="rank">
            <div className="rank_img">
                <img src={Loop} alt="" />
            </div>
            <div className="rank_text">
                <h4>500+</h4>
                <p>Judul Buku</p>
            </div>
        </div>        <div className="rank">
            <div className="rank_img">
                <img src={Loop} alt="" />
            </div>
            <div className="rank_text">
                <h4>$0</h4>
                <p>Gratis Peminjaman</p>
            </div>
        </div>        <div className="rank">
            <div className="rank_img">
                <img src={Loop} alt="" />
            </div>
            <div className="rank_text">
                <h4>5</h4>
                <p>Kegiatan Rutin</p>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Rank;