import React from "react";
import "./reviewCard.css";


function Caro() {
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.getElementById("slide");
    //const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");

    console.log(typeof nextButton);


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
    const slide = document.getElementById("slide");
    const prevButton = document.getElementById("slide-arrow-prev");
    //const nextButton = document.getElementById("slide-arrow-next");



    prevButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
    });

}



function ReviewCard() {
    return (
        <div className="review">
            <div className="slider-wrapper">
                <button type="button" className="slide-arrow" id="slide-arrow-prev" onClick={Caroo} ><i className="arrow left"></i></button>
                <button type="button" className="slide-arrow" id="slide-arrow-next" onClick={Caro}><i className="arrow right"></i></button>
                <div className="slides-container" id="slides-container">
                    <div id="slide">
                        <div className="singleCard">
                            <div className="photo"></div>
                            <div className="photoWrapper">
                                <span className="imePrezime">Predrag Vujicic</span>
                                <p className="reviewText">Flex je savršenstvo! Nemam reči, nasmejano biće, brzo i efikasno. Svaka čast za kurira i kompaniju.</p>
                            </div>
                        </div>
                        <div className="singleCard">
                            <div className="photo"></div>
                            <div className="photoWrapper">
                                <span className="imePrezime">Predrag Vujicic</span>
                                <p className="reviewText">Prvi put sa njima da imam isporuku, skroz korektno i tačno i nisu kao ostali kad nazovu, neljubazni.</p>
                            </div>
                        </div>
                        <div className="singleCard">
                            <div className="photo"></div>
                            <div className="photoWrapper">
                                <span className="imePrezime">Predrag Vujicic</span>
                                <p className="reviewText">Prvi put sa njima da imam isporuku, skroz korektno i tačno i nisu kao ostali kad nazovu, neljubazni.</p>
                            </div>
                        </div>
                    </div>

                    <div id="slide">
                        <div className="singleCard">
                            <div className="photo"></div>
                            <div className="photoWrapper">
                                <span className="imePrezime">Predrag Vujicic</span>
                                <p className="reviewText">Prvi put sa njima da imam isporuku, skroz korektno i tačno i nisu kao ostali kad nazovu, neljubazni.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ReviewCard;