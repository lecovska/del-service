import React from "react";
import "./carousselCom.css";
import slide1 from "../../Images/AUTO METAL GROUP DOO.png";
import slide2 from "../../Images/ELYOT FASHION.png";
import slide3 from "../../Images/FAROS LUMEN.png";
import slide4 from "../../Images/FAROS ONLINE SHOP.png";
import slide5 from "../../Images/FENIKS PROMO.png";
import slide6 from "../../Images/XYZ COMMUNICATIONS1111111.jpg";
import slide7 from "../../Images/MAD HEAD GAMES.png";


function Caro() {
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.getElementsByClassName("slide");
    //const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");


    if (nextButton) {
        nextButton.addEventListener("click", () => {
            const slideWidth = slide.clientWidth;
            slidesContainer.scrollLeft += slideWidth;
        });
    }
}
// prevButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft -= slideWidth;
// });



function Caroo() {
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.getElementsByClassName("slide");
    const prevButton = document.getElementById("slide-arrow-prev");
    //const nextButton = document.getElementById("slide-arrow-next");



    prevButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
    });

}


function CaroSlider() {
    return (
        <div className="caroSlider">
            <div className="slider-wrapper">
                <button type="button" className="slide-arrow" id="slide-arrow-prev" onClick={Caroo} ></button>
                <button type="button" className="slide-arrow" id="slide-arrow-next" onClick={Caro}></button>
                <div className="slides-container" id="slides-container">
                    <div className="slide">
                        <img className="imgLiCaro" src={slide1} alt="autometal"></img>
                        <img className="imgLiCaro" src={slide2} alt="fashion"></img>
                        <img className="imgLiCaro" src={slide3} alt="faros"></img>
                        <img className="imgLiCaro" src={slide4} alt="faros2"></img>
                        <img className="imgLiCaro" src={slide5} alt="fenix"></img>
                    </div>

                    <div className="slide"><img className="imgLiCaro" src={slide6} alt="xyz"></img></div>
                    <div className="slide"><img className="imgLiCaro" src={slide7} alt="madHead"></img></div>
                </div>
            </div>
        </div>
    )
}
export default CaroSlider;