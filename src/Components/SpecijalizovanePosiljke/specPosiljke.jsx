import React from "react";
import "./specPosiljke.css";

function SpecijalizovanePosiljke(){
    return(
        <div className="danasZaSutra">
<div className="mainTitle">
    <h1>CENOVNIK - DODATNE USLUGE</h1>
</div>
<table>
    <tr>
        <th>MASA POSILJKE KG</th>
        <th>CENA BEZ PDV-a RSD</th>
        <th>PDV RSD</th>
        <th>CENA SA PDV RSD</th>
    </tr>
    <tr>
        <td>Bicikl</td>
        <td>500,00 RSD</td>
        <td>100,00 RSD</td>
        <td>600,00 RSD</td>
    </tr>

    <tr>
        <td>Televizor</td>
        <td>516,67 RSD</td>
        <td>103,33 RSD</td>
        <td>620,00 RSD</td>
    </tr>

    <tr>
        <td>Guma putnicka</td>
        <td>/</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Guma poluteretna</td>
        <td>/</td>
        <td>/</td>
        <td>/</td>
    </tr>

    <tr>
        <td>Traktorska guma</td>
        <td>/</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Menjac manji</td>
        <td>/</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Auto motor</td>
        <td>/</td>
        <td>/</td>
        <td>/</td>
    </tr>
    </table>
   
        </div>
    )
}
export default SpecijalizovanePosiljke;