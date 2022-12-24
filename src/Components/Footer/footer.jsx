import React from "react";
import "./footer.css";
import footerLogo from "../../Images/logoPng.png";
import telLogo from "../../Images/output-onlinepngtools.png";
import locationLogo from "../../Images/Location-2---icon.png";
import maillogo from "../../Images/e-mail---icon.png";
import fblogo from "../../Images/fb4.png";
import imgpng from "../../Images/imgpng.png";
import viberlogo from "../../Images/viber-19486.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">

            <div className="logo">

                <div className="main-logo">
                    <img className="footerLogo" src={footerLogo} alt="footerLogo"></img>
                </div>

                <div className="logoDiv">

                    <div id="lokacija">
                        <img id="img-lokacija" src={locationLogo} alt="lokacija"></img>
                        <span>Beograd</span>
                    </div>

                    <div id="mail">
                        <img id="img-mail" src={maillogo} alt="maillogo"></img>
                        <span>office@flex-kurir.rs</span>
                    </div>

                    <div id="telefon" >
                        <img id="img-tel" src={telLogo} alt="tel"></img>
                        <span>+381 648447211</span>
                    </div>

                </div>
            </div>
            <div className="usluge">
                <h4 className="h4-usluge">Usluge</h4>
                <Link to="nesto">Dostava Beograd</Link><Link to="nesto">Danas za danas</Link><Link to="nesto">Danas za sutra</Link><Link to="nesto">B2C dostava</Link><Link to="nesto">B2B dostava</Link>
            </div>

            <div className="usluge2">
            <h4 className="h4-usluge">Korisne informacije</h4> 
                <Link to="/Pages/pitanja">Najčešća pitanja</Link><Link to="../../Pages/CenovnikPage">Cenovnik</Link><a href={require("../../Docs/Opšti uslovi za obavljanje poštanskih usluga_29.09.2022.txt.pdf")} download="Opšti_uslovi_poslovanja">Uslovi korišćenja</a><Link to="../../Pages/Zakazi">Zakaži kurira</Link>
            </div>

            <div className="kontakt">
                <div className="kontakt-infoDiv">
                <h3 className="h3-kontakt">Kontaktirajte nas!</h3>
                <p>Tu smo za sva Vaša pitanja.</p>
                <Link to="../../Pages/Kontakt"><button className="btn-kontakt">Kontakt</button></Link>
                </div>
                <div className="media-btns">
                    <span>Zaprati nas!</span>
                    <a href="#top"><img className="media-logo" src={viberlogo} alt="viberlogo"></img></a>
                    <a href="https://www.facebook.com/profile.php?id=100088225421360"><img className="media-logo-fb" src={fblogo} alt="fblogo"></img></a>
                    <a href="https://www.instagram.com/flex.kurir/"><img className="media-logo" src={imgpng} alt="imglogo"></img></a>
                    
                </div>
            </div>

            


        </div>
    )
}

export default Footer;