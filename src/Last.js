import foot from "./img/fotlogo.svg"
import ins from "./img/ins.svg"
import face from "./img/face.svg"
import yout from "./img/yout.svg"
function Last(){
    return(
        <div className="container">
         <div className="last">
            <div className="last-item">
                <img src={foot} alt="" />
                <div className="icon">
                <img src={ins} alt="" /><img src={face} alt="" /><img src={yout} alt="" />
                </div>
            </div>
            <div className="last-item">
                <li>Kontak</li>
                <li>Email</li>
                <li>Alamat</li>
                <li>No. Rekening</li>
            </div>
            <div className="last-item">
            <li>Tentang Kami</li>
                <li>Umum</li>
            </div>
            <div className="last-item">
            <li>Galery</li>
                <li>Kegiatan 2018</li>
                <li>Kegiatan 2019</li>
                <li>Kegiatan 2020</li>
                <li>Kegiatan 2021</li>
            </div>
         </div>
        </div>
    )
}
export default Last;