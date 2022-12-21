import React from "react";
import "./about.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import homeIcon from "../../Images/homeIcon.png";
import smallImg from "../../Images/smallImg.jpg";


function About() {
    return (
        <div className="about">
            <Header />
            <div className="image-about">
                <div className="greeting">
                    <span className="main-title-about">O nama</span>
                    <a href="nesto"><img id="homeIcon" src={homeIcon} alt="homeIcon"></img> Početna - Flex kurirska služba</a>
                </div>
            </div>
            <div className="small-wrapper">

                <div className="small-img"><img id="smallImg" src={smallImg} alt="smallImg"></img></div>
                <div className="small-text">
                    <h1>Mi dostavljamo do vasih vrata</h1>
                    <p>Flex kurir je novonastala sluzba koja obavlja svoju delatnost n ateritoriji grada Beograda</p>
                    <p>Kurirsku sluzbu vode mladi, entuzijasticni i ambiciozni ljudi, sa vizijom da se sto vise prilagode potrebama modernog i savremenenog klijenta, i sa ciljem da se razviju u jednu od najkonkuretnijih kurirskih sluzbi kod nas.</p>
                    <button>Kontakt</button>
                </div>

            </div>
            <div className="bigImg">slika</div>
            <div className="marks">
                <div className="titles">
                    <h5>Zadovoljni korisnici</h5>
                    <h4>Sta kazu zadovoljni korisnici</h4>
                </div>
                <div className="caroussel">
                    ??????????
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;