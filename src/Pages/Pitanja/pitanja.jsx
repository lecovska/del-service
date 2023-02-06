import React from "react";
import "./pitanja.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import homeIcon from "../../Images/homeIcon.png";


// function col() {
//   var coll = document.getElementsByClassName("collapsible");
//   var i;

//   for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function () {
//       this.classList.toggle("active");
//       var content = this.nextElementSibling;
//       if (content.style.display === "block") {
//         content.style.display = "none";
//       } else {
//         content.style.display = "block";
//       }
//     })
//   }
// }


function probaPitanja(){
  let toggles = document.getElementsByClassName("toggle2");
  let contentDiv = document.getElementsByClassName("content3");
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
  

function Pitanja() {
  return (
    <div className="pitanja">
      <Header />
      <div className="image">
        <div className="greeting">
          <span className="main-title">Najčešća pitanja korisnika</span>
          <a href="/"><img id="homeIcon" src={homeIcon} alt="homeIcon"></img> Početna - Flex kurirska služba</a>                </div>
      </div>
      <div className="pitanjaCol">

      <div className="acc">

<div className="container">

    <div className="wrapper">

        <button className="toggle2" id="toggleStyle" onClick={probaPitanja}>Šta podrazumeva usluga, danas za odmah?</button>
        <div className="content3">
            <p>Za one koji nemaju vremena tu je dostava Danas za odmah.
              Pozovite nas najkasnije do 13h i očekujte da Vašu pošiljku dostavimo na adresu primaoca - odmah.
              *Ova usluga se odnosi samo na Beograd </p>
        </div>

    </div>
    <div className="wrapper">

        <button className="toggle2" id="toggleStyle" onClick={probaPitanja}>Šta sve može da sadrži Flex pošiljka?</button>
        <div className="content3">
            <p>Flex pošiljke mogu sadržati dokumenta, pisana saopštenja, robu i druge predmete, osim onih za koje važe zakonske zabrane</p>
        </div>

    </div>
    <div className="wrapper">

        <button className="toggle2" id="toggleStyle" onClick={probaPitanja}>Koji su načini plaćanja prenosa Flex kurir pošiljke?</button>
        <div className="content3">
            <p>Načini plaćanja su:
              gotovinom,
              karticom,
              fakturom.</p>
        </div>

    </div>
    <div className="wrapper">

        <button className="toggle2" id="toggleStyle" onClick={probaPitanja}>Koji su rokovi uručenja Flex express pošiljke?</button>
        <div className="content3">
            <p>Rokovi uručenja za Flex kurirske usluge su: Danas za odmah, danas za danas, danas za sutra.</p>
        </div>

    </div>

</div>

</div>
</div>





{/* 
      <div className="pitanjaCol">

        <div className="singleContentPitanja" onClick={col}>
          <button type="button" class="collapsible"  >Šta podrazumeva usluga, danas za odmah?</button>
          <div class="content">
            <p>   Za one koji nemaju vremena tu je dostava Danas za odmah.
              Pozovite nas najkasnije do 13h i očekujte da Vašu pošiljku dostavimo na adresu primaoca - odmah.
              *Ova usluga se odnosi samo na Beograd</p>
          </div>
        </div>

        <div className="singleContentPitanja" onClick={col} >
          <button type="button" class="collapsible" >Šta sve može da sadrži Flex pošiljka?</button>
          <div class="content">
            <p> Flex pošiljke mogu sadržati dokumenta, pisana saopštenja, robu i druge predmete, osim onih za koje važe zakonske zabrane</p>
          </div>
        </div>
        <div className="singleContentPitanja" onClick={col}>

          <button type="button" class="collapsible" >Koji su načini plaćanja prenosa Flex kurir pošiljke?</button>
          <div class="content">
            <p>  Načini plaćanja su:
              gotovinom,
              čekom,
              fakturom.</p>
          </div>
        </div>

        <div className="singleContentPitanja" onClick={col}>
          <button type="button" class="collapsible" >Koji su rokovi uručenja Flex express pošiljke?</button>
          <div class="content">
            <p>Rokovi uručenja za Post express usluge su: Danas za odmah, danas za danas, danas za sutra.</p>
          </div>
        </div>




      </div> */}
      <Footer />
    </div>
  )
}

export default Pitanja;


