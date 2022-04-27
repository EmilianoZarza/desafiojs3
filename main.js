let amigos  = ["Nadia","Marcos","Juan","Laureano"];

	document.write("Mis amigos son "+ " " + amigos[1] + " " + " y " + " " +  amigos[2]);
	let enemigos = ["Pedro","Mario","Luis"];

	document.write("<br>");
	document.write("Pero" + " " + enemigos[1] + "," + " " + enemigos[2] + "y" + " " +enemigos[0] +" "+ "no son mis amigos.");

	document.write("<br>");
	document.write("Mis amigos son" +" "+ amigos.length +" "+ "y los quiero muchisimo.")

	amigos[amigos.length]="Antonella";

    document.write("<br>");
	document.write("Pero ultimamente" +" "+ amigos[4]+" "+ "me cae muy bien, así que mis amigos ahora son" +" "+ amigos.length + "." )
