import React from "react";
import "./accordion.css";
function proba(){
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

function Acc() {
    return (
        <div className="acc">

            <div className="container">

                <div className="wrapper">

                    <button className="toggle" id="toggleStyle" onClick={proba()}>Danas za danas - Kurirska dostava</button>
                    <div className="content2">
                        <p>Pozovite nas najkasnije do 12h, kurir će u roku od sat vremena preuzeti vašu pošiljku, kako bi ona stigla do
                            primaoca istog dana do 18h.
                            Pošiljalac može da prijavi pošiljku putem call centra ili putem sajta "zakaži kurira" najkasnije do 12h. Kurir će
                            vašu pošiljku preuzeti najkasnije do 13h.
                            Pošiljka se primaocu isporučije istog dana do 18h. Ova usluga danas za danas se odnosi samo na Beograd.    </p>
                    </div>

                </div>
                <div className="wrapper">

                    <button className="toggle" id="toggleStyle" onClick={proba()}>Danas za sutra - Kurirska dostava</button>
                    <div className="content2">
                        <p>Pozovite nas danas za sutra, najkasnije do 15h. Kurir će u roku od dva sata preuzeti vašu pošiljku, kako bi ona
                            stigla do primaoca sutradan u do 12h ili 18h.
                            Svoju pošiljku možete da prijavite putem call centra ili putem sajta "zakaži kurira" najkasnije do 15h.
                            Kurir će vašu pošiljku peruzeti najkasnije do 15h. Pošiljka se isporučuje primaocu sutradan, najkasnije do 18h.</p>
                    </div>

                </div>
                <div className="wrapper">

                    <button className="toggle" id="toggleStyle" onClick={proba()}>B2C Dostava - Pouzdanost i flexibilnost na terenu</button>
                    <div className="content2">
                        <p>Potrebna Vam je dostava od Vaše kompanije do drugog pravnog lica? Na pravom ste mestu.
                            Vršimo dostave proizvoda i stvari između pravnih i fizičkih lica na teritoriji Beograda i okoline.
                            Robu preuzimamo na dan isporuke sa Vaše adrese. Skladištimo je kod nas u magacinu , nakon toga je u
                            dogovoreno vreme kuriri je isporučuju Vašim korisnicima.
                            Pozovite nas i saznajte za pogodnosti koje nudimo za B2C dostave.      </p>
                    </div>

                </div>
                <div className="wrapper">

                    <button className="toggle" id="toggleStyle" onClick={proba()}>B2B Dostava - Pouzdanost i flexibilnost na terenu</button>
                    <div className="content2">
                        <p>FLEX kurirska služba posluje i B2B, sa firmama, online prodavnicama i svim drugim tipovima biznisa, kojima je
                            neophodna kvalitetna logistika kao i brza i sigurna isporuka robe, dokumentacije i svih vrsta paketa.
                            Slanje paketa se odvija po principu danas za sutra i danas za danas : Pouzdanost i flexibilnost na terenu koju
                            negujemo prema Vašim korisnicima, su najvažniji razlozi njihovog zadovoljstva. Sa njihovim zadovoljstvom
                            raste ugled i kredibilitet Vaše firme, kao i sama prodaja.
                            Pozovite nas i saznajte za pogodnosti koje nudimo za B2B dostave.   </p>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Acc;