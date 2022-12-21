import React from "react";
import "./delivery.css";
// import slika1 from "../../Images/Flex-kurirska-sluzba16.jpg";
// import slika2 from "../../Images/Untitled.png";

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
                    <p>Pozovite nas da preuzmemo Vašu pošiljku danas.Primaoc može da očekuje paket odmah ili najkasnije do 18h.</p>
                    <a className="delivery-a" href="nesto">Saznaj više</a>
                </div>

                <div className="delivery-img2"></div>

                <div className="delivery-text">
                    <h3>Dostava danas za danas</h3>
                    <p>Za one koji nemaju vremena tu je dostava. Danas za DANAS. Vašu pošiljku dostavljamo na adresu primaoca odmah.</p>
                    <a className="delivery-a" href="nesto">Saznaj više</a>
                </div>
            </div>
        </div>
    )

}
export default Delivery;