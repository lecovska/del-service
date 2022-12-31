import React from "react";
import "./news.css";
// import picOfNews1 from "../../Images/Flex-kurirska-sluzba16.jpg";
// import picOfNews2 from "../../Images/Flex-kurirska-sluzba14.jpg";
// import picOfNews3 from "../../Images/Flex-kurirska-sluzba11.jpg";

function CaroNews() {
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



function CarooNews() {
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.getElementById("slide");
    const prevButton = document.getElementById("slide-arrow-prev");
    //const nextButton = document.getElementById("slide-arrow-next");



    prevButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
    });

}






function News() {
    return (

        <div className="newsSlider">
            <h2 id="newsSpan">Saznajte prvi poslednje vesti</h2>
            <h1 id="NewsId">NOVOSTI</h1>
            <div className="slider-wrapperNews">
                <button type="button" className="slide-arrow" id="slide-arrow-prev" onClick={CarooNews} ><i className="arrow left"></i></button>
                <button type="button" className="slide-arrow" id="slide-arrow-next" onClick={CaroNews}><i className="arrow right"></i></button>
                <div className="slides-container" id="slides-container">
                    <div id="slide">
                        <div className="text">
                            <div className="pic-of-news1"></div>
                            <div className="text-wrapp">
                                <h3>Način plaćanja:</h3>
                                <p className="newsSliderP">Poštovani klijenti, ukoliko nemate gotovinu prilikom plaćanja Vaših pošiljaka, kod nas možete platiti i karticom. (VISA, MASTERCARD, DINACARD)</p>
                            </div>
                        </div>
                        <div className="text">
                            <div className="pic-of-news2"></div>
                            <div className="text-wrapp">
                                <h3>Praznična dostava</h3>
                                <p className="newsSliderP">Poštovani od 15.12.2022.godine do 15.01.2023.godine, očekijte Vašeg kurira u novogodišnjem izdanju.</p>
                            </div>
                        </div>
                        <div className="text">
                            <div className="pic-of-news3"></div>
                            <div className="text-wrapp">
                                <h3>Flex, nova kurirska služba, koja štedi Vaše
                                    vreme</h3>
                                <p className="newsSliderP">Poštovani klijenti, kurirska služba za vreme praznika neće raditi sledećim danima:
                                    Ponedeljak 02.01.2023.
                                    Utorak 03.01.2023.
                                    Petak 06.01.2023.</p>
                            </div>
                        </div>
                      
                    </div>
                    <div id="newsslide">
                    <div className="text">
                            <div className="pic-of-news3"></div>
                            <div className="text-wrapp">
                                <h3>Flex, nova kurirska služba, koja štedi Vaše
                                    vreme</h3>
                                <p className="newsSliderP">Poštovani, Vaš Flex kurir Vam želi srećne novogodišnje i božićne praznike.</p>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default News;