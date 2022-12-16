import Logo from './img/logo.svg'
function Header(){
    return (
    <header>
        <div className="container">
        <nav>
            <div className="nav_logo" >
            <img src={Logo} alt="" />
            </div>
            <ul>
               <li><a href="#">Beranda</a></li>
               <li><a href="#">Koleksi</a></li>
               <li><a href="#">Syarat dan Ketentuan</a></li>
               <li><a href="#">Kontak</a></li>
            </ul>
            <a className="abtn" href="#">Masuk</a>
        </nav>
        </div>
    </header>
    )
}
export default Header