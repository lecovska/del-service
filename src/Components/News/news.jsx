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
                    <h3>Flex, nova kurirska služba, koja štedi Vaše vreme</h3>
                    <p>Nova kurirska služba. FLEX jer mi dostvaljamo brže od drugih. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur eligendi maiores nostrum eum corporis veniam? Autem assumenda, expedita alias odio quod ipsam nulla, facere ut placeat nam cupiditate veniam modi.</p>
                    <a href="negde">neki link</a>
                </div>

                <div className="text">
                    <h3>Šta je preporučena pošiljka</h3>
                    <p>Nova kurirska služba. FLEX jer mi dostvaljamo brže od drugih. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur eligendi maiores nostrum eum corporis veniam? Autem assumenda, expedita alias odio quod ipsam nulla, facere ut placeat nam cupiditate veniam modi.</p>
                    <a href="negde">neki link</a>
                </div>

                <div className="text">
                    <h3>Kako se šalje pismo</h3>
                    <p>Nova kurirska služba. FLEX jer mi dostvaljamo brže od drugih. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur eligendi maiores nostrum eum corporis veniam? Autem assumenda, expedita alias odio quod ipsam nulla, facere ut placeat nam cupiditate veniam modi.</p>
                    <a href="negde">neki link</a>
                </div>

            </div>

        </div>
    )
}

export default News;