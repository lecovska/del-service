import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import InfoDivs from "../../Components/InfoDivs/infoDivs";
import Delivery from "../../Components/Delivery/delivery";
import FourDivs from "../../Components/FourDivs/fourDivs";
import CallCentar from "../../Components/CallCentarInfo/callCentar";
import "./homepage.css";
import News from "../../Components/News/news";

function HomePage(){
    return(
        <div className="homePage">
<Header/>
<div className="image">
    <div className="greeting">
    <span className="main-title">Dostava uz osmeh, od vrata do vrata.</span>
    <button>Posalji pakete danas</button>
    </div>
</div>
<InfoDivs/>
<Delivery/>
<FourDivs/>
<CallCentar/>
<News/>
<Footer/>
        </div>
    )
}

export default HomePage;
