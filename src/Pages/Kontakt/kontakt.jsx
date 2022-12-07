import React from "react";
import "./kontakt.css";
import Header from "../../Components/Header/header";
// import Footer from "../../Components/Footer/footer";


function Kontakt() {
    return (
        <div className="kontakt">
            <Header />

            <div className="image">
                <div className="greeting">
                    <span className="main-title">Kontakt</span>
                    <button>Pocetna - Flex kurirska sluzba</button>
                </div>
            </div>
            <div className="mainDiv-contact">

                <div className="infoDiv-text">
                    <h3>Hajde da razgovaramo o onome sto je vama vazno</h3>
                    <br></br>
                    <br></br>
                    <p>Pisite nam</p>
                    <br></br>
                    <p>ili nas pozovite +381 60 588 12 34 odvojicemo vreme ya raygovor preko telefona ili licno da bismo saznali vise o vasim privatnim/poslovnim potrebama.</p>
                    <br></br>
                    <p>logo Beograd</p>
                    <br></br>
                    <a href="nesto">office@flex-kurir.rs</a>
                    <br></br>
                    <p>logo +381 60 588 12 34</p>
                </div>
                <div className="contact-box">
                    <h3>Kontaktirajte nas! Tu smo za sva Vasa pitanja.</h3>
                    <div className="form-div">
                        <form>
                            <div className="nameSurname">
                                <input id="name" placeholder="Ime"></input>
                                <input id="name" placeholder="Prezime"></input>
                            </div>
                            <input id="email" placeholder="Email"></input>
                            <textarea placeholder="Poruke"></textarea>
                        </form>
                    </div>
                    <div className="buttons">
                        <label><input id="checkbox" type="checkbox"></input> Prihvati politiku privatnosti</label>
                        <button>Posalji</button>
                    </div>
                </div>

            </div>
            <div className="main-image">
                <div className="nonImageDiv">
                    <div className="greetingTitle">
                        <p className="title">Flex kurirska sluzba</p>
                        <h2>Stvarno jednostavno, stvarno brzo!</h2>
                    </div>
                    <div className="callInfo">
                        <div className="viber">
                            <div className="logo">logo</div>
                            <div className="viber">
                                <span>cujemo se putem vibera</span>
                                <span>+381 60 588 12 34</span>
                            </div>
                        </div>
                        <div className="phone">
                            <div className="logo">logo</div>
                            <div className="viber">
                                <span>cujemo se putem vibera</span>
                                <span>+381 60 588 12 34</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lastThreeDivs">
                <div className="lastDiv">
                    <h4>Reklamacija</h4>
                    <p>hgfhhjhgjghkjjhgkjhk</p>
                    <p>hgfhhjhgjghkjjhgkjhk</p>
                    <a href="nesto">Preuzmi odf</a>
                </div>
                <div className="lastDiv">
                    <h4>Kurirska dostava</h4>
                    <p>hgfhhjhgjghkjjhgkjhk</p>
                    <p>hgfhhjhgjghkjjhgkjhk</p>
                    <a href="nesto">Zakazi kurira</a>
                </div>
                <div className="lastDiv">
                    <h4>Saljete mnogo posiljki</h4>
                    <p>hgfhhjhgjghkjjhgkjhk</p>
                    <p>hgfhhjhgjghkjjhgkjhk</p>
                    <a href="nesto">kontaktirajte nas</a>
                </div>
            </div>
            {/* <Footer/> */}
        </div>

    )
}
export default Kontakt;