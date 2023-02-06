import React from "react";
import "./delivery.css";
// import slika1 from "../../Images/Flex-kurirska-sluzba16.jpg";
// import slika2 from "../../Images/Flex-kurirska-sluzba2.jpg";
import { Link } from "react-router-dom";
import arrowIcon from "../../Images/arrowIcon.png";


function Delivery() {
    return (
        <div className="delivery">

            <h1 id="h1-delivery">FLEX,<br></br>Najbolja kurirska sluzba u gradu</h1>
            <div className="delivery-flex">
                <div className="delivery-img"></div>
                {/* <img className="deliveryImg" src={slika1} alt="slika1"></img> */}
                {/* <img className="deliveryImg1" src={slika2} alt="slika2"> </img>*/}
                <div className="delivery-text">
                    <h3>Dostava Beograd</h3>
                    <p>Pozovite nas da preuzmemo Vašu pošiljku danas, primaoc je može očekivati narednog dana do 18h.</p>
                    <Link className="delivery-a" to="/Usluge">Saznaj više<img className="arrowIconPng" src={arrowIcon} alt="arrow"></img></Link>
                </div>

                <div className="delivery-img2"></div>

                <div className="delivery-text">
                    <h3>Dostava danas za danas</h3>
                    <p>Za one koji nemaju vremena tu je dostava. Danas za DANAS. Vašu pošiljku dostavljamo na adresu primaoca odmah.</p>
                    <Link className="delivery-a" to="/Usluge">Saznaj više<img className="arrowIconPng" src={arrowIcon} alt="arrow"></img></Link>
                </div>
            </div>
        </div>
    )

}
export default Delivery;