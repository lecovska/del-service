import { Hidden } from "@mui/material";
import React from "react";
import "./accordion.css";




function proba() {
    let toggles = document.getElementsByClassName("toggle");
    let contentDiv = document.getElementsByClassName("content2");
    // let icons = document.getElementsByClassName("icon");

    for (let i = 0; i < toggles.length; i++) {
        toggles[i].addEventListener("click", () => {
            if (parseInt(contentDiv[i].style.height)
                !== contentDiv[i].scrollHeight) {
                contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            } else {
                contentDiv[i].style.height = "0px";
                toggles[i].style.color = "red";

            }
            for (let j = 0; j < contentDiv.length; j++) {
                if (j !== i) {
                    contentDiv[j].style.height = "0px";
                    toggles[j].style.color = "white";
                }
            }
        })
    }
}
// function showDiv(){
// let getDivWrapper= document.getElementsByClassName("mainWrapperDiv");
// getDivWrapper.style.visibility = "visible" ;
// }

function showDiv() {
    const box = document.getElementById("mainWrapperDiv")

    const btn = document.getElementById("dodatneUslugeH3-wrapper");

    btn.addEventListener('click', function handleClick() {
        if (box.style.visibility === 'hidden') {
            box.style.visibility = 'visible';


        } else {
            box.style.visibility = 'hidden';


        }
    });
}





function Acc() {
    return (
        <div className="acc">

            <div className="containerAcc">

                <div className="wrapper">

                    <button className="toggle" id="toggleStyle" onClick={proba}>Danas za danas - Kurirska dostava</button>
                    <div className="content2">
                        <p>Pozivnice za uslugu danas za danas se primaju najkasnije do 12h, kurir ce u najkraćem roku biti na adresi kako bi preuzeo Vašu pošiljku,a primalac istu može očekivati istog dana do 18h.
                            Pozivnicu možete uputiti putem call centra radnim danima od 08:00h - 16:00h ili putem sajta opcijom ,,Zakaži kurira"
                            USLUGA DANAS ZA DANAS SE VRŠI SAMO NA TERITORIJI GRADA BEOGRADA  </p>
                    </div>

                </div>
                <div className="wrapper">

                    <button className="toggle" id="toggleStyle" onClick={proba}>Danas za sutra - Kurirska dostava</button>
                    <div className="content2">
                        <p>Pozivnice za uslugu danas za sutra se primaju najkasnije do 15h, kurir ce u najkraćem roku biti na adresi kako bi preuzeo Vašu pošiljku,a primalac istu može očekivati narednog dana do 18h.
                            Pozivnicu možete uputiti putem call centra radnim danima od 08:00h - 16:00h ili putem sajta opcijom ,,Zakaži kurira"
                            USLUGA DANAS ZA SUTRA SE VRŠI SAMO NA TERITORIJI GRADA BEOGRADA </p>
                    </div>

                </div>
                <div className="wrapper">

                    <button className="toggle" id="toggleStyle" onClick={proba}>B2C Dostava - Pouzdanost i flexibilnost na terenu</button>
                    <div className="content2">
                        <p>Potrebna Vam je dostava od Vaše kompanije do drugog pravnog lica? Na pravom ste mestu.
                            Vršimo dostave proizvoda i stvari između pravnih i fizičkih lica na teritoriji Beograda i okoline.
                            Robu preuzimamo na dan isporuke sa Vaše adrese. Skladištimo je kod nas u magacinu , nakon toga u
                            dogovoreno vreme kuriri je isporučuju Vašim korisnicima.
                            Pozovite nas i saznajte za pogodnosti koje nudimo za B2C dostave.      </p>
                    </div>

                </div>
                <div className="wrapper">

                    <button className="toggle" id="toggleStyle" onClick={proba}>B2B Dostava - Pouzdanost i flexibilnost na terenu</button>
                    <div className="content2">
                        <p>FLEX kurirska služba posluje i B2B, sa firmama, online prodavnicama i svim drugim tipovima biznisa, kojima je
                            neophodna kvalitetna logistika kao i brza i sigurna isporuka robe, dokumentacije i svih vrsta pošiljaka.
                            Slanje pošiljke se odvija po principu danas za sutra i danas za danas : Pouzdanost i flexibilnost na terenu koju
                            negujemo prema Vašim korisnicima, su najvažniji razlozi njihovog zadovoljstva. Sa njihovim zadovoljstvom
                            raste ugled i kredibilitet Vaše firme, kao i sama prodaja.
                            Pozovite nas i saznajte za pogodnosti koje nudimo za B2B dostave.   </p>
                    </div>

                </div>
                {/* <div className="wrapper">

                    <button className="toggle" id="toggleStyle" onClick={proba}>Dropdown</button>
                    <div className="content2"> */}

                <div className="dropdown-wrapper">

                    <button type="button" id="dodatneUslugeH3-wrapper" onClick={showDiv} ><span id="btn-span">Dodatne usluge:  </span></button>
                    <div className="wrapper" id="mainWrapperDiv" >

                        <div className="wrapper">

                            <button className="toggle" id="toggleStyle" onClick={proba}>SMS izveštaj</button>
                            <div className="content2">
                                <p> SMS izveštaj - je izveštaj kojim se pošiljaocu potvrđuje da je pošiljka isporučena.
                                    SMS izveštaj se naplaćuje prema važećem cenovniku koji možete pogledati <a color="red" className="link" href="/cenovnikPage">ovde</a>. SMS uslugu plaća onaj ko plaća poštarinu.</p></div>

                        </div>
                        <div className="wrapper">
                            <button className="toggle" id="toggleStyle" onClick={proba}>Potvrda uručenja pošiljke</button>
                            <div className="content2">
                                <p> Potvrda o uručenju pošiljke/povratnica - je potvrda o uručenju u pisanoj formi, na posebnom obrascu ,,povratnica". Povratnica se prilikom isporuke pošiljke daje primaocu na potpis, a potom se vraća pošiljaocu na kućnu adresu narednog radnog dana.</p>
                            </div>
                        </div>
                        <div className="wrapper">

                            <button className="toggle" id="toggleStyle" onClick={proba}>Lično uručenje </button>
                            <div className="content2">
                                <p>Lučno uručenje - je uručenje pošiljke koje se može uručiti isključivo navedenom primaocu uz proveru lične karte.</p>
                            </div>

                        </div>
                        <div className="wrapper">

                            <button className="toggle" id="toggleStyle" onClick={proba}>Vraćanje povratne dokumentacije/otpremnice</button>
                            <div className="content2">
                                <p> Vracanje povratne dokumentacije/otpremnice - Ukoliko uz pošiljku želite da pošaljete dokument koji prilikom dostave pošiljke primalac treba da potpiše, a koji Vam Flex-kurir vraća na adresu sa koje ste poslali pošiljku. Overen dokument (otpremnica) se vraća na adresu pošiljaoca narednog radnog dana.</p>
                            </div>

                        </div>

                        <div className="wrapper">

                            <button className="toggle" id="toggleStyle" onClick={proba}>Plaćeni odgovor</button>
                            <div className="content2">
                                <p>
                                    Plaćeni odgovor - prilikom isporuke pošiljke kurir preuzima povratnu pošiljku koja se narednog radnog dana vraća na adresu pošiljaoca.</p></div>

                        </div>
                    </div>




                </div>

            </div>
        </div>
    )
}
export default Acc;

