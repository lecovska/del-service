import React from "react";
import "./news.css";
import picOfNews1 from "../../Images/Flex-kurirska-sluzba16.jpg";
import picOfNews2 from "../../Images/Flex-kurirska-sluzba14.jpg";
import picOfNews3 from "../../Images/Flex-kurirska-sluzba11.jpg";

function News() {
    return (
        <div className="news">
<span id="newsSpan">Saznajte prvi poslednje vesti</span>
<h1 id="NewsId">Novosti</h1>

            <div className="news-img">
                <div className="pic-of-news"><img className="picForNews" src={picOfNews1} alt="pic"></img></div>
                <div className="pic-of-news"><img className="picForNews" src={picOfNews2} alt="pic"></img></div>
                <div className="pic-of-news"><img className="picForNews" src={picOfNews3} alt="pic"></img></div>
            </div>

            <div className="news-text">

                <div className="text">
                    <h3>Nacin placanja:</h3>
                    <p>Postovani klijenti, ukoliko nemate gotovinu prilikom placanja vasih posiljaka , Flex kurir Vam je omogućio placanje karticama.
 (VISA, MASTERCARD, DINACARD)</p>
                    
                </div>

                <div className="text">
                    <h3>Radno vreme za Novogodisnje i Bozicne praznike :</h3>
                    <p>Ponedeljak- 02.01.2023.godine-Neradni dan
Utorak -
03.01.2023. godine -Neradni da</p>
                    
                </div>

                <div className="text">
                    <h3>Flex, nova kurirska služba, koja štedi Vaše
vreme</h3>
                    <p>Nova kurirska služba. FLEX jer mi dostvaljamo brže od drugih. </p>
                    
                </div>

            </div>

        </div>
    )
}

export default News;