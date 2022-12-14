import React from "react";
import "./reviewCard.css";


function CaroReview() {
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



function CarooReview() {
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
            <div className="slider-wrapperReview">
                <button type="button" className="slide-arrowReview" id="slide-arrow-prev" onClick={CarooReview} ><i className="arrowReview leftReview"></i></button>
                <button type="button" className="slide-arrowReview" id="slide-arrow-next" onClick={CaroReview}><i className="arrowReview rightReview"></i></button>
                <div className="slides-container" id="slides-container">
                    <div id="slide">
                        <div className="singleCard">
                            <div className="photo1"></div>
                            <div className="photoWrapper">
                                <span className="imePrezime">Predrag Vujičić</span>
                                <p className="reviewText">Flex je savršenstvo! Nemam reči, nasmejano biće, brzo i efikasno. Svaka čast za kurira i kompaniju.</p>
                            </div>
                        </div>
                        <div className="singleCard">
                            <div className="photo2"></div>
                            <div className="photoWrapper">
                                <span className="imePrezime">Marija Milosavljević</span>
                                <p className="reviewText">Prvi put sa njima da imam isporuku, skroz korektno i tačno i nisu kao ostali kad nazovu, neljubazni.</p>
                            </div>
                        </div>
                      
                    </div>

                    <div id="slide">
                    <div className="singleCard">
                            <div className="photo3"></div>
                            <div className="photoWrapper">
                                <span className="imePrezime">ELYOT FASHION</span>
                                <p className="reviewText">Sve pohvale za kurirsku službu. Brza isporuka i ljubazan kurir.</p>
                            </div>
                        </div>
                        <div className="singleCard">
                            <div className="photo4"></div>
                            <div className="photoWrapper">
                                <span className="imePrezime">Kromrp - parking sistemi</span>
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