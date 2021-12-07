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
}

function afficherTextes(character){
	let classe = document.createElement('p');
	classe.textContent = "Vous avez choisi la classe "+ character;
    document.body.appendChild(classe);
}
