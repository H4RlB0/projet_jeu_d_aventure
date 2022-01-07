
function menup(){
	for (var i=1; i<22 ; i++){
	document.getElementById('etape'+ i).style.display = "None";
	}
	for (var i=1; i<24 ; i++){
	document.getElementById('etapemort'+ i).style.display = "None";
	}
	for (var i=1; i<30 ; i++){
	document.getElementById('etapeannonce'+ i).style.display = "None";
	}
	document.getElementById('choixperso').style.display ="Inline-block"
	if (document.getElementById('stats') != null){
		document.getElementById('stats').remove();
	}
	document.getElementById('mort').style.display="None";
}




let form = document.getElementById('validation');
form.addEventListener('click', personnage);

let character;

function personnage(){
	let radios=document.getElementsByName('perso');
			for (var i=0; i<radios.length;i++){
				if (radios[i].checked){
					character=radios[i].value;
			}}
	demarejeu();
}

let force;
let vitesse;
let vie;

function stats(character){
	if (character=='Barbare'){
		force=7;
		vie=30;
		vitesse=3;
	}
	else if (character=='Elfe'){
		force=5;
		vie=24;
		vitesse=4;
	}
	else if (character=='Voleur'){
		force=3;
		vie=20;
		vitesse=6;
	}
	else if (character=='Ogre'){
		force=8;
		vie=28;
		vitesse=1;
	}
	console.log(vie , force , vitesse)
}

function demarejeu(){
	menup()
	document.getElementById('etape1').style.display = "Block";
	document.getElementById('choixperso').style.display = "None";
	stats(character);
	affichestats(force, vitesse, vie);
}



function afficheetape(actualetape , newetape){
	affichestats(force, vitesse, vie)
	document.getElementById('etape' + actualetape).style.display= 'None'
	document.getElementById('etape' + newetape).style.display= 'Block'
}

function affichestats(force, vitesse, vie){
	if (document.getElementById('stats') != null){
		document.getElementById('stats').remove();
	}
	let stats = document.createElement('p');
	stats.textContent = "Vous avez "+ vie +" points de vie , une force de " + force + " et une vitesse de "+ vitesse;
	stats.class = "etape";
	stats.id = "stats";
	document.body.appendChild(stats);
}

let una = document.getElementById('1a')
una.addEventListener('click', menup)

let unb = document.getElementById('1b')
unb.addEventListener('click', ()=>{
	afficheetape(1,2);
})

