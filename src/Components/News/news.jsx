import React from "react";
import "./news.css";
// import picOfNews1 from "../../Images/Flex-kurirska-sluzba16.jpg";
// import picOfNews2 from "../../Images/Flex-kurirska-sluzba14.jpg";
// import picOfNews3 from "../../Images/Flex-kurirska-sluzba11.jpg";

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






function News() {
    return (

        <div className="newsSlider">
            <h2 id="newsSpan">Saznajte prvi poslednje vesti</h2>
            <h1 id="NewsId">NOVOSTI</h1>
            <div className="newsslider-wrapper">
                <button type="button" className="newsslide-arrow" id="newsslide-arrow-prev" onClick={Caroo} ><i className="newsarrow left"></i></button>
                <button type="button" className="newsslide-arrow" id="newsslide-arrow-next" onClick={Caro}><i className="newsarrow right"></i></button>
                <div className="newsslides-container" id="newsslides-container">
                    <div id="newsslide">
                        <div className="text">
                            <div className="pic-of-news1"></div>
                            <div className="text-wrapp">
                                <h3>Nacin placanja:</h3>
                                <p className="newsSliderP">Postovani klijenti, ukoliko nemate gotovinu prilikom placanja vasih posiljaka , Flex kurir Vam je omogućio placanje karticama.
                                    (VISA, MASTERCARD, DINACARD)</p>
                            </div>
                        </div>
                        <div className="text">
                            <div className="pic-of-news2"></div>
                            <div className="text-wrapp">
                                <h3>Nacin placanja:</h3>
                                <p className="newsSliderP">Postovani klijenti, ukoliko nemate gotovinu prilikom placanja vasih posiljaka , Flex kurir Vam je omogućio placanje karticama.
                                    (VISA, MASTERCARD, DINACARD)</p>
                            </div>
                        </div>
                        <div className="text">
                            <div className="pic-of-news3"></div>
                            <div className="text-wrapp">
                                <h3>Flex, nova kurirska služba, koja štedi Vaše
                                    vreme</h3>
                                <p className="newsSliderP">Postovani klijenti, ukoliko nemate gotovinu prilikom placanja vasih posiljaka , Flex kurir Vam je omogućio placanje karticama.
                                    (VISA, MASTERCARD, DINACARD)</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default News;