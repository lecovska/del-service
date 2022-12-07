import React from "react";
import "./cenovnikPage.css";
import Header from "../../Components/Header/header";
import TableDanasZaSutra from "../../Components/TableDanasZaSutra/tableDanasZaSutra";
import TableDanasZaDanas from "../../Components/TableDanasZaDanas/tableDanasZaDanas";
import TableDodatneUsluge from "../../Components/TableDodatneUsluge/tableDodatneUsluge";
import SpecijalizovanePosiljke from "../../Components/SpecijalizovanePosiljke/specPosiljke";
import Footer from "../../Components/Footer/footer";

function Cenovnik(){
    return(
        <div className="cenovnik">
<Header/>
<div className="image">
    <div className="greeting">
    <span className="main-title">Cenovnik</span>
    <button>Pocetna - Flex kurirska sluzba</button>
    </div>
</div>
<div className="twoDivs">
    <div className="leftDiv">Image</div>
    <div className="rightDiv">
        <h3>Unutrasnji saobracaj</h3>
        <p>Sve cene su date u dinarima.</p><br></br>
        Korisnici Flex usluga stede svoje vreme, jer mi dostavljamo posiljke od vrata do vrata.
    </div>
</div>
<TableDanasZaSutra/>
<TableDanasZaDanas/>
<TableDodatneUsluge/>
<SpecijalizovanePosiljke/>
<Footer/>
        </div>
    )
}
export default Cenovnik;