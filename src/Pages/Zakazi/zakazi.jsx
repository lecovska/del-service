import React from "react";
import "./zakazi.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import homeLogo from "../../Images/homeIcon.png"
// import CallcentarImg from "../../Images/smallCallCentarImg.jpg";
import ccCardImg from "../../Images/callcentarImg.jpg";

function Zakazi() {
    return (
        <div className="zakazi">
            <Header />
            <div className="image">
                <div className="greeting">
                    <span className="main-title">Zakaži dolazak kurira</span>
                    <a href="nesto"><img id="zakaziHomeLogo" src={homeLogo} alt="homelogo"></img>Početna - Flex kurirska služba</a>
                </div>
            </div>
            <div className="form-mainWrapper">
                <h3 id="h3-zakaziKurira">Brzo i jednostavno zakazivanje kurira, direktno sa našeg web sajta</h3>
                <div className="mainForm">
                    <div className="single-form">
                        <form>
                            <div className="formTitle"><span>PODACI O POŠILJAOCU</span></div>
                                <label>Ime i prezime/Pravno lice (obavezno):</label><input type="text" />
                                <label>Grad/Opština:</label><input type="text" />
                                <label>Adresa:</label><input type="text" />
                                <label>Kućni broj:</label><input type="text" />
                                <label>Poštanski broj:</label><input type="number" />
                                <label>Telefon:</label><input type="number" />
                                <label>Kontakt osoba:</label><input type="text" />
                                <label>Email:</label><input type="email" />
                                <label>Napomena pri preuzimanju:</label><input type="text" />
                           
                        </form>
                    </div>
                    <div className="single-form">
                        <form>
                        <div className="formTitle"> <span>PODACI O PRIMAOCU</span><br></br></div>
                            <label>Ime i prezime/Pravno lice (obavezno):</label><input type="text" />
                                <label>Grad/Opština:</label><input type="text" />
                                <label>Adresa:</label><input type="text" />
                                <label>Kućni broj:</label><input type="text" />
                                <label>Poštanski broj:</label><input type="number"/>
                                <label>Telefon:</label><input type="number" />
                                <label>Kontakt osoba:</label><input type="text" />
                                <label>Napomena pri preuzimanju: </label><input type="text" />
                           
                        </form>
                    </div>
                    <div className="single-form">
                        <form>
                        <div className="formTitle"> <span>DETALJI POŠILJKE</span><br></br></div>
                                <label>Broj paketa:</label><input type="number" />
                                <label>Isporuka:</label><input type="text" />
                                <label>Težina pošiljke:</label><input type="number" />
                                <label>Sadržaj pošiljke:</label><input type="text" />
                                <label>Otkupna vrednost:</label><input type="text" />
                                <label>Dodatne usluge:</label><input type="text" />
                                <label>Plaća isporuku:</label><input type="text" />
                            
                        </form>
                    </div>
                </div>
                <button type="submit" id="form-button">POTVRDI</button>
            </div>
            <div className="callCentar-smallDivs">
                <div className="callCentarSmallDiv-img"></div>
                <div className="callCentarInfo-div">
                    <h4 id="h4-callCentar">CALL CENTAR</h4>
                    <p className="p-callCentar">Naši operatori stoje Vam na usluzi za sve potrebne informacije.</p>
                    <p className="p-callCentar">RADNO VREME CALL CENTRA</p>
                    <p className="p-callCentar">Ponedeljak - Petak od 08h do 16h</p>
                    <p className="p-callCentarNum">066 624.29.59</p>
                    </div>
            </div>
            <Footer />
        </div>
    )


}
export default Zakazi;