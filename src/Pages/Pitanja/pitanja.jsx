import React from "react";
import "./pitanja.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import homeIcon from "../../Images/homeIcon.png";

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
<h1>Vasa najcesca pitanja</h1>
<div className="dropdown">

</div>

            </div>
            <Footer/>
        </div>
    )
}

export default Pitanja;