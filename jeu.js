let form = document.getElementById('validation');
form.addEventListener('click', personnage);

document.getElementById('PorteDonjon').style.display = "None";
document.getElementById('EntreeDonjon1').style.display = "None";
document.getElementById('EntreeDonjon2').style.display = "None";
document.getElementById('honte').style.display = "None";
document.getElementById('mort1').style.display = "None";
document.getElementById('menup').style.display = "None";
document.getElementById('mort2').style.display = "None";
document.getElementById('reveil').style.display = "None";

let character;

function personnage(){
	let radios=document.getElementsByName('perso');
			for (var i=0; i<radios.length;i++){
				if (radios[i].checked){
					character=radios[i].value;
				}				
			}
	console.log(character)
	document.getElementById('choixperso').style.display = "None";
	afficherTextes(character);
	let afr = document.getElementById('valider');
	afr.addEventListener('click', valid);
	let bfr = document.getElementById('revenir');
	bfr.addEventListener('click', reven);
}

function afficherTextes(character){
	let classe = document.createElement('p');
	classe.textContent = "Vous avez choisi la classe "+ character;
	classe.id = "classe"
    document.body.appendChild(classe);
	let confirme = document.createElement('button');
	confirme.textContent = "valider";
	confirme.id = "valider" ;
	document.body.appendChild(confirme);
	let revenir = document.createElement('button');
	revenir.textContent = "Revenir en arrière";
	revenir.id = "revenir";
	document.body.appendChild(revenir);
}


function valid(){
	document.getElementById('PorteDonjon').style.display = "Block";
	document.getElementById('classe').remove();
	document.getElementById('revenir').remove();
	document.getElementById('valider').remove();
}

function reven(){
	document.getElementById('classe').remove();
	document.getElementById('revenir').remove();
	document.getElementById('valider').remove();
	document.getElementById('choixperso').style.display = "Block";
}

let cfr = document.getElementById('1b');
cfr.addEventListener('click', penetrer);

function penetrer(){
	document.getElementById('PorteDonjon').style.display = "None";
	document.getElementById('EntreeDonjon1').style.display = "Block";
}

let dfr = document.getElementById('1a')
dfr.addEventListener('click', shame)

function shame(){
	document.getElementById('PorteDonjon').style.display = "None";
	document.getElementById('honte').style.display = "Block";
	document.getElementById('menup').style.display = "Block";
}

let efr = document.getElementById('menup')
efr.addEventListener('click', menup)

function menup(){
	document.getElementById('PorteDonjon').style.display = "None";
document.getElementById('EntreeDonjon1').style.display = "None";
document.getElementById('EntreeDonjon2').style.display = "None";
document.getElementById('honte').style.display = "None";
document.getElementById('mort1').style.display = "None";
document.getElementById('menup').style.display = "None";
document.getElementById('mort2').style.display = "None";
document.getElementById('reveil').style.display = "None";
	document.getElementById('choixperso').style.display = "Block";
}

let ffr = document.getElementById('2a')
ffr.addEventListener('click', mort1)

function mort1(){
	if (character == "Voleur"){
		document.getElementById('EntreeDonjon1').style.display = "None";
		document.getElementById('mort1').style.display = "Block";
		document.getElementById('menup').style.display = "Block";}
	else {
		document.getElementById('EntreeDonjon1').style.display = "None";
		document.getElementById('EntreeDonjon2').style.display = "Block";
	}
	
	
}
let gfr = document.getElementById('2b')
gfr.addEventListener('click', discret)

function discret(){
	if (character == 'Barbare' || character == 'Ogre'){
		document.getElementById('reveil').style.display = "Block"
		document.getElementById('EntreeDonjon1').style.display = "None";
		document.getElementById('EntreeDonjon2').style.display = "Block";
	}
	else {if (character == 'Elfe'){
			document.getElementById('EntreeDonjon1').style.display = "None";
			document.getElementById('mort2').style.display = "Block";
			document.getElementById('menup').style.display = "Block";}
		else{
		document.getElementById('EntreeDonjon1').style.display = "None";
		document.getElementById('EntreeDonjon2').style.display = "Block";}
		}
	}





