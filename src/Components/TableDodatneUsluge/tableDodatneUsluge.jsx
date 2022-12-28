import React from "react";
import "./tableDodatneUsluge.css";

function TableDodatneUsluge(){
    return(
        <div className="dodatneUsluge">
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
        <td>SMS izveštaj</td>
        <td>12,50 RSD</td>
        <td>2,50 RSD</td>
        <td>15,00 RSD</td>
    </tr>

    <tr>
        <td>Potvrda uručenja pošiljke</td>
        <td>100,00 RSD</td>
        <td>20,00 RSD</td>
        <td>120,00 RSD</td>
    </tr>

    <tr>
        <td>Lično uručenje</td>
        <td>100,00 RSD</td>
        <td>20,00 RSD</td>
        <td>120,00 RSD</td>
    </tr>
    <tr>
        <td>Vraćanje povratne dokumentacije/otpremnice</td>
        <td>100,00 RSD</td>
        <td>20,00 RSD</td>
        <td>120,00 RSD</td>
    </tr>

    <tr>
        <td>Plaćeni odgovor</td>
        <td>166,67 RSD</td>
        <td>33,33 RSD</td>
        <td>200,00 RSD</td>
    </tr>
  
    
  
    </table>
    <p className="p-dodatneUsluge">Za vrednosne pošiljke na cenu usluge utvrđenu po masi pošiljke ili na poštarinu za određenu vrstu vanstandardne/specijalizovane pošiljke, dodaje se 1,1% od naznačenog iznosa vrednosti, a minimalno 90,00 RSD sa PDV-om.</p>
	<p className="p-dodatneUsluge">Za otkupne pošiljke na cenu usluge utvrđenu po masi pošiljke ili na poštarinu za određenu vrstu vanstandardne/specijalizovane pošiljke, dodaje se 1,2% od naznačenog iznosa otkupnine, a minimalno 120,00RSD sa PDV-om.</p>
	<p className="p-dodatneUsluge">Ležarina po danu se naplaćuje 25,00 RSD sa PDV-om.</p>
        </div>
    )
}
export default TableDodatneUsluge;