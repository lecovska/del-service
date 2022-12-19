import React from "react";
import "./header.css";
import logo from "../../Images/logoPng.png";
import telephoneIcon from "../../Images/output-onlinepngtools.png";

function Header(){
    return(
        <div className="header">
<div className="up">
   <p id="header-p">Pozovite nas bilo kad. Stižemo bilo gde!</p>
    <div className="number">
    <div id="numberBox"><img id="tel" src={telephoneIcon} alt="tel"></img></div>
    <p id="number-p">+381 60 588 12 34</p>
    </div>
</div>
<div className="down">
    <div id="logoBox"><img id="logo" src={logo} alt="logo"></img></div>
    <div id="list">
    <ul>
            <li><a href="../../Pages/HomePage">Početna</a></li>
            <li><a href="../../Pages/Gallery">Usluge</a></li>
            <li><a href="../../Pages/About">Zakaži kurira</a></li>
            <li><a href="../../Pages/Contact">Cenovnik</a></li>
            <li><a href="../../Pages/Contact">Kontakt</a></li>
        </ul>
    </div>
</div>
    </div>
    )
}

export default Header;