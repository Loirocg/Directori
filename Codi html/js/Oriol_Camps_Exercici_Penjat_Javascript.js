let paraula = ["BACTERIA","AILLADOR","ARENGADA","ARCANGEL","CABLEJAT","FAMILIAR","FARMACIA","GUANYOLS","MOLECULA","PISTOLAR","SUBESPAI"];

var aleat = Math.random() * (paraula.length);
aleat = Math.floor(aleat);

var paraulasecreta = paraula[aleat];

var endevinalla = ["_ _ _ _ _ _ _ _"];

document.getElementById("Paraulasecreta").innerHTML = endevinalla;

function joc(){
	var error;
	var lletra = paraulasecreta[0];
	var lletrarebuda = document.getElementsByName("lle")[0].value;
	lletrarebuda = lletrarebuda.toUpperCase();
	for(var i = 0 ; i<paraulasecreta.length ; i++)
	{
		lletra = paraulasecreta[i];
		if(lletrarebuda == lletra)
			endevinalla[i] = lletra;
		else
			error++;
	}
	
	document.getElementById("Paraulasecreta").innerHTML = endevinalla;
}