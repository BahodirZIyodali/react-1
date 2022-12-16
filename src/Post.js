import man from './img/man.svg'
import woman from './img/woman.svg'
function Post(){
    return(
        <>
        <div className="container">
           <div className="post_wrap">
             <h2>Kenapa Kita<span> Harus</span>Membaca Buku?</h2>
              <div className="post_cards">
              <div className="post_card">
             <p>“Aku rela dipenjara asalkan <strong>bersama buku</strong> , karena dengan buku <strong>aku bebas</strong> ”</p>
              <div className="post_img">
                <img src={man} alt="" />
                </div>
                <div className="post_content">
                    <strong>Mohammad Hatta</strong> 
                    <h5>Wakil Presiden Indonesia Pertama</h5>   
                </div>    
            </div>    <div className="post_card">
             <p>“Cuma perlu <strong>satu buku </strong> untuk jatuh cinta pada membaca, Cari Buku itu!  <strong>Mari jatuh cinta!</strong> ”</p>
              <div className="post_img">
                <img src={woman} alt="" />
                </div>
                <div className="post_content">
                    <strong>Najwa Shihab</strong> 
                    <h5>Duta Membaca</h5>   
                </div>    
            </div>  
              </div>
            </div> 
        </div>
        </>
    )
}
export default Post;