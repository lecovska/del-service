import React from "react";
import "./header.css";
import logo from "../../Images/logoPng.png";
import telephoneIcon from "../../Images/output-onlinepngtools.png";
import { Link } from "react-router-dom";
import Hamburger from "../HamburgerMenu/hamburger";
// import { useState } from "react";

function callNumLogo(){
    const num=document.getElementById("tel");
    num.addEventListener("click", () => {
        window.open('tel:+381666242959')
    })
}

function callNumParagraf(){
    const numberInParagraf=document.getElementById("number-p");
    numberInParagraf.addEventListener("click", () => {
        window.open('tel:+381666242959')
    })
}

function Header() {

    // const [hamburgerOpen, setHamburgerOpen] = useState(false);
    // const toggleHamburger = () =>{
    //     setHamburgerOpen(!hamburgerOpen)
    // }


    return (
        <div className="header">
            <div className="up">
                <p id="header-p">Dostava uz osmeh!</p>
                <div className="number"> 
                    <div id="numberBox"><img id="tel" src={telephoneIcon} alt="tel" onClick={callNumLogo}></img></div>
                    <p id="number-p" onClick={callNumParagraf}>+381 66 6242959<br></br> +381 11 6242959</p>
                </div>
            </div> 
            <div className="down">
                <div id="logoBox"><img id="logo" src={logo} alt="logo"></img></div>
                <div id="list">
                    <ul>
                        <li><Link className="link-a-header" to="../../Pages/HomePage">Početna</Link></li>
                        <li><Link className="link-a-header" to="../../Pages/About">O nama</Link></li>
                        <li><Link className="link-a-header" to="../../Pages/Uslugee">Usluge</Link></li>
                        <li><Link className="link-a-header" to="../../Pages/Zakazi">Zakaži kurira</Link></li>
                        <li><Link className="link-a-header" to="../../Pages/Kalkulator">Kalkulator cena</Link></li>
                        <li><Link className="link-a-header" to="../../Pages/CenovnikPage">Cenovnik</Link></li>
                        <li><Link className="link-a-header" to="../../Pages/Kontakt">Kontakt</Link></li>
                    </ul>
                    <div className="hamburger">
                        <Hamburger />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;