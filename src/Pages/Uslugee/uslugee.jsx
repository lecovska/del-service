import React from "react";
import "./uslugee.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import homeIcon from "../../Images/homeIcon.png";

function col() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        })
    }
}

function Uslugee() {
    return (
        <div className="uslugee">
            <Header />
            <div className="image-uslugee">

                <div className="greeting">
                    <span className="main-title">Kurirska dostava</span>
                    <a href="/"><img id="homeIcon" src={homeIcon} alt="homeIcon"></img> Početna - Flex kurirska služba</a>
                </div>
            </div>

            <div className="uslugeMenu">

                {/* <div className="singleContent" onClick={col}>
                    <button type="button" class="collapsible"  >Dostava Beograd - Kurirska dostava</button>
                    <div class="content">
                        <p> Pozovite nas da preuzmeno vašu pošiljku danas i primaoc može da očekuje svoj paket odmah ili najkasnije do
                            18h.
                            Pošiljku možete zakazati putem call centra ili putem forme na našem veb sajtu.
                            Dostava pošiljke Beograd - obavlja poštanske usluge na teritoriji grada Beograda. Pošiljalac prijavljuje pošiljku
                            telefonski ili elektronski najkasnije do 12 časova, nakon toga kurir pošiljku preuzima i dostavlja paket na
                            teritioriji grada Beograda istog dana, najkasnije do 18 časova.</p>
                    </div>
                    </div> */}

                    <div className="singleContent" onClick={col} >
                    <button type="button" class="collapsible" >Danas za danas - Kurirska dostava</button>
                    <div class="content">
                        <p>  Pozovite nas najkasnije do 12h, kurir će u roku od sat vremena preuzeti vašu pošiljku, kako bi ona stigla do
                            primaoca istog dana do 18h.
                            Pošiljalac može da prijavi pošiljku putem call centra ili putem sajta "zakaži kurira" najkasnije do 12h. Kurir će
                            vašu pošiljku preuzeti najkasnije do 13h.
                            Pošiljka se primaocu isporučije istog dana do 18h. Ova usluga danas za danas se odnosi samo na Beograd.      </p>
                    </div>
               </div>
               <div className="singleContent" onClick={col}>
             
                    <button type="button" class="collapsible" >Danas za sutra - Kurirska dostava</button>
                    <div class="content">
                        <p>Pozovite nas danas za sutra, najkasnije do 15h. Kurir će u roku od dva sata preuzeti vašu pošiljku, kako bi ona
                            stigla do primaoca sutradan u do 12h ili 18h.
                            Svoju pošiljku možete da prijavite putem call centra ili putem sajta "zakaži kurira" najkasnije do 15h.
                            Kurir će vašu pošiljku peruzeti najkasnije do 15h. Pošiljka se isporučuje primaocu sutradan, najkasnije do 18h.</p>
                    </div>
               </div>

               <div className="singleContent" onClick={col}>
                    <button type="button" class="collapsible" >B2C Dostava - Pouzdanost i flexibilnost na terenu</button>
                    <div class="content">
                        <p>
                            Potrebna Vam je dostava od Vaše kompanije do drugog pravnog lica? Na pravom ste mestu.
                            Vršimo dostave proizvoda i stvari između pravnih i fizičkih lica na teritoriji Beograda i okoline.
                            Robu preuzimamo na dan isporuke sa Vaše adrese. Skladištimo je kod nas u magacinu , nakon toga je u
                            dogovoreno vreme kuriri je isporučuju Vašim korisnicima.
                            Pozovite nas i saznajte za pogodnosti koje nudimo za B2C dostave.      </p>
                    </div>
                    </div>

                    <div className="singleContent" onClick={col}>
                    <button type="button" className="collapsible" >B2B Dostava - Pouzdanost i flexibilnost na terenu</button>
                    <div class="content">
                        <p>
                            FLEX kurirska služba posluje i B2B, sa firmama, online prodavnicama i svim drugim tipovima biznisa, kojima je
                            neophodna kvalitetna logistika kao i brza i sigurna isporuka robe, dokumentacije i svih vrsta paketa.
                            Slanje paketa se odvija po principu danas za sutra i danas za danas : Pouzdanost i flexibilnost na terenu koju
                            negujemo prema Vašim korisnicima, su najvažniji razlozi njihovog zadovoljstva. Sa njihovim zadovoljstvom
                            raste ugled i kredibilitet Vaše firme, kao i sama prodaja.
                            Pozovite nas i saznajte za pogodnosti koje nudimo za B2B dostave.      </p>
                    </div>
                    </div>
                    <div className="singleContent" onClick={col}>
                    <button type="button" class="collapsible"  >Dodatne usluge</button>
                    <div class="content">
                        <p> SMS izveštaj - Opcija slanja pošiljaocu potvrdu o preuzimanju i izveštaj o obavljenoj dostavi, ali i primaocu izveštaj o obavljenom preuzimanju.
SMS izveštaj se naplaćuje prema važećem cenovniku koji možete pogledati ovde(link cenovnika). SMS uslugu plaća onaj ko plaća poštarinu.</p>
                       <p> Potvrda uručenja pošiljke - Potvrda o uručenju je pošiljka čije se uručenje potvrđuje pisanim putem. Obrazac se prilikom dostave pošiljke daje primaocu na potpis, a potom se, dan nakon dostave, vraća pošiljaocu na adresu.</p> 
                        <p>Lično uručenje - Uručenje se vrši direktno i isključivo navedenom primaocu.</p>
                     <p>Vraćanje povratne dokumentacije/otpremnice - Ukoliko uz pošiljku želite da pošaljete dokument koji prilikom dostave pošiljke primalac treba da potpiše, a koji Vam Flex-kurir vraća na adresu sa koje ste poslali pošiljku.  Overen dokument (otpremnica) se dan nakon uručenja pošiljke vraća na adresu pošiljaoca.</p>
                     <p> Plaćeni odgovor - Prilikom isporuke pošiljke, kurir preuzima povratnu pošiljku koja se dan nakon dostave vraća na adresu pošiljaoca. Pošiljka koja se vraća ne sme biti teža od 2kg.</p>  
                        
                    </div>
                    </div>

            </div>

            <Footer />
        </div>
    )
}

export default Uslugee;