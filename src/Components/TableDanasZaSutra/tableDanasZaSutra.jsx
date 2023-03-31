import React from "react";
import "./tableDanasZaSutra.css";

function TableDanasZaSutra(){
    return(
        <div className="danasZaSutra">
<div className="mainTitle">
    <h1 className="cenovnik-h1">USLUGA DANAS ZA SUTRA</h1>
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
        <td>283,33 RSD</td>
        <td>56,67 RSD</td>
        <td>340,00 RSD</td>
    </tr>

    <tr>
        <td>preko 0,5 do 2kg</td>
        <td>341,67 RSD</td>
        <td>68,33 RSD</td>
        <td>410,00 RSD</td>
    </tr>

    <tr>
        <td>preko 2kg do 5kg</td>
        <td>458,33 RSD</td>
        <td>91,67 RSD</td>
        <td>550,00 RSD</td>
    </tr>
 

    <tr>
        <td>preko 5kg do 10kg</td>
        <td>608,33 RSD</td>
        <td>121,67 RSD</td>
        <td>730,00 RSD</td>
    </tr>
    <tr>
        <td>preko 10kg do 15kg</td>
        <td>800,00 RSD</td>
        <td>160,00 RSD</td>
        <td>960,00 RSD</td>
    </tr>
    <tr>
        <td>preko 15kg do 20kg</td>
        <td>841,67 RSD</td>
        <td>168,33 RSD</td>
        <td>1.010,00 RSD</td>
    </tr>
    <tr>
        <td>preko 20kg do 30kg</td>
        <td>1.000,00 RSD</td>
        <td>200,00 RSD</td>
        <td>1.200,00 RSD</td>
    </tr>
    <tr>
        <td>preko 30kg do 50kg</td>
        <td>1.291,67 RSD</td>
        <td>258,33 RSD</td>
        <td>1.550,00 RSD</td>
    </tr>
    {/* <tr>
        <td>preko 50kg</td>
       Za otkupne pošiljke na cenu usluge utvrđenu po masi pošiljke ili na poštarinu za određenu vrstu vanstandardne/specijalizovane pošiljke, dodaje se 1,2% od naznačenog iznosa otkupnine, a minimalno 120,00RSD sa PDV-om.
        <td colSpan="3">Za pošiljke koje premašuju masu 50kg, svaki sledeći kilogram se naplaćuje 40,00RSD sa PDV-om/1kg</td>
        
    </tr> */}
</table>
<p className="p-dodatneUsluge">Za pošiljke koje premašuju masu 50kg, svaki sledeći kilogram se naplaćuje 40,00RSD sa PDV-om/1kg</p>
        </div>
    )
}
export default TableDanasZaSutra;