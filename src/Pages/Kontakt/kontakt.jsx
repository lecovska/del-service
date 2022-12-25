import React, {useRef} from "react";
import "./kontakt.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import homeLogo from "../../Images/homeIcon.png";
import telLogo from "../../Images/output-onlinepngtools.png";
import locationLogo from "../../Images/Location-2---icon.png";
import maillogo from "../../Images/e-mail---icon.png";
import reklamacije from "../../Images/Reklamacije.jpg";
import { Link } from "react-router-dom";
// import kontaktImg from "../../Images/kontakt-img.jpg";
import emailjs from '@emailjs/browser';


export const Kontakt = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_s6qt8nk', 'template_2vac17d', form.current, 'hZLqM9SmQtFnOAi6A')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  
    
    
    return (


        
        <div className="main-kontakt">
            <Header />
            <div className="kontakt-image">
                <div className="greeting-kontakt">
                    <span className="main-title-kontakt slide-fwd-center">Kontakt</span>
                    <a href="/" id="kontakt-a"><img id="zakaziHomeLogo" src={homeLogo} alt="homelogo"></img>Početna - Flex kurirska služba</a>
                </div>
            </div>
            <div className="kontakt-wrapper">
                <div className="infoDiv-text">
                    <h3>Hajde da razgovaramo o onome što je Vama važno</h3>
                    <p id="infoDiv-p">Pišite nam! <br></br>
                        Ili nas pozovite +381 60 588 12 34 odvojićemo vreme za razgovor<br></br> ili lično da bismo saznali više o Vašim privatnim/poslovnim potrebama.</p>
                    <div className="logoDiv">

                        <div id="lokacija-kontakt">
                            <img id="img-lokacija" src={locationLogo} alt="lokacija"></img>
                            <span className="logoDiv-span">Beograd</span>
                        </div>

                        <div id="mail-kontakt">
                            <img id="img-mail" src={maillogo} alt="maillogo"></img>
                            <span className="logoDiv-span">office@flex-kurir.rs</span>
                        </div>

                        <div id="telefon-kontakt" >
                            <img id="img-tel" src={telLogo} alt="tel"></img>
                            <span className="logoDiv-span">+381 648447211</span>
                        </div>

                    </div>
                </div>

                 <div className="kontakt-box">
                    <h3 id="kontaktBox-h3">Kontaktirajte nas! Tu smo za sva Vasa pitanja.</h3>
                    <div className="form-div">
                        <form ref={form} onSubmit={sendEmail}>
                            {/* <div className="nameSurname">
                                <input id="name" placeholder="Ime" color="#F6F6F6"></input>
                                <input id="name" placeholder="Prezime"></input>
                            </div>
                            <input id="email" placeholder="Email"></input>
                            <input id="message-box" placeholder="Poruke"></input>
                            <input type="submit" value="Send" /> */}
                         
      <input id="name" type="text" name="user_name" placeholder="Ime" color="#F6F6F6"/>
      <input id="name" type="text" name="surname" placeholder="Prezime"></input>

      <input id="email" type="email" name="user_email" placeholder="Email" />
   
      <textarea id="message-box" name="message" placeholder="Poruke" />
      <input id="kontaktFormBtn" type="submit" value="Posalji" />
                        </form>
                    </div>

                    {/* <div className="buttons">
                        <div className="check-btn">
                            <label><input id="checkbox" type="checkbox"></input> Prihvati politiku privatnosti</label>
                        </div>
                        <button type="submit" id="kontaktFormBtn">Posalji</button>

                    </div> */}




                </div> 







            </div>

            <div className="middle-image"></div>
            <div className="reklamacije">
                <div className="reklamacijeSingleDiv">
                    <h4 className="rekalmacije-h4">Reklamacije</h4>
                    <p className="rekalmacije-p">Korisnik poštanskih usluga koji nije zadovoljan pruženom uslugom ima pravo da izjavi reklamaciju poštanskom operateru.
                        Reklamacije se mogu podneti u pisanom obliku ili elektronskim putem na adresu poštanskog
                        operatora reklamacije@flex-kurir.rs</p>
                    <a href="nesto" className="rekalmacije-a">preuzmi pdf</a>
                </div>
                <div className="reklamacijeSingleDiv">
                    <h4 className="rekalmacije-h4">Kurirska dostava</h4>
                    <p className="rekalmacije-p" >Preuzimanje i dostava pošiljaka obavlja se od
                        ponedeljka do petka. Preuzimanje i dostava
                        pošiljaka se ne vrši nedeljom, osim ako postoje
                        posebni ugovori ili odredbe direktora.

                        Pošiljke preuzete u petak dostavljaju se prvi
                        naredni padni dan – u ponedeljak.</p>
                    <Link to="../../Pages/Zakazi" className="rekalmacije-a">Zakaži kurira</Link>
                </div>
                <div className="reklamacijeSingleDiv">
                    <h4 className="rekalmacije-h4">Šaljete mnogo pošiljki?</h4>
                    <p className="rekalmacije-p" >Uštedite vreme i novac. Pozovite nas da sklopimo
                        ugovor za slanje velikog broja pošiljki.

                        Potpisivanjem ugovora, pored ušteda na poštarini,
                        ako ste pravno lice, bićete i u mogućnosti da
                        plaćate preko računa.</p>
                    <Link to="../../Pages/Zakazi" className="rekalmacije-a">Kontaktirajte nas</Link>
                </div>
            </div>
            {<Footer />}
        </div>
    )


}


    






export default Kontakt;
