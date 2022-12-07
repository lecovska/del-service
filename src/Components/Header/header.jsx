import React from "react";
import "./header.css";

function Header(){
    return(
        <div className="header">
<div className="up">
   <p>Pozovite nas bilo kad. Stižemo bilo gde!</p>
    <div>
    <div id="numberBox">logo</div>
    <p>+381 60 588 12 34</p>
    </div>
</div>
<div className="down">
    <div id="logoBox">LOGO</div>
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