import React from "react";
import "./NovostiMainPage.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";

function NovostiMainPage() {
    return (
        <div className="novostiMainPage">

            <Header />
            <div className="image">
                <div className="greeting">
                    <span className="main-title">Flex, nov akurirska sluzba koja stedi Vase vreme</span>
                    <button>Pocetna - Flex kurirska sluzba</button>
                </div>
            </div>

            <div className="divWrapper">


                <div className="singleDiv">
                    <div className="single-img">slika</div>
                    <h4>Flex, nova kurirrska sluzba</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio magnam repudiandae eum doloribus, minus ut fuga porro corporis nostrum distinctio fugit exercitationem officiis, unde repellendus aut, veritatis perspiciatis nihil quisquam!</p>
                    <a href="nesto ">Saznaj vise</a>
                </div>
                <div className="singleDiv">
                    <div className="single-img">slika</div>
                    <h4>Sta je preporucena posiljka</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio magnam repudiandae eum doloribus, minus ut fuga porro corporis nostrum distinctio fugit exercitationem officiis, unde repellendus aut, veritatis perspiciatis nihil quisquam!</p>
                    <a href="nesto">Saznaj vise</a>
                </div>
                <div className="singleDiv">
                    <div className="single-img">slika</div>
                    <h4>Kako se salje pismo</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio magnam repudiandae eum doloribus, minus ut fuga porro corporis nostrum distinctio fugit exercitationem officiis, unde repellendus aut, veritatis perspiciatis nihil quisquam!</p>
                    <a href="nesto">Saznaj vise</a>
                </div>

                <div className="singleDiv">
                    <div className="single-img">slika</div>
                    <h4>Apliciraj ya posao kurira</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio magnam repudiandae eum doloribus, minus ut fuga porro corporis nostrum distinctio fugit exercitationem officiis, unde repellendus aut, veritatis perspiciatis nihil quisquam!</p>
                    <a href="nesto">Saznaj vise</a>
                    </div>
                
                    
                </div>
                <Footer />

            </div>

       
    )
}

export default NovostiMainPage;