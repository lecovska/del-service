import React from "react";
import "./uslugee.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import homeIcon from "../../Images/homeIcon.png";
import Acc from "../../Components/Accordion/accordion";

// import { Accordion } from "react-accordion-collapsible/lib";
// import Collapsible from "react-collapsible";

// function col() {
//     var coll = document.getElementsByClassName("collapsible");
//     var i;

//     for (i = 0; i <= coll.length; i++) {
//         coll[i].addEventListener("click", function () {
//             this.classList.toggle("active");
//             var content = this.nextElementSibling;
//             if (content.style.display === "block") {
//                 content.style.display = "none";

//             } else {
//                 content.style.display = "block";
//             }

//         })
//     }
// }

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

function Uslugee() {
    return (
        <div className="uslugee">
            <Header />
            <div className="image-uslugee">

                <div className="greeting">
                    <span className="main-title">Kurirska dostava</span>
                    <a href="/"><img id="homeIcon" src={homeIcon} alt="homeIcon"></img> Početna - Flex kurirska služba</a>
                </div>
            </div>

            <div className="uslugeMenu">
                <Acc />
                {/* <div className="dropdown">
                    <button onClick={myFunction} className="dropbtn">Dropdown</button>
                    <div id="myDropdown" className="dropdown-content">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div> */}
            </div>
           
            <Footer />

        </div>
    )
}

export default Uslugee;