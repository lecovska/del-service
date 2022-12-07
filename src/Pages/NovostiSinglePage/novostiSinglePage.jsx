import React from "react";
import "./novostiSinglePage.css"
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";

function novostiSinglePage() {

    return (
        <div className="novostiSinglePage">
            <Header />

            <div className="image">
                <div className="greeting">
                    <span className="main-title">Flex, nov akurirska sluzba koja stedi Vase vreme</span>
                    <button>Pocetna - Flex kurirska sluzba</button>
                </div>
            </div>
<div className="wrapper">
    <div className="single-div">
            <h2>Naslov</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deserunt accusantium facere minima voluptas possimus dicta sint inventore soluta adipisci recusandae temporibus et, consectetur laboriosam quasi ducimus nihil ab in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate asperiores neque dignissimos fugiat deleniti praesentium aliquam soluta modi rem maxime voluptatibus, consequuntur laboriosam facilis laudantium error numquam vitae consectetur!</p>
            <div className="novosti-img"> slika</div>
            </div>
            <div className="single-div">
            <h2>Naslov</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deserunt accusantium facere minima voluptas possimus dicta sint inventore soluta adipisci recusandae temporibus et, consectetur laboriosam quasi ducimus nihil ab in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate asperiores neque dignissimos fugiat deleniti praesentium aliquam soluta modi rem maxime voluptatibus, consequuntur laboriosam facilis laudantium error numquam vitae consectetur!</p>
            <div className="novosti-img"> slika</div>
            </div>
            <div className="single-div">
            <h3>Naslov</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deserunt accusantium facere minima voluptas possimus dicta sint inventore soluta adipisci recusandae temporibus et, consectetur laboriosam quasi ducimus nihil ab in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate asperiores neque dignissimos fugiat deleniti praesentium aliquam soluta modi rem maxime voluptatibus, consequuntur laboriosam facilis laudantium error numquam vitae consectetur!</p>
            </div>
            <div className="single-div">
            <h3>Naslov</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deserunt accusantium facere minima voluptas possimus dicta sint inventore soluta adipisci recusandae temporibus et, consectetur laboriosam quasi ducimus nihil ab in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate asperiores neque dignissimos fugiat deleniti praesentium aliquam soluta modi rem maxime voluptatibus, consequuntur laboriosam facilis laudantium error numquam vitae consectetur!</p>
            </div>
            </div>
            <Footer />
        </div>
    )
}
export default novostiSinglePage;