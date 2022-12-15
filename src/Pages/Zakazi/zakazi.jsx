import React from "react";
import "./zakazi.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import homeLogo from "../../Images/homeIcon.png"
import CallcentarImg from "../../Images/smallCallCentarImg.jpg";

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
                <h3>Brzo i jednostavno zakazivanje kurira, direktno sa naseg web sajta.</h3>
                <div className="mainForm">
                    <div className="single-form">
                        <form>
                            <div className="formTitle"><span>PODACI O POSILJAOCU</span></div>
                                <label>Ime i prezime/Pravno lice obavezno</label><input type="text" />
                                <label>Grad/Opstina</label><input type="text" />
                                <label>Adresa</label><input type="text" />
                                <label>Kucni broj</label><input type="text" />
                                <label>Postanski brj</label><input type="text" />
                                <label>Telefon</label><input type="text" />
                                <label>Kontakt osoba</label><input type="text" />
                                <label>Email</label><input type="text" />
                                <label>Napomena pri preuzimanju</label><input type="text" />
                           
                        </form>
                    </div>
                    <div className="single-form">
                        <form>
                        <div className="formTitle"> <span>PODACI O PRIMAOCU</span><br></br></div>
                            <label>Ime i prezime/Pravno lice obavezno</label><input type="text" />
                                <label>Grad/Opstina</label><input type="text" />
                                <label>Adresa</label><input type="text" />
                                <label>Kucni broj</label><input type="text" />
                                <label>Postanski brj</label><input type="text" />
                                <label>Telefon</label><input type="text" />
                                <label>Kontakt osoba</label><input type="text" />
                                <label>Napomena pri preuzimanju </label><input type="text" />
                           
                        </form>
                    </div>
                    <div className="single-form">
                        <form>
                        <div className="formTitle"> <span>DETALJI POSILJKE</span><br></br></div>
                                <label>Broj paketa</label><input type="text" />
                                <label>Isporuka</label><input type="text" />
                                <label>Tezina posiljke</label><input type="text" />
                                <label>Sadrzaj posiljke</label><input type="text" />
                                <label>Otkupna vrednost</label><input type="text" />
                                <label>Dodatne usluge</label><input type="text" />
                                <label>Placa isporuku</label><input type="text" />
                            
                        </form>
                    </div>
                </div>
                <button type="submit" id="form-button">POTVRDI</button>
            </div>
            <div className="callCentar-smallDivs">
                <div className="callCentarSmallDiv-img"></div>
                <div className="callCentarInfo-div">
                    <h4>CALL CENTAR</h4>
                    <p>Naši operatori stoje Vam na usluzi za sve potrebne informacije.</p>
                    <p>RADNO VREME CALL CENTRA</p>
                    <p>Ponedeljak - Petak od 08h do 16h</p>
                    <p>066 624.29.59</p>
                    </div>
            </div>
            <Footer />
        </div>
    )


}
export default Zakazi;