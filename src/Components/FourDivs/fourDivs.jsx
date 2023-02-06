import React from "react";
import "./fourDivs.css";
import slika1 from "../../Images/Flex-kurirska-sluzba3.jpg";
import slika2 from "../../Images/Flex-kurirska-sluzba13.jpg";
import slika3 from "../../Images/Flex-kurirska-sluzba7.1.jpg";
import slika4 from "../../Images/Flex-kurirska-sluzba9.jpg";




function FourDivs() {
    return (
        <div className="fourDivs">

            <div className="img-of-delivery">
                <div className="dev-img"><img className="slika" src={slika1} alt="slika1"></img></div>
                <a className="homepage-aFourDivs" href="/Zakazi"> <h2 className="homepage-aFourDivs">Brže vreme isporuke</h2></a>
            </div>

            <div className="img-of-delivery">
                <div className="dev-img"><img className="slika" src={slika2} alt="slika2"></img></div>
                <a className="homepage-aFourDivs" href="/Zakazi"><h2 className="homepage-aFourDivs">Neka pošiljka stigne do Vas</h2></a>
            </div>

            <div className="img-of-delivery">
                <div className="dev-img"><img className="slika"  src={slika3} alt="slika3"></img></div>
                <a className="homepage-aFourDivs" href="/Usluge"><h2 className="homepage-aFourDivs">Flexibilna dostava</h2></a>
               
            </div>

            <div className="img-of-delivery">
                <div className="dev-img"><img className="slika" src={slika4} alt="slika4"></img></div>
                <a className="homepage-aFourDivs" href="/Usluge"> <h2 className="homepage-aFourDivs">Pošiljka više nije Vaša briga</h2></a>
            </div>

        </div>
    )
}

export default FourDivs;