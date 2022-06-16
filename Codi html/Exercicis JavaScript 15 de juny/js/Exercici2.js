var i;

function capa(){
	i = true;
}

function nocapa(){
	i = false;
}

function colorVermell(){
	if(i == false)
		document.body.style.backgroundColor = 'red';
	if(i == true)
		document.getElementById("capa").style.backgroundColor = 'red';
}

function colorGroc(){
	if(i == false)
		document.body.style.backgroundColor = 'yellow';
	if(i == true)
		document.getElementById("capa").style.backgroundColor = 'yellow';
}

function colorCian(){
	if(i == false)
		document.body.style.backgroundColor = 'blue';
	if(i == true)
		document.getElementById("capa").style.backgroundColor = 'blue';
}

function colorVerd(){
	if(i == false)
		document.body.style.backgroundColor = 'green';
	if(i == true)
		document.getElementById("capa").style.backgroundColor = 'green';
}

function colorBlanc(){
	if(i == false)
		document.body.style.backgroundColor = 'white';
	if(i == true)
		document.getElementById("capa").style.backgroundColor = 'white';
}