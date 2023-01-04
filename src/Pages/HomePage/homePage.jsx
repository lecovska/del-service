import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
// import InfoDivs from "../../Components/InfoDivs/infoDivs";
import Delivery from "../../Components/Delivery/delivery";
import FourDivs from "../../Components/FourDivs/fourDivs";
import CallCentar from "../../Components/CallCentarInfo/callCentar";
import "./homepage.css";
import News from "../../Components/News/news";
import Line from "../../Components/Line/line";
import { Link } from "react-router-dom";




function HomePage() {
    return (
        <div className="homePage">
            <Header  />
            <div className="image-homePage">

                <div className="greeting">
                    <span className="main-title"><span id="mainTitle-span">Dostava uz osmeh,</span><br></br> od vrata do vrata.</span>
                <button type="submit" className="mainTitle-btn"><Link id="HomaPageMainBtn" to="../../Pages/Zakazi">Pošalji paket</Link></button> 
                </div>
            </div>
            {/* <InfoDivs/> */}

            <Delivery />
            <Line />
            <FourDivs />

            <CallCentar />
            <News />
          
            <Footer />
        </div>
    )
}

export default HomePage;
