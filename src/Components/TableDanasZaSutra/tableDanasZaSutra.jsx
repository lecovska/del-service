import React from "react";
import "./tableDanasZaSutra.css";

function TableDanasZaSutra(){
    return(
        <div className="danasZaSutra">
<div className="mainTitle">
    <h1 className="cenovnik-h1">CENOVNIK - DANAS ZA SUTRA</h1>
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
        <td>291,67 RSD</td>
        <td>58,33 RSD</td>
        <td>350,00 RSD</td>
    </tr>

    <tr>
        <td>od 0,51 do 1kg</td>
        <td>341,67 RSD</td>
        <td>68,33 RSD</td>
        <td>410,00 RSD</td>
    </tr>

    <tr>
        <td>od 1,01kg do 2kg</td>
        <td>375,00 RSD</td>
        <td>75,00 RSD</td>
        <td>450,00 RSD</td>
    </tr>
    <tr>
        <td>od 2,01kg do 5kg</td>
        <td>483,33 RSD</td>
        <td>96,67 RSD</td>
        <td>580,00 RSD</td>
    </tr>

    <tr>
        <td>od 5,01kg do 10kg</td>
        <td>616,67 RSD</td>
        <td>123,33 RSD</td>
        <td>740,00 RSD</td>
    </tr>
    <tr>
        <td>od 10,01kg do 15kg</td>
        <td>808,33 RSD</td>
        <td>161,67 RSD</td>
        <td>970,00 RSD</td>
    </tr>
    <tr>
        <td>od 15,01kg do 20kg</td>
        <td>850,00 RSD</td>
        <td>170,00 RSD</td>
        <td>1.020,00 RSD</td>
    </tr>
    <tr>
        <td>od 20,01kg do 30kg</td>
        <td>1.008,33 RSD</td>
        <td>201,67 RSD</td>
        <td>1.210,00 RSD</td>
    </tr>
    <tr>
        <td>od 30,01kg do 50kg</td>
        <td>1.300,00 RSD</td>
        <td>260,00 RSD</td>
        <td>1.560,00 RSD</td>
    </tr>
    {/* <tr>
        <td>preko 50kg</td>
       
        <td colSpan="3">Za pošiljke koje premašuju masu 50kg, svaki sledeći kilogram se naplaćuje 40,00RSD sa PDV-om/1kg</td>
        
    </tr> */}
</table>
<p className="p-dodatneUsluge">Za pošiljke koje premašuju masu 50kg, svaki sledeći kilogram se naplaćuje 40,00RSD sa PDV-om/1kg</p>
        </div>
    )
}
export default TableDanasZaSutra;