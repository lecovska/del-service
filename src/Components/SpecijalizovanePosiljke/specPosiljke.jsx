import React from "react";
import "./specPosiljke.css";

function SpecijalizovanePosiljke(){
    return(
        <div className="danasZaSutra">
<div className="mainTitle">
    <h1 className="cenovnik-h1">CENOVNIK - DODATNE USLUGE</h1>
</div>
<table>
    <tr>
        <th>MASA POŠILJKE KG</th>
        <th>CENA BEZ PDV-a RSD</th>
        <th>PDV RSD</th>
        <th>CENA SA PDV RSD</th>
    </tr>
    <tr>
        <td>Bicikl</td>
        <td>1.383,33 RSD</td>
        <td>276,67 RSD</td>
        <td>1.660,00 RSD</td>
    </tr>

    <tr>
        <td>Televizor do 55 inch</td>
        <td>725,00 RSD</td>
        <td>145,00 RSD</td>
        <td>870,00 RSD</td>
    </tr>

    <tr>
        <td>Guma putnicka</td>
        <td>333,33 RSD</td>
        <td>66,67 RSD</td>
        <td>400,00 RSD</td>
    </tr>
    <tr>
        <td>Guma poluteretna</td>
        <td>641,67 RSD</td>
        <td>128,33 RSD</td>
        <td>770,00 RSD</td>
    </tr>
    <tr>
        <td>Guma teretna</td>
        <td>1.325,00 RSD</td>
        <td>265,00 RSD</td>
        <td>1.590,00 RSD</td>
    </tr>
    <tr>
        <td>Guma putnička sa felnom</td>
        <td>425,00 RSD</td>
        <td>85,00 RSD</td>
        <td>510,00 RSD</td>
    </tr>
    <tr>
        <td>Guma poluteretna sa felnom</td>
        <td>866,67 RSD</td>
        <td>173,33 RSD</td>
        <td>1.040,00 RSD</td>
    </tr>
    <tr>
        <td>Guma teretna sa felnom</td>
        <td>1.516,67 RSD</td>
        <td>303,33 RSD</td>
        <td>1.820,00 RSD</td>
    </tr>

    <tr>
        <td>Traktorska guma</td>
        <td>1.116,67 RSD</td>
        <td>223,33 RSD</td>
        <td>1.340,00 RSD</td>
    </tr>
    <tr>
        <td>Traktorska guma sa felnom</td>
        <td>1.466,67 RSD</td>
        <td>293,33 RSD</td>
        <td>1.760,00 RSD</td>
    </tr>
    <tr>
        <td>Menjač manji</td>
        <td>1.291,67 RSD</td>
        <td>258,33 RSD</td>
        <td>1.550,00 RSD</td>
    </tr>
    <tr>
        <td>Menječ automatski</td>
        <td>4.200,00 RSD</td>
        <td>840,00 RSD</td>
        <td>5.040,00 RSD</td>
    </tr>
    <tr>
        <td>Auto motor</td>
        <td>4.225,00 RSD</td>
        <td>845,00 RSD</td>
        <td>5.070,00 RSD</td>
    </tr>
    </table>
    <p className="p-dodatneUsluge">Vanstandardne/specijalizovane pošiljke se uručuju isključivo uslugom danas za sutra</p>
        </div>
    )
}
export default SpecijalizovanePosiljke;