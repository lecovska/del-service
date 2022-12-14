import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
// import InfoDivs from "../../Components/InfoDivs/infoDivs";
import Delivery from "../../Components/Delivery/delivery";
import FourDivs from "../../Components/FourDivs/fourDivs";
import CallCentar from "../../Components/CallCentarInfo/callCentar";
import "./homepage.css";
import News from "../../Components/News/news";
import VideoDel from "../../Images/Video-Flex-kurirska-sluzba 4K.mp4";
import Line from "../../Components/Line/line";

function HomePage(){
    return(
        <div className="homePage">
<Header/>
<div className="image">
    <iframe src={VideoDel} title="video" type="video/mp4" allow='autoplay'></iframe>
    <div className="greeting">
    <span className="main-title"><span id="mainTitle-span">Dostava uz osmeh,</span><br></br> od vrata do vrata.</span>
    <button type="submit" className="mainTitle-btn"><span id="btn-span">Pošalji paket</span></button>
    </div>
</div>
{/* <InfoDivs/> */}

<Delivery/>
<Line/>
<FourDivs/>

<CallCentar/>
<News/>
<Footer/>
        </div>
    )
}

export default HomePage;
