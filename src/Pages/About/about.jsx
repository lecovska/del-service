import React from "react";
import "./about.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import homeIcon from "../../Images/homeIcon.png";
import smallImg from "../../Images/smallImg.jpg";
import oNama from "../../Images/oNama.jpg";
import Logo from "../../Images/logoPng.png";




function About() {
    return (
        <div className="about">
            <Header />
            <div className="image-about">
                <div className="greeting">
                    <span className="main-title">O nama</span>
                    <a href="nesto"><img id="homeIcon" src={homeIcon} alt="homeIcon"></img> Početna - Flex kurirska služba</a>
                </div>
            </div>
            <div className="small-wrapper">

                <div className="small-img"><img id="smallImg" src={smallImg} alt="smallImg"></img></div>
                <div className="small-text">
                    <h1>Mi dostavljamo do vasih vrata!</h1>
                    <p>Flex kurir je novonastala sluzba koja obavlja svoju delatnost n ateritoriji grada Beograda</p>
                    <p>Kurirsku sluzbu vode mladi, entuzijasticni i ambiciozni ljudi, sa vizijom da se sto vise prilagode potrebama modernog i savremenenog klijenta, i sa ciljem da se razviju u jednu od najkonkuretnijih kurirskih sluzbi kod nas.</p>
                    <button>Kontakt</button>
                </div>

            </div>
           <div className="bottomDiv">
            <div className="bottomDiv-img">
            <img className="Logo" src={Logo} alt="Logo"></img>
            <p>#midostavljamobrze</p> 
            {/* < div className="media-btns">
                    <span>Zaprati nas!</span>
                    <a>logo</a>
                    <a>logo</a>
                    <a>logo</a>
                </div> */}
            </div>
        </div>
<div className="lastDiv">
    <h2>Zadovoljni korisnici</h2>
    <h1>Šta kažu naši zadovoljni korisnici</h1>
    <div className="boxes">
        <div class="box">
        
       
           <p>Lorem ipsum dolor sit amet
Sed do eiusmod tempor dolore magna
aliqua.Lorem ipsum dolor sit amet</p>
</div>
    
        <div class="box1">
      
        <p>Lorem ipsum dolor sit amet
Sed do eiusmod tempor dolore magna
aliqua.Lorem ipsum dolor sit amet</p></div>
       
        <div class="box2">
        
        <p>Lorem ipsum dolor sit amet
Sed do eiusmod tempor dolore magna
aliqua.Lorem ipsum dolor sit amet</p>
        </div>

    </div>

</div>

            <Footer />
        </div>
    )
}

export default About;