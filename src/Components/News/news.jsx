import React from "react";
import "./news.css";

function News() {
    return (
        <div className="news">

<h2>Novosti</h2>

            <div className="news-img">
                <div className="pic-of-news"></div>
                <div className="pic-of-news"></div>
                <div className="pic-of-news"></div>
            </div>

            <div className="news-text">

                <div className="text">
                    <h3>Naslov</h3>
                    <p> neki tamo text</p>
                    <a href="negde">neki link</a>
                </div>

                <div className="text">
                    <h3>Naslov</h3>
                    <p> neki tamo text</p>
                    <a href="negde">neki link</a>
                </div>

                <div className="text">
                    <h3>Naslov</h3>
                    <p> neki tamo text</p>
                    <a href="negde">neki link</a>
                </div>

            </div>

        </div>
    )
}

export default News;