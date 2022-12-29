import React from "react";
import "./tableDanasZaDanas.css";

function TableDanasZaDanas(){
    return(
        <div className="danasZaSutra">
<div className="mainTitle">
    <h1 className="cenovnik-h1">USLUGA DANAS ZA DANAS</h1>
</div>
<table>
    <tr>
        <th>MASA POŠILJKE KG</th>
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
        <td>od 0,5 do 1kg</td>
        <td>550,00 RSD</td>
        <td>110,00 RSD</td>
        <td>660,00 RSD</td>
    </tr>

    <tr>
        <td>od 1kg do 2kg</td>
        <td>583,33 RSD </td>
        <td>116,67 RSD</td>
        <td>700,00 RSD</td>
    </tr>
    <tr>
        <td>od 2kg do 5kg</td>
        <td>691,67 RSD</td>
        <td>138,33 RSD</td>
        <td>830,00 RSD</td>
    </tr>

    <tr>
        <td>od 5kg do 10kg</td>
        <td>825,00 RSD</td>
        <td>165,00 RSD</td>
        <td>990,00 RSD</td>
    </tr>
    <tr>
        <td>od 10kg do 15kg</td>
        <td>1.016,67 RSD</td>
        <td>203,33 RSD</td>
        <td>1.220,00 RSD</td>
    </tr>
    <tr>
        <td>od 15kg do 20kg</td>
        <td>1.058,33 RSD </td>
        <td>211,67 RSD </td>
        <td>1.270,00 RSD</td>
    </tr>
    <tr>
        <td>od 20kg do 30kg</td>
        <td>1.216,67 RSD</td>
        <td>243,33 RSD</td>
        <td>1.460,00 RSD</td>
    </tr>
    <tr>
        <td>od 30kg do 50kg</td>
        <td>1.508,33 RSD</td>
        <td>301,67 RSD</td>
        <td>1.810,00 RSD</td>
    </tr>
    {/* <tr>
        <td>preko 50kg</td>
        <td colspan="3">Za pošiljke koje premašuju masu 50kg, svaki sledeći kilogram se naplaćuje 40,00RSD sa PDV-om/1kg</td>
        
    </tr> */}
</table>
{/* <p className="p-dodatneUsluge">Za pošiljke koje premašuju masu 50kg, svaki sledeći kilogram se naplaćuje 40,00RSD sa PDV-om/1kg</p> */}
        </div>
    )
}
export default TableDanasZaDanas;