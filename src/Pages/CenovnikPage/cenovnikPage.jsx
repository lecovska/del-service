import React from "react";
import "./cenovnikPage.css";
import Header from "../../Components/Header/header";
import TableDanasZaSutra from "../../Components/TableDanasZaSutra/tableDanasZaSutra";
import TableDanasZaDanas from "../../Components/TableDanasZaDanas/tableDanasZaDanas";
import TableDodatneUsluge from "../../Components/TableDodatneUsluge/tableDodatneUsluge";
import SpecijalizovanePosiljke from "../../Components/SpecijalizovanePosiljke/specPosiljke";
import Footer from "../../Components/Footer/footer";
import homeLogo from "../../Images/homeIcon.png"
import leftDivimport from "../../Images/Flex-kurirska-sluzba16.jpg";

function Cenovnik(){
    return(
        <div className="cenovnik">
<Header/>
<div className="image-cenovnik">
    <div className="greeting">
    <span className="main-title">Cenovnik</span>
    <a href="/"><img id="zakaziHomeLogo" src={homeLogo} alt="homelogo"></img>Početna - Flex kurirska služba</a>
    </div>
</div>

<div className="form-mainWrapper">
                <h3 id="h3-zakaziKurira">Stranica je u pripremi. Za više informacija, pozovite naš call centar.</h3> </div>


<div className="callCentar-smallDivs">
                <div className="callCentarSmallDiv-img"></div>
                <div className="callCentarInfo-div-cen">
                    <h4 id="h4-callCentar">CALL CENTAR</h4>
                    <p className="p-callCentar">Naši operatori stoje Vam na usluzi za sve potrebne informacije.</p>
                    <p className="p-callCentar">RADNO VREME CALL CENTRA</p>
                    <p className="p-callCentar">Ponedeljak - Petak od 08h do 16h</p>
                    <p className="p-callCentarNum">066 624.29.59</p>
                    </div>
            </div>


{/* <div className="twoDivs">
    <div className="leftDiv"></div>
    
    <div className="rightDiv">
        
        <h2 id="h2-rightDiv">Unutrašnji saobraćaj</h2>
        <p className="rightDiv-p">Sve cene su date u dinarima. Korisnici Flex usluga štede svoje vreme, jer mi dostavljamo pošiljke od vrata do vrata.</p>
        <div id="rightDiv-line"></div>
    </div>
</div> 
<TableDanasZaSutra/>
<TableDanasZaDanas/>
<TableDodatneUsluge/>
<SpecijalizovanePosiljke/>*/}
<Footer/>
        </div>
    )
}
export default Cenovnik;