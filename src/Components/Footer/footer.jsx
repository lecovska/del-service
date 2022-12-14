import React from "react";
import "./footer.css";
import footerLogo from "../../Images/logoPng.png";
import telLogo from "../../Images/output-onlinepngtools.png";
import locationLogo from "../../Images/Location-2---icon.png";
import maillogo from "../../Images/e-mail---icon.png";

function Footer() {
    return (
        <div className="footer">

            <div className="info">

                <div className="main-logo"><img className="footerLogo" src={footerLogo} alt="footerLogo"></img></div>
                <div className="info-wrapper">
                <div className="logo-pic">
                    <img id="locationLogo" src={locationLogo}  alt="logopic"></img>
                    <img id="emailLogo" src={maillogo} alt="logopic"></img>
                    <img id="phoneIcon" src={telLogo} alt="logopic"></img>
                </div>
                
                <div className="kontakt-info">
                    <p>Beograd</p>
                    <p>office@flex-kurir.rs</p>
                    <p>+381 66 624.29.59</p>
                </div>
                </div>
            </div>


            <div className="usluge">
                <h3 className="h3-footer">Usluge</h3>
                <a href="nesto">Dostava Beograd</a>
                <a href="nesto">Danas za danas</a>
                <a href="nesto">Danas za sutra</a>
                <a href="nesto">B2C dostava</a>
                <a href="nesto">B2B dostava</a>
            </div>
            <div className="informacije">
                <h3 className="h3-footer">Korisne informacije</h3>
                <a href="nesto">Najčešća pitanja</a>
                <a href="nesto">Cenovnik</a>
                <a href="nesto">Uslovi korišćenja</a>
                <a href="nesto">Zakazivanje kurira</a>
            </div>

            <div className="kontakt">

                <h3 className="h3-footer">KONTAKTIRAJTE NAS!</h3>
                <p>Tu smo za vasa pitanja</p>
                <button className="kontakt-btn">KONTAKT</button>
            </div>
        </div>
    )
}

export default Footer;