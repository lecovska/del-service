import React from "react";
import "./about.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import homeIcon from "../../Images/homeIcon.png";
import smallImg from "../../Images/smallImg.jpg";
import oNama from "../../Images/oNama.jpg";
import Logo from "../../Images/logoPng.png";
import calculator from "../../Images/calculator.png";
import sms from "../../Images/sms.png";
import delivery from "../../Images/delivery.png";
import { Link } from "@mui/material";




function About() {
    return (
        <div className="about">
            <Header />
            <div className="image-about">
                <div className="greeting">
                    <span className="main-title-oNama">O nama</span>
                    <a href="/" id="Onama-a"><img id="homeIcon" src={homeIcon} alt="homeIcon"></img> Početna - Flex kurirska služba</a>
                </div>
            </div>
            <div className="small-wrapper">

                <div className="small-img"><img id="smallImg" src={smallImg} alt="smallImg"></img></div>
                <div className="small-text">
                    <h1>Mi dostavljamo do vasih vrata!</h1>
                    <p>Flex kurir je novonastala sluzba koja obavlja svoju delatnost n ateritoriji grada Beograda</p>
                    <p>Kurirsku sluzbu vode mladi, entuzijasticni i ambiciozni ljudi, sa vizijom da se sto vise prilagode potrebama modernog i savremenenog klijenta, i sa ciljem da se razviju u jednu od najkonkuretnijih kurirskih sluzbi kod nas.</p>
                    <a href="../../Pages/Kontakt"><button>Kontakt</button></a>
                </div>

            </div>
           <div className="bottomDiv">
            <div className="bottomDivLogo">

          



            </div>
            <div className="bottomDivIcons">
            <a href="/Pages/zakazi"><img className="sms" src={delivery} alt="delivery"></img> Zakazi kurira</a>
           <a href="/Pages/kalkulator"><img className="calculator" src={calculator} alt="calculator"></img> Kalkulator cena</a>
           {/* <a href="https://www.instagram.com/flex.kurir/"><img className="sms" src={sms} alt="sms"></img> SMS Obavestenja</a> */}
           
                    
                    


            </div>
            
            
        </div>
        <div className="lastDiv">
    <h2>Zadovoljni korisnici</h2>
    <h1>Šta kažu naši zadovoljni korisnici</h1>
    <div className="boxes">
        <div class="box">
            <div className="textArea">
            <p>Flex je savrsenstvo! Nemam reci, nasmejano bice, brzo i efikasno. Svaka cast za kurira i kompaniju.</p>
            </div>       
</div>
    
        <div class="box1">
        <div className="textArea">
        <p>Prvi put sa njima da imam isporuku, skroz korektno i tacno i nisu kao ostali kad nazovu, neljubazni.</p></div>
       </div>
        <div class="box2">
        <div className="textArea">
        <p>Sve pohvale za kurirsku sluzbu. Brza isporuka i ljubazan kurir.</p>
</div>
        </div>

    </div>

</div>
<div className="partners-wrapper"> 
            <h1 id="partners-h1">Pouzdanost na terenu i fleksibilnost koju negujemo prema Vašim korisnicima,<br></br> su najvažniji razlozi njihovog zadovoljstva.</h1>
            <div className="partners"></div>
            </div>

            <Footer />
        </div>
    )
}

export default About;