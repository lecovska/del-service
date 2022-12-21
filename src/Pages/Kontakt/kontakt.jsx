import React from "react";
import "./kontakt.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import homeLogo from "../../Images/homeIcon.png";
// import kontaktImg from "../../Images/kontakt-img.jpg";


function Kontakt() {
    return (
        <div className="main-kontakt">
            <Header />
            <div className="kontakt-image">
                <div className="greeting">
                    <span className="main-title">Kontakt</span>
                    <a href="nesto"><img id="zakaziHomeLogo" src={homeLogo} alt="homelogo"></img>Početna - Flex kurirska služba</a>
                </div>
            </div>
            <div className="kontakt-wrapper">
                <div className="infoDiv-text">
                    <h3>Hajde da razgovaramo o onome što je Vama važno</h3>
                    <p id="infoDiv-p">Pišite nam! <br></br>
                        Ili nas pozovite +381 60 588 12 34 odvojićemo vreme za razgovor<br></br> ili lično da bismo saznali više o vašim privatnim/poslovnim potrebama.</p>
                    <p>logo Beograd</p>
                    <a href="nesto">office@flex-kurir.rs</a>
                    <p>logo +381 60 588 12 34</p>
                </div>

                <div className="kontakt-box">
                    <h3 id="kontaktBox-h3">Kontaktirajte nas! Tu smo za sva Vasa pitanja.</h3>
                    <div className="form-div">
                        <form>
                            <div className="nameSurname">
                                <input id="name" placeholder="Ime" color="#F6F6F6"></input>
                                <input id="name" placeholder="Prezime"></input>
                            </div>
                            <input id="email" placeholder="Email"></input>
                            <input id="message-box" placeholder="Poruke"></input>
                        </form>
                    </div>

                    <div className="buttons">
                        <div className="check-btn">
                            <label><input id="checkbox" type="checkbox"></input> Prihvati politiku privatnosti</label>
                        </div>
                        <button>Posalji</button>

                    </div>


                </div>
            </div>
            {<Footer />}
        </div>
    )


}
export default Kontakt;