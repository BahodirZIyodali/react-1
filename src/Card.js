import Card1 from "./img/card1.png"
import Card2 from "./img/card2.png"
import Card3 from "./img/card3.png"
function Card(){
    return (
            <div className="container">
           <div className="card-main">
             <h2>Kegiatan Pojok Baca Probolinggo</h2>
             <span>Selengkapnya</span>             
              <p>Intip kegiatan yang telah kami selenggarakan </p>
              <div className="cards">
                 <div className="card">
                    <img src={Card1} alt="" />
                 </div>
                 <div className="card">
                    <img src={Card2} alt="" />
                 </div>
                 <div className="card">
                    <img src={Card3} alt="" />
                 </div>
              </div>
           </div>
        </div> 
    )
}
export default Card;