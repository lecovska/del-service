import React from "react";
import "./tableDodatneUsluge.css";

function TableDodatneUsluge(){
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
        <td>SMS izvestaj</td>
        <td>500,00 RSD</td>
        <td>100,00 RSD</td>
        <td>600,00 RSD</td>
    </tr>

    <tr>
        <td>Potvrda urucenja posiljke</td>
        <td>516,67 RSD</td>
        <td>103,33 RSD</td>
        <td>620,00 RSD</td>
    </tr>

    <tr>
        <td>Licno</td>
        <td>/</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Potpisivanje dokumentacije</td>
        <td>/</td>
        <td>/</td>
        <td>/</td>
    </tr>

    <tr>
        <td>Placeni odgovor</td>
        <td>/</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Lezarina po danu</td>
        <td>/</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Otkupnina</td>
        <td>/</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Osiguranje vrednosti sadrzaja posiljke</td>
        <td>/</td>
        <td>/</td>
        <td>/</td>
    </tr>
    </table>
    <p>Minimalna cena otkupa je 120,00 rsd, a za vrednosnu posiljku 90 rsd.</p>
        </div>
    )
}
export default TableDodatneUsluge;