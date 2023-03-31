import React from "react";
import "./tableDodatneUsluge.css";

function TableDodatneUsluge(){
    return(
        <div className="dodatneUsluge">
<div className="mainTitle">
    <h1 className="cenovnik-h1">DODATNE I DOPUNSKE USLUGE</h1>
</div>
<table>
    <tr>
        <th>MASA POŠILJKE KG</th>
        <th>CENA BEZ PDV-a RSD</th>
        <th>PDV RSD</th>
        <th>CENA SA PDV RSD</th>
    </tr>
    <tr>
        <td>SMS izveštaj</td>
        <td>12,50 RSD</td>
        <td>2,50 RSD</td>
        <td>15,00 RSD</td>
    </tr>

    <tr>
        <td>Potvrda o uručenju pošiljke/povratnica</td>
        <td>150,00 RSD</td>
        <td>30,00 RSD</td>
        <td>180,00 RSD</td>
    </tr>

    <tr>
        <td>Lično uručenje</td>
        <td>150,00 RSD</td>
        <td>30,00 RSD</td>
        <td>180,00 RSD</td>
    </tr>
    <tr>
        <td>Vraćanje povratne dokumentacije/otpremnice</td>
        <td>150,00 RSD</td>
        <td>30,00 RSD</td>
        <td>180,00 RSD</td>
    </tr>

    <tr>
        <td>Plaćeni odgovor</td>
        <td>166,67 RSD</td>
        <td>33,33 RSD</td>
        <td>200,00 RSD</td>
    </tr>
  
    
  
    </table>
    <p className="p-dodatneUsluge">Za vrednosne pošiljke na cenu usluge utvrđenu po masi pošiljke ili na poštarinu za određenu vrstu vanstandardne/specijalizovane pošiljke, dodaje se 1,5% od naznačenog iznosa vrednosti, a minimalno 100,00 RSD sa PDV-om.</p>
	<p className="p-dodatneUsluge">Vraćanje otkupnog iznosa na adresu pošiljaoca se naplaćuje 1,5% od navedenog iznosa, a najmanje 180,00 RSD sa PDV-om. </p>
    <p className="p-dodatneUsluge">Uplata otkupnog iznosa na tekući račun korisnika se naplaćuje 1,5% od naznačenog iznosa otkupa, a minimum 70,00 RSD sa PDV-om</p>
	<p className="p-dodatneUsluge">Ležarina po danu se naplaćuje 25,00 RSD sa PDV-om.</p>
        </div>
    )
}
export default TableDodatneUsluge;