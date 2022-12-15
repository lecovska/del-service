import React from "react";
import "./footer.css";
import footerLogo from "../../Images/logoPng.png";
import telLogo from "../../Images/output-onlinepngtools.png";
import locationLogo from "../../Images/Location-2---icon.png";
import maillogo from "../../Images/e-mail---icon.png";

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
                        <span>felxsluzba"gmail.com</span>
                    </div>

                    <div id="telefon" >
                        <img id="img-tel" src={telLogo} alt="tel"></img>
                        <span>+381 648447211</span>
                    </div>

                </div>
            </div>
            <div className="usluge">
                <h4 className="h4-usluge">USLUGE</h4>
                <a href="nesto">usluge</a><a href="nesto">usluge</a><a href="nesto">usluge</a><a href="nesto">usluge</a><a href="nesto">usluge</a>
            </div>

            <div className="usluge2">
            <h4 className="h4-usluge">USLUGE</h4>
                <a href="nesto">usluge</a><a href="nesto">usluge</a><a href="nesto">usluge</a><a href="nesto">usluge</a><a href="nesto">usluge</a>
            </div>

            <div className="kontakt">
                <h3 className="h3-kontakt">Kontaktirajte nas</h3>
                <p>kjsdhfjksdhfkjsd</p>
                <button className="btn-kontakt">Kontakt</button>
            </div>




        </div>
    )
}

export default Footer;