// import React from "react";
// import "./news.css";
// import picOfNews1 from "../../Images/Flex-kurirska-sluzba16.jpg";
// import picOfNews2 from "../../Images/Flex-kurirska-sluzba14.jpg";
// import picOfNews3 from "../../Images/Flex-kurirska-sluzba11.jpg";
// import NewsComponent from "../NewsComponent1/newsComponent1";

// function CaroNews() {
//     const slidesContainer = document.getElementById("slides-containerNews");
//     const slide = document.getElementById("slide");
//     //const prevButton = document.getElementById("slide-arrow-prev");
//     const nextButton = document.getElementById("slide-arrow-nextNews");

//     console.log(typeof nextButton);


//     if (nextButton) {
//         nextButton.addEventListener("click", () => {
//             const slideWidth = slide.clientWidth;
//             slidesContainer.scrollLeft += slideWidth;

//         });
//     }
// }
// // prevButton.addEventListener("click", () => {
// //   const slideWidth = slide.clientWidth;
// //   slidesContainer.scrollLeft -= slideWidth;
// // });



// function CarooNews() {
//     const slidesContainer = document.getElementById("slides-containerNews");
//     const slide = document.getElementById("slide");
//     const prevButton = document.getElementById("slide-arrow-prevNews");
//     //const nextButton = document.getElementById("slide-arrow-next");



//     prevButton.addEventListener("click", () => {
//         const slideWidth = slide.clientWidth;
//         slidesContainer.scrollLeft -= slideWidth;
//     });

// }

import React from "react";
import "./news.css";
// import partner1 from "../../Images/autosliderImg1.png";
// import partner2 from "../../Images/autosliderimg2.png";
import NewsComponent1 from "../NewsComponent1/newsComponent1";
import NewsComponent2 from "../NewsComponent2/newsComponent2";
import NewsComponent3 from "../NewsComponent3/newsComponent3";
import NewsComponent4 from "../NewsComponent4/newsComponent4";

const oneElementArray=[NewsComponent1];
const newsComp = [NewsComponent1, NewsComponent2];
const delay = 5000;

function News() {
    const [newsIndex, setNewsIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setNewsIndex((prevnewsIndex) =>
                    prevnewsIndex === newsComp.length - 1 ? 0 : prevnewsIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [newsIndex]);

    return (
        <div className="slideshowNews">
            <div className="slideshowSliderNews" style={{ transform: `translate3d(${-newsIndex * 100}%, 0, 0)` }}>
                {oneElementArray.map((e, newsIndex) => (
                    <div className="slideNews" key={newsIndex}  >
                        
                        <NewsComponent2/>
                        <NewsComponent1/>
                        <NewsComponent3/>
                        <NewsComponent4/>
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {newsComp.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${newsIndex === idx ? " active" : ""}`}
                        onClick={() => {
                            setNewsIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default News;




// function News() {
//     return (

//         <div className="newsSlider">
//             <h2 id="newsSpan">Saznajte prvi poslednje vesti</h2>
//             <h1 id="NewsId">NOVOSTI</h1>

/* <div className="slider-wrapperNews">
    <button type="button" className="slide-arrowNews" id="slide-arrow-prevNews" onClick={CarooNews} ><i className="arrowNews leftNews"></i></button>
    <button type="button" className="slide-arrowNews" id="slide-arrow-nextNews" onClick={CaroNews}><i className="arrowNews rightNews"></i></button>
    <div className="slides-containerNews" id="slides-containerNews">
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
                <div className="pic-of-news4"></div>
                <div className="text-wrapp">
                    <h3>Srećni praznici</h3>
                    <p className="newsSliderP">Poštovani, Vaš Flex kurir Vam želi srećne novogodišnje i božićne praznike.</p>
                </div>
            </div>
        </div>
    </div>
</div> */
//         </div>

//     )
// }

// export default News;