import React from "react";
import "./infoDivs.css";

function InfoDivs(){
    return(
        <div className="infoDivs">
<div className="first">
    <h3>Naslov</h3>
    <p>neki tekst</p>
    <button className="arrow">strelica</button>
</div>
<div className="first">
<h3>Naslov</h3>
<p>neki tekst</p>
<button className="arrow">strelica</button>
</div>
<div className="first">
<h3>Naslov</h3>
<p>neki tekst</p>
<button className="arrow">strelica</button>
</div>
<p className="infoDivs-message">Zakazite dolazak na Vasu adresu! POZOVITE NAS +381 66 624.29.59</p>
        </div>
    )
}

export default InfoDivs;