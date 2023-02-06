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
                        <span>+381 66 62 42 959<br></br>+381 11 62 42 959</span>
                    </div>

                </div>
            </div>
            <div className="usluge">
                <h4 className="h4-usluge">Usluge</h4>
                <Link className="link-a" to="/usluge">Dostava Beograd</Link><Link className="link-a" to="/usluge">Danas za danas</Link><Link className="link-a" to="/usluge">Danas za sutra</Link><Link className="link-a" to="/usluge">B2C dostava</Link><Link  className="link-a" to="/usluge">B2B dostava</Link>
            </div>

            <div className="usluge2">
            <h4 className="h4-usluge">Korisne informacije</h4> 
                <Link className="link-a" to="/pitanja">Najčešća pitanja</Link><a className="link-a" href={require("../../Docs/Cenovnik usluga za obavljanje poštanskih usluga_RATEL_30.09.2022.pdf")} download="Cenovnik usluga">Cenovnik usluga</a><a className="link-a" href={require("../../Docs/politikaPrivatnosti.pdf")} download="Politika_privatnosti">Politika privatnosti</a><a className="link-a" href={require("../../Docs/Odobrenje_RATEL_30.09.2022..pdf")} download="Odobrenje">Odobrenje</a><a className="link-a" href={require("../../Docs/Opšti uslovi za obavljanje poštanskih usluga_29.09.2022..pdf")} download="Opsti uslovi" >Opšti uslovi</a>
            </div>

            <div className="kontakt">
                <div className="kontakt-infoDiv">
                <h3 className="h3-kontakt">Kontaktirajte nas!</h3>
                <p>Tu smo za sva Vaša pitanja.</p>
                <Link className="link-a" to="/Kontakt"><button className="btn-kontakt">Kontakt</button></Link>
                </div>
                <div className="media-btns">
                    <span>Zaprati nas!</span>
                    {/* <a href="viber://chat?number=381666242959"><img className="media-logo" src={viberlogo} alt="viberlogo"></img></a> */}
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100088046870369&mibextid=ZbWKwL"><img className="media-logo-fb" src={fblogo} alt="fblogo"></img></a>
                    <a target="_blank" href="https://www.instagram.com/flex.kurir/"><img className="media-logo" src={imgpng} alt="imglogo"></img></a>
                    
                </div>
            </div>

            


        </div>
    )
}

export default Footer;