var i = 1;
function canvi(){
	if(i == 4)
	{
		document.getElementById("imatge").src = "js/img/MAR.jpg";
		i = 1;
		return;
	}
	if(i == 1)
	{
		document.getElementById("imatge").src = "js/img/MUNTANYA.jpg";
		i = 2;
		return;
	}
	if(i == 2)
	{
		document.getElementById("imatge").src = "js/img/CAMP.jpg";
		i = 3;
		return;
	}
	if(i == 3)
	{
		document.getElementById("imatge").src = "js/img/CIUTAT.jpg";
		i = 4;
		return;
	}	
}