import React from "react";
import "./usluge.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import homeIcon from "../../Images/homeIcon.png";
import Collapsible from 'react-collapsible';

function Usluge(){
    return(
        <div className="pitanja">
<Header/>
<div className="image">
                <div className="greeting">
                    <span className="main-title">Kurirska dostava</span>
                    <a href="/"><img id="homeIcon" src={homeIcon} alt="homeIcon"></img> Početna - Flex kurirska služba</a>
                </div>
            </div>
            <div className="dostava">



            </div>
            <Footer/>
        </div>
    )
}

export default Usluge;