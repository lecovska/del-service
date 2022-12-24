import React from "react";
import "./pitanja.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import homeIcon from "../../Images/homeIcon.png";
import Collapsible from 'react-collapsible';


function Pitanja(){
    return(
        <div className="pitanja">
<Header/>
<div className="image">
                <div className="greeting">
                    <span className="main-title">Pitanja</span>
                    <a href="/"><img id="homeIcon" src={homeIcon} alt="homeIcon"></img> Početna - Flex kurirska služba</a>                </div>
            </div>
            
            <div className="questions">
            
<div className="dropdown">
<h1>Vasa najčešća pitanja</h1>
<Collapsible trigger="Šta podrazumeva usluga, danas za odmah?">
      <p>
      Za one koji nemaju vremena tu je dostava Danas za odmah.
Pozovite nas najkasnije do 13h i očekujte da Vašu pošiljku dostavimo na adresu primaoca - odmah.
*Ova usluga se odnosi samo na Beograd
      </p>
    
    </Collapsible>
    <Collapsible trigger="Šta sve može da sadrži Flex pošiljka?">
      <p>
      Flex pošiljke mogu sadržati dokumenta, pisana saopštenja, robu i druge predmete, osim onih za koje važe zakonske zabrane
      </p>
     
    </Collapsible>
    <Collapsible trigger="Koji su načini plaćanja prenosa Flex kurir pošiljke??">
      <p>
      Načini plaćanja su:
         gotovinom,
         čekom,
         fakturom.
      </p>
      
    </Collapsible>
    <Collapsible trigger="Koji su rokovi uručenja Flex express pošiljke??">
      <p>
      Rokovi uručenja za Post express usluge su: Danas za odmah, danas za danas, danas za sutra.
      </p>
    
    </Collapsible>


</div>

            </div>
            <Footer/>
        </div>
    )
}

export default Pitanja;