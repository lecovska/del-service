import React from "react";
import "./footer.css";

function Footer(){
    return(
        <div className="footer">
            <div className="info">
                    <div className="logo-pic">SLIKA LOGOA</div>
                    <div className="kontakt-info">
                    <p>lokacija</p>
                    <p>email</p>
                    <p>telefon</p>
                </div>
            </div>
            <div className="usluge">
                <h3>Usluge</h3>
                <p>dostava</p>
                <p>dostava</p>
                <p>dostava</p>
                <p>dostava</p>
                <p>dostava</p>
            </div>
            <div className="informacije">
            <h3>Informacije</h3>
                <p>pitanja</p>
                <p>cenovnik</p>
                <p>uslovi</p>
                <p>zakazivanje</p>
            </div>
            <div className="kontakt">

                <h3>KONTAKTIRAJTE NAS!</h3>
                <p>Tu smo za vasa pitanja</p>
                <button>KONTAKT</button>
            </div>

        </div>
    )
}

export default Footer;