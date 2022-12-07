import React from "react";
import "./pitanja.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";

function Pitanja(){
    return(
        <div className="pitanja">
<Header/>
<div className="image">
                <div className="greeting">
                    <span className="main-title">Kontakt</span>
                    <button>Pocetna - Flex kurirska sluzba</button>
                </div>
            </div>
            <div className="questions">
<h1>Vasa najcesca pitanja</h1>
<div className="dropdown">

</div>

            </div>
            <Footer/>
        </div>
    )
}

export default Pitanja;