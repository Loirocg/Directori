var NOM;
var EDAT;
var dies;

function missatge(){
	NOM = document.getElementById("nom").value;
	EDAT = document.getElementById("edat").value;
	dies = EDAT*365;
	alert("El teu nom és "+ NOM +" i has viscut "+ dies +" dies.");
}