let deuxa = document.getElementById('2a')
deuxa.addEventListener('click', ()=>{
	if (force >= 4){
		afficheetape(2,3);
	}
	else{
		
		afficheetape(2,'mort1');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
})

let mort = document.getElementById('mort')
mort.addEventListener('click', menup)

let deuxb = document.getElementById('2b')
deuxb.addEventListener('click',()=>{
	if (vitesse >= 3){
		afficheetape(2,3);
	}
	else{
		afficheetape(2, 'mort2');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
	
})

let troisa = document.getElementById('3a')
troisa.addEventListener('click', ()=>{
	if(vie > 12){		
		afficheetape(3, 'annonce1');}
	else{
		afficheetape(3, 'mort3');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
})

let okun = document.getElementById('ok1')
okun.addEventListener('click', ()=>{
	vie = vie - 12;
	afficheetape('annonce1', 4);
})


let troisb = document.getElementById('3b')
troisb.addEventListener('click', ()=>{
	if(vitesse >= 4){
		afficheetape(3, 4);
		}
	else{
		afficheetape(3, 'annonce2');
	}
})

let okdeux = document.getElementById('ok2')
okdeux.addEventListener('click', ()=>{
	vie = vie - 12;
	afficheetape('annonce2', 4);
})

let quatrea = document.getElementById('4a')
quatrea.addEventListener('click', ()=>{
	if(force >= 5){
		afficheetape(4, 5);}
	else{
		afficheetape(4, 'mort4');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
})

let quatreb = document.getElementById('4b')
quatreb.addEventListener('click', ()=>{
	if(vitesse >= 4){
		afficheetape(4, 5);}
	else{
		afficheetape(4, 'mort5');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
})

let cinqa = document.getElementById('5a')
cinqa.addEventListener('click', ()=>{
	afficheetape(5, 'annonce3')
})

let oktrois = document.getElementById('ok3')
oktrois.addEventListener('click', ()=>{
	force = force + 2
	afficheetape('annonce3', 6);
})

let cinqb = document.getElementById('5b')
cinqb.addEventListener('click', ()=>{
	afficheetape(5, 'annonce4')
})

let okquatre = document.getElementById('ok4')
okquatre.addEventListener('click', ()=>{
	vie = vie + 4
	afficheetape('annonce4', 6);
})

let cinqc = document.getElementById('5c')
cinqc.addEventListener('click', ()=>{
	afficheetape(5, 'annonce5')
})

let okcinq = document.getElementById('ok5')
okcinq.addEventListener('click', ()=>{
	force = force + 4
	if (vitesse >= 2){
	vitesse = vitesse - 2}
	else{
		vitesse = 0
	}
	afficheetape('annonce5', 6);
})

let sixa = document.getElementById('6a')
sixa.addEventListener('click', ()=>{
	if(vitesse>= 4){
	afficheetape(6, 7);
	}
	else{
		afficheetape(6, 'mort6');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
})

let sixb = document.getElementById('6b')
sixb.addEventListener('click', ()=>{
	if((vie > 5) && (force > 5)){
		afficheetape(6, 'annonce6');
	}
	else if(vie<5){
		afficheetape(6, 'mort7');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
	else{
		afficheetape(6, 'mort8');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
})

let oksix = document.getElementById('ok6')
oksix.addEventListener('click', ()=>{
	vie = vie - 5
	afficheetape('annonce6', 7);
})

let septa = document.getElementById('7a')
septa.addEventListener('click', ()=>{
	afficheetape(7,8)
})

let septb = document.getElementById('7b')
septb.addEventListener('click', ()=>{
	afficheetape(7,8)
})

let huita = document.getElementById('8a')
huita.addEventListener('click', ()=>{
	afficheetape(8, 'annonce7')
})

let oksept = document.getElementById('ok7')
oksept.addEventListener('click', ()=>{
	force = force + 3
	afficheetape('annonce7', 9);
})

let huitb = document.getElementById('8b')
huitb.addEventListener('click', ()=>{
	afficheetape(8, 'annonce8')
})

let okhuit = document.getElementById('ok8')
okhuit.addEventListener('click', ()=>{
	vie = vie + 4
	afficheetape('annonce8', 9);
})

let huitc = document.getElementById('8c')
huitc.addEventListener('click', ()=>{
	if(vie <= 4){
		afficheetape(8,'mort9')
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
	else{
	afficheetape(8, 'annonce9')}
})

let okneuf = document.getElementById('ok9')
okneuf.addEventListener('click', ()=>{
	vie = vie - 4
	afficheetape('annonce9', 9);
})

let huitd = document.getElementById('8d')
huitd.addEventListener('click', ()=>{
	afficheetape(8,9)
})

let neuf = document.getElementById('9')
neuf.addEventListener('click',()=>{
	if(vitesse >= 5){
		afficheetape(9,'annonce10')
	}
	else if (vie > 5 ){
		afficheetape(9,'annonce11')
	}
	else{
		afficheetape(9, 'mort10')
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}	
})

let okdix = document.getElementById('ok10')
okdix.addEventListener('click', ()=>{
	afficheetape('annonce10', 10);
})

let okonze = document.getElementById('ok11')
okonze.addEventListener('click', ()=>{
	vie = vie - 5
	afficheetape('annonce11', 10);
})

let dixa = document.getElementById('10a')
dixa.addEventListener('click',()=>{
	if((vitesse < 3) && vie > 10){
		afficheetape(10,'annonce12');
	}
	else if(vitesse >=3){
		afficheetape(10,11);
	}
	else if(vie < 10){
		afficheetape(10,'mort11');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
})

let okdouze = document.getElementById('ok12')
okdouze.addEventListener('click',()=>{
	afficheetape('annonce12', 13)
})

let dixb = document.getElementById('10b')
dixb.addEventListener('click',()=>{
	if(vie <= 10){
		afficheetape(10, 'mort12');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
	else if((vie > 10) && (force >= 5)){
		afficheetape(10, 'annonce14');
	}
	else if(force < 5){
		afficheetape(10, 'mort13');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
})

let okquatorze = document.getElementById('ok14')
okquatorze.addEventListener('click',()=>{
	vie = vie - 10
	afficheetape('annonce14', 13)
})

let onzea = document.getElementById('11a')
onzea.addEventListener('click',()=>{
	afficheetape(11,12)
})

let douze = document.getElementById('12')
douze.addEventListener('click',()=>{
	afficheetape(12,'annonce13')
})

let oktreize = document.getElementById('ok13')
oktreize.addEventListener('click',()=>{
	let fée = Math.floor(Math.random() * (6 - 1 +1)) + 1;
	console.log(fée)
	if(fée + force > 8){
		afficheetape('annonce13', 'annonce15');
	}
	else{
		afficheetape('annonce13', 'mort14');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
})

let okquinze = document.getElementById('ok15')
okquinze.addEventListener('click',()=>{
	afficheetape('annonce15', 13);
})

let treizea = document.getElementById('13a')
.addEventListener('click', ()=>{
	afficheetape(13,'annonce16');
})

let okseize = document.getElementById('ok16')
okseize.addEventListener('click',()=>{
	vitesse = vitesse + 2;
	afficheetape('annonce16', 14);
})

let treizeb = document.getElementById('13b')
treizeb.addEventListener('click', ()=>{
	afficheetape(13,'annonce17');
})

let okdixsept = document.getElementById('ok17')
okdixsept.addEventListener('click',()=>{
	vie = vie + 6;
	afficheetape('annonce17', 14);
})

let treizec = document.getElementById('13c')
treizec.addEventListener('click', ()=>{
	afficheetape(13, 14);
})

let quatorzea = document.getElementById('14a')
quatorzea.addEventListener('click', ()=>{
	if (vitesse >= 5){
		afficheetape(14, 'annonce19');
	}
	else if(vie > 4){
		afficheetape(14, 'annonce20');
	}
	else{
		afficheetape(14, 'mort15')
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
})

let okdixneuf = document.getElementById('ok19')
okdixneuf.addEventListener('click',()=>{
	afficheetape('annonce19',15);
})

let okvingt = document.getElementById('ok20')
okvingt.addEventListener('click',()=>{
	vie = vie - 4
	afficheetape('annonce20',15);
})

let quatorzeb = document.getElementById('14b')
quatorzeb.addEventListener('click',()=>{
	afficheetape(14,'annonce18');
})

let okdixhuit = document.getElementById('ok18')
okdixhuit.addEventListener('click',()=>{
	afficheetape('annonce18',15);
})

let quinzea = document.getElementById('15a')
quinzea.addEventListener('click',()=>{
	afficheetape(15,'annonce21');
})

let okvingtetun = document.getElementById('ok21')
okvingtetun.addEventListener('click',()=>{
	afficheetape('annonce21',16);
})

let quinzeb = document.getElementById('15b')
quinzeb.addEventListener('click',()=>{
	if (force >= 7){
		afficheetape(15,16);
	}
	else{
		afficheetape(16,'mort16');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
	
})


let quinzec = document.getElementById('15c')
quinzec.addEventListener('click',()=>{
	if (vitesse >= 3){
		afficheetape(15,16);
	}
	else{
		afficheetape(15,'mort17');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
	
})


let quinzed = document.getElementById('15d')
quinzed.addEventListener('click',()=>{
	afficheetape(15,'annonce22');
})

let okvingtetdeux = document.getElementById('ok22')
okvingtetdeux.addEventListener('click',()=>{
	afficheetape('annonce22',16);
})

let seize = document.getElementById('16')
seize.addEventListener('click',()=>{
	if(character == 'Ogre'){
		afficheetape(16,'annonce23')
	}
	else if(character == 'Barbare'){
		afficheetape(16,'annonce24')
	}
	else if(character == 'Elfe'){
		afficheetape(16,'annonce25')
	}
	else{
		afficheetape(16,'annonce26')
	}
})

let okvingttrois = document.getElementById('ok23')
okvingttrois.addEventListener('click',()=>{
	force = force + 4;
	vie = vie + 9;
	afficheetape('annonce23',17);
})

let okvingtquatre = document.getElementById('ok24')
okvingtquatre.addEventListener('click',()=>{
	force = force + 4;
	vitesse = vitesse + 6;
	afficheetape('annonce24',17);
})

let okvingtcinq = document.getElementById('ok25')
okvingtcinq.addEventListener('click',()=>{
	force = force + 6;
	vie = vie + 4;
	afficheetape('annonce25',17);
})

let okvingtsix = document.getElementById('ok26')
okvingtsix.addEventListener('click',()=>{
	force = force + 6;
	vie = vie + 4;
	afficheetape('annonce26',17);
})

let dixsept = document.getElementById('17')
dixsept.addEventListener('click',()=>{
	afficheetape(17,18);
})

let dixhuita = document.getElementById ('18a')
dixhuita.addEventListener('click',()=>{
	afficheetape(18,19);
})

let dixhuitb = document.getElementById ('18b')
dixhuitb.addEventListener('click',()=>{
	if(vitesse>=4){
		afficheetape(18,19);
	}
	else{
		afficheetape(18,'mort18');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
})

let dixneufa = document.getElementById('19a')
dixneufa.addEventListener('click',()=>{
	if(vitesse >= 8){
		afficheetape(19,20)
	}
	else{
		afficheetape(19,'mort19')
	}
})

let dixneufb = document.getElementById('19b')
dixneufb.addEventListener('click',()=>{
	if(force >= 9){
		afficheetape(19,20);
	}
	else if(vie <= 8){
		afficheetape(19,'mort20');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
	else{
		afficheetape(19,'annonce27');
	}
})

let okvingtsept = document.getElementById('ok27')
okvingtsept.addEventListener('click',()=>{
	vie = vie - 8;
	afficheetape('annonce27',20);
})

let dixneufc = document.getElementById('19c')
dixneufc.addEventListener('click',()=>{
	if(force >= 6){
		afficheetape(19,20);
	}
	else{
		afficheetape(19,'mort20');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
})

let vingta = document.getElementById('20a')
vingta.addEventListener('click',()=>{
	if(force >= 9){
		afficheetape(20,21);
	}
	else if(vie <= 4){
		afficheetape(20,'mort21');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
	else{
		afficheetape(20,'annonce28');
	}
})

let okvingthuit = document.getElementById('ok28')
okvingthuit.addEventListener('click',()=>{
	vie = vie - 4;
	afficheetape('annonce28',21);
})

let vingtb = document.getElementById('20b')
vingtb.addEventListener('click',()=>{
	if(vitesse >= 9){
		afficheetape(20,21);
	}
	else{
		afficheetape(20,'mort22');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
	
})

let vingtc = document.getElementById('20c')
vingtc.addEventListener('click',()=>{
	if(vitesse >= 8){
		afficheetape(20,21);
	}
	else if(vie <= 10){
		afficheetape(20,'mort23');
		document.getElementById('mort').style.display="Block";
		document.getElementById('stats').remove();
	}
	else{
		afficheetape(20,'annonce29');
	}
})

let okvingtneuf = document.getElementById('ok29')
okvingtneuf.addEventListener('click',()=>{
	vie = vie - 10;
	afficheetape('annonce29',21);
})

let vingtetun = document.getElementById('21')
vingtetun.addEventListener('click',demarejeu)



menup()