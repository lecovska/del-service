import React from "react";
import "./hamburger.css";
import { useState } from "react";
import { Link } from "react-router-dom";


    

function Hamburger() {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    return (
   
       
            <div>
                <nav>
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                    </div>
                </nav>
    
                <div className={menu_class}>
                <Link className="link-a-header" to="../../Pages/HomePage">Početna</Link>
                <Link className="link-a-header" to="../../Pages/About">O nama</Link>
                <Link className="link-a-header" to="../../Pages/Uslugee">Usluge</Link>
                <Link className="link-a-header" to="../../Pages/Zakazi">Zakaži kurira</Link>
                <Link className="link-a-header" to="../../Pages/Kalkulator">Kalkulator cena</Link>
                <Link className="link-a-header" to="../../Pages/CenovnikPage">Cenovnik</Link>
                <Link className="link-a-header" to="../../Pages/Kontakt">Kontakt</Link>
                </div>
            </div>
        )
    
}
export default Hamburger;