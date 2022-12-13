import React from "react";
import "./fourDivs.css";
import slika1 from "../../Images/1.jpg";
import slika2 from "../../Images/2.jpg";
import slika3 from "../../Images/3.jpg";
import slika4 from "../../Images/4.jpg";



function FourDivs() {
    return (
        <div className="fourDivs">

            <div className="img-of-delivery">
                <div className="dev-img"><img className="slika" src={slika1} alt="slika1"></img></div>
                <h3>Brže vreme isporuke</h3>
                <a href="negde">Neki link</a>
            </div>

            <div className="img-of-delivery">
                <div className="dev-img"><img className="slika" src={slika2} alt="slika2"></img></div>
                <h3>Neka pošiljka stigne do Vas</h3>
                <a href="negde">Neki link</a>
            </div>

            <div className="img-of-delivery">
                <div className="dev-img"><img className="slika"  src={slika3} alt="slika3"></img></div>
                <h3>Flexibilna dostava</h3>
                <a href="negde">Neki link</a>
            </div>

            <div className="img-of-delivery">
                <div className="dev-img"><img className="slika" src={slika4} alt="slika4"></img></div>
                <h3>Pošiljka više nije Vaša briga</h3>
                <a href="negde">Neki link</a>
            </div>

        </div>
    )
}

export default FourDivs;