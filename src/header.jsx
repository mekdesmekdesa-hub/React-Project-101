 function Header() {
    return (
        <header className="header-container" >
             <div className="company-logo">
                <img src="src/assets/Alem.png" alt="company-logo" className="company-logo-image"/>
             </div>
             <div className="company-name">
                <h1>Alem Tech Solutions</h1>
             </div>
             <div className="company-slogan">
                From ideas to impact
             </div>
             <div className="qr-code    ">
                  <img src="src/assets/qrcode.png" alt="qr-code" className="qr-code-image"/>
             </div>
        </header>
    )
}
export default Header;