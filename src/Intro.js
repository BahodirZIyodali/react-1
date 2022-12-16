import Fund from './img/fund.png'
function Intro(){
    return (
        <>
            <div className="container">
        <div className="intro_wrap">
           <p> Pojok Baca<span>Probolinggo</span></p> 
          <h1>Pinjam Buku Secara <span>Gratis </span>  untuk Masyarakat</h1>
          <div className="btns">
          <button>Cari Judul Buku</button>
          <button>Donasi dengan Kami</button>
          </div>
          <div>
            <img src={Fund} alt="" />
          </div>
           </div>
        </div> 
       </>
    )
}
export default Intro