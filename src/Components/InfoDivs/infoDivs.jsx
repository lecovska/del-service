import React from "react";
import "./infoDivs.css";

function InfoDivs() {
    return (
        <div className="infoDivs">
            <div className="first">
                <h2>FLEX-ibilno, ali stvarno brzo</h2>
                <p>Nećemo Vas zvati da siđete ispred zgrade, već ćemo doneti paket do Vaših vrata uz osmeh!</p>
                <button className="arrow">strelica</button>
            </div>
            <div className="first">
                <h2>Najbolje cene u graduv</h2>
                <p>Testirajte naše cene i videćete razliku. Zakažite pošiljku i uverite se i sami. Transparentno najbolje cene!</p>
                <button className="arrow">strelica</button>
            </div>
            <div className="first">
                <h2>Sigurna pošiljka</h2>
                <p>Kod nas možete poslati/primiti paket bez kašnjenja</p>
                <button className="arrow">strelica</button>
            </div>
            <p className="infoDivs-message">Zakazite dolazak na Vasu adresu! POZOVITE NAS +381 66 624.29.59</p>
        </div>
    )
}

export default InfoDivs;