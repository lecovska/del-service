import React from "react";
import "./tableDanasZaDanas.css";

function TableDanasZaDanas(){
    return(
        <div className="danasZaSutra">
<div className="mainTitle">
    <h1 className="cenovnik-h1">CENOVNIK - DANAS ZA DANAS</h1>
</div>
<table>
    <tr>
        <th>MASA POSILJKE KG</th>
        <th>CENA BEZ PDV-a RSD</th>
        <th>PDV RSD</th>
        <th>CENA SA PDV RSD</th>
    </tr>
    <tr>
        <td>do 0.5 kg</td>
        <td>500,00 RSD</td>
        <td>100,00 RSD</td>
        <td>600,00 RSD</td>
    </tr>

    <tr>
        <td>od 0,51 do 1kg</td>
        <td>516,67 RSD</td>
        <td>103,33 RSD</td>
        <td>620,00 RSD</td>
    </tr>

    <tr>
        <td>od 1,01kg do 2kg</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>od 2,01kg do 5kg</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>

    <tr>
        <td>od 5,01kg do 10kg</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>od 10,01kg do 15kg</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>od 15,01kg do 20kg</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>od 20,01kg do 30kg</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>od 30,01kg do 50kg</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>preko 50kg</td>
        <td></td>
        <td>svaki kilogram preko 50kg se naplacuje 50,00 rsd</td>
        <td></td>
    </tr>
</table>
        </div>
    )
}
export default TableDanasZaDanas;