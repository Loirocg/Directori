//function multimplesisuma(){
	var modul;
	var sumatori = 0;
	document.write("Els valors multiples de 23 son els seguents: <br/>");
	for(var comptador = 1; comptador<=1000; comptador++)
	{
		modul = comptador%23;
		if(modul == 0)
		{
			sumatori = sumatori+comptador;
			document.write(comptador+"<br/>");
		}
	}
	document.write("Per ultim, el sumatori de tots els multiples mostrats es: "+ sumatori +".");
//}