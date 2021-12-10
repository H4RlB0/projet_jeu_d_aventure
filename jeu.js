let form = document.getElementById('validation');
form.addEventListener('click', personnage);

function personnage(){
	let radios=document.getElementsByName('perso');
	let character;
			for (var i=0; i<radios.length;i++){
				if (radios[i].checked){
					character=radios[i].value;
				}				
			}
	console.log(character)
	document.getElementById('choixperso').style.display = "None";
	afficherTextes(character);
	let a = document.getElementById('valider');
	a.addEventListener('click', valid);
	let b = document.getElementById('revenir');
	b.addEventListener('click', reven);
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

let c = document.getElementById('1b');
c.addEventListener('click', penetrer);

function penetrer(){
	document.getElementById('PorteDonjon').style.display = "None";
	document.getElementById('EntreeDonjon').style.display = "Block";
}

let d = document.getElementById('1a')
d.addEventListener('click', shame)

function shame(){
	document.getElementById('PorteDonjon').style.display = "None"
	document.getElementById('honte').style.display = "Block"
}

let e = document.getElementById('menup')
e.addEventListener('click', menup)

function menup(){
	document.getElementById('honte').style.display = "None";
	document.getElementById('choixperso').style.display = "Block"
}

