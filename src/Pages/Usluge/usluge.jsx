import React from "react";
import "./usluge.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import homeIcon from "../../Images/homeIcon.png";
//import Collapsible from 'react-collapsible';

function Usluge(){
    return(
        <div className="pitanja">
<Header/>
<div className="image">
                <div className="greeting">
                    <span className="main-title">Kurirska dostava</span>
                    <a href="/"><img id="homeIcon" src={homeIcon} alt="homeIcon"></img> Početna - Flex kurirska služba</a>
                </div>
            </div>
            <div className="dostava">

            {/* <div className="dropdown">
<h1 id="dropdown-h1">Usluge</h1>
<Collapsible trigger="Dostava Beograd - Kurirska dostava?">
      <p>
      Pozovite nas da preuzmeno vašu pošiljku danas i primaoc može da očekuje svoj paket odmah ili najkasnije do
18h.
Pošiljku možete zakazati putem call centra ili putem forme na našem veb sajtu.
Dostava pošiljke Beograd - obavlja poštanske usluge na teritoriji grada Beograda. Pošiljalac prijavljuje pošiljku
telefonski ili elektronski najkasnije do 12 časova, nakon toga kurir pošiljku preuzima i dostavlja paket na
teritioriji grada Beograda istog dana, najkasnije do 18 časova.
      </p>
    
    </Collapsible>
    <Collapsible trigger="Danas za danas - Kurirska dostava">
      <p>
      Pozovite nas najkasnije do 12h, kurir će u roku od sat vremena preuzeti vašu pošiljku, kako bi ona stigla do
primaoca istog dana do 18h.
Pošiljalac može da prijavi pošiljku putem call centra ili putem sajta "zakaži kurira" najkasnije do 12h. Kurir će
vašu pošiljku preuzeti najkasnije do 13h.
Pošiljka se primaocu isporučije istog dana do 18h. Ova usluga danas za danas se odnosi samo na Beograd.      </p>
     
    </Collapsible>
    <Collapsible trigger="Danas za sutra - Kurirska dostava">
      <p>
      Pozovite nas danas za sutra, najkasnije do 15h. Kurir će u roku od dva sata preuzeti vašu pošiljku, kako bi ona
stigla do primaoca sutradan u do 12h ili 18h.
Svoju pošiljku možete da prijavite putem call centra ili putem sajta "zakaži kurira" najkasnije do 15h.
Kurir će vašu pošiljku peruzeti najkasnije do 15h. Pošiljka se isporučuje primaocu sutradan, najkasnije do 18h.
      </p>
      
    </Collapsible>
    <Collapsible trigger="B2C Dostava - Pouzdanost i flexibilnost na terenu">
      <p>
      Potrebna Vam je dostava od Vaše kompanije do drugog pravnog lica? Na pravom ste mestu.
Vršimo dostave proizvoda i stvari između pravnih i fizičkih lica na teritoriji Beograda i okoline.
Robu preuzimamo na dan isporuke sa Vaše adrese. Skladištimo je kod nas u magacinu , nakon toga je u
dogovoreno vreme kuriri je isporučuju Vašim korisnicima.
Pozovite nas i saznajte za pogodnosti koje nudimo za B2C dostave.      </p>
    
    </Collapsible>

    <Collapsible trigger="B2B Dostava - Pouzdanost i flexibilnost na terenu">
      <p>
      FLEX kurirska služba posluje i B2B, sa firmama, online prodavnicama i svim drugim tipovima biznisa, kojima je
neophodna kvalitetna logistika kao i brza i sigurna isporuka robe, dokumentacije i svih vrsta paketa.
Slanje paketa se odvija po principu danas za sutra i danas za danas : Pouzdanost i flexibilnost na terenu koju
negujemo prema Vašim korisnicima, su najvažniji razlozi njihovog zadovoljstva. Sa njihovim zadovoljstvom
raste ugled i kredibilitet Vaše firme, kao i sama prodaja.
Pozovite nas i saznajte za pogodnosti koje nudimo za B2B dostave.      </p>
    
    </Collapsible>
</div> */}

            </div>
            <Footer/>
        </div>
    )
}

export default Usluge;