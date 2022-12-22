import React from "react";
import "./header.css";
import logo from "../../Images/logoPng.png";
import telephoneIcon from "../../Images/output-onlinepngtools.png";
import { Link } from "react-router-dom";

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
            <li><Link to="../../Pages/HomePage">Početna</Link></li>
            <li><Link to="../../Pages/About">O nama</Link></li>
            <li><Link to="../../Pages/">Usluge</Link></li>
            <li><Link to="../../Pages/Zakazi">Zakaži kurira</Link></li>
            <li><Link to="../../Pages/CenovnikPage">Cenovnik</Link></li>
            <li><Link to="../../Pages/Kontakt">Kontakt</Link></li>
        </ul>
    </div>
</div>
    </div>
    )
}

export default Header;