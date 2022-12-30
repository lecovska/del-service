import React from "react";
import "./carousselCom.css";
import slide1 from "../../Images/AUTO METAL GROUP DOO.png";
import slide2 from "../../Images/ELYOT FASHION.png";
import slide3 from "../../Images/FAROS LUMEN.png";
import slide4 from "../../Images/FAROS ONLINE SHOP.png";
import slide5 from "../../Images/FENIKS PROMO.png";
import slide6 from "../../Images/XYZ COMMUNICATIONS1111111.jpg";
import slide7 from "../../Images/MAD HEAD GAMES.png";
// import arrowIcon from "../../Images/arrowIcon.png";


function Caro() {
    const slidesContainer2 = document.getElementById("slides-container2");
    const slide2 = document.getElementById("slide2");
    //const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton2 = document.getElementById("slide-arrow-next2");

    console.log(typeof nextButton);


    if (nextButton2) {
        nextButton2.addEventListener("click", () => {
            const slideWidth2 = slide2.clientWidth;
         slidesContainer2.scrollLeft += slideWidth2;
           
        });
    }
}
// prevButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft -= slideWidth;
// });



function Caroo() {
    const slidesContainer2 = document.getElementById("slides-container2");
    const slide2 = document.getElementById("slide2");
    const prevButton2 = document.getElementById("slide-arrow-prev2");
    //const nextButton = document.getElementById("slide-arrow-next");



    prevButton2.addEventListener("click", () => {
        const slideWidth2 = slide2.clientWidth;
        slidesContainer2.scrollLeft -= slideWidth2;
    });

}


function CaroSlider() {
    return (
        <div className="caroSlider2">
            <div className="slider-wrapper2">
                <button type="button" className="slide-arrow2" id="slide-arrow-prev2" onClick={Caroo} ><i className="arrow left"></i></button>
                <button type="button" className="slide-arrow2" id="slide-arrow-next2" onClick={Caro}><i className="arrow right"></i></button>
                <div className="slides-container2" id="slides-container2">
                    <div id="slide2">
                        <img className="imgLiCaro" src={slide1} alt="autometal"></img>
                        <img className="imgLiCaro" src={slide2} alt="fashion"></img>
                        <img className="imgLiCaro" src={slide3} alt="faros"></img>
                        <img className="imgLiCaro" src={slide4} alt="faros2"></img>
                        <img className="imgLiCaro" src={slide5} alt="fenix"></img>
                       
                    </div>

                    <div id="slide2"><img className="imgLiCaro" src={slide6} alt="xyz"></img>
                    <img className="imgLiCaro" src={slide7} alt="madHead"></img>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default CaroSlider;