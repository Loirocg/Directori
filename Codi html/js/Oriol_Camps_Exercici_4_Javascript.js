alert("Soy el primer Javascript");		//Primer missatge emergent que mostra un text per la comanda alert()
var subject, Subject;		//Definicio de dues variables semblants pero que s'interpreten com a diferents per la "s"
subject = "Java";
Subject = "Maths";		//Es guarda dos texts en cada variable. S'interpreta que les variables són tipus string
document.getElementById("demo").innerHTML = subject;		//Al element amb ID "demo" se li assignarà el contingut de la variable "subject"
document.write("Esto sale en la propia página web");		//Es mostra un missatge per pantalla a través de la comanda .write()
confirm("¿Está seguro de que quiere hacer esto?");		//Missatge emergent que mostra un text i dos botons per realitzar una elecció. En aquest cas no es guarda el resultat de l'elecció de l'usuari
var missatge = ("<javascript> \n Hola món! \n Què fàcil és incloure 'cometes simples' \n i \"cometes dobles\"");
alert(missatge);		//Últim missatge que mostra un text per una finestra emergent. A diferència del exercici anterior, el missatge emergent és el contingut d'una variable anomenada "missatge"