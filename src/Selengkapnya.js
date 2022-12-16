import Guy from "./img/guy.svg"
import Brok from "./img/brok.svg"
import Srcl from "./img/srcl.svg"
function Selengkapnya(){
    return(
        <div className="container">
        <div className="Selengkapnya"> 
            <h2>Apa Kata Mereka?</h2>   <span>Selengkapnya</span>
            <p>Mereka yang telah menjadi pengunjung tetap kami</p>
           <div className="Selengkapnya_cards">
           <div className="Selengkapnya_card">
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <img src={Guy} alt="" />
                    <strong>Guy Hawkins</strong> 
                    <h5>32 Tahun, Karyawan</h5>   
            </div>    <div className="Selengkapnya_card">
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <img src={Brok} alt="" />
                    <strong>Brooklyn Simmons</strong> 
                    <h5>20 Tahun, Mahasiswa</h5>   
            </div>
           </div>
            <div className="srcl">
            <img  src={Srcl} alt="" />
            </div>
        </div>
        </div>
    )
}
export default Selengkapnya;