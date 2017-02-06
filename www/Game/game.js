var bulb = document.getElementById("bulbasaur");
var charm = document.getElementById("charmander");
var squir = document.getElementById("squirtle");
var ataque = document.getElementById("atacar");
var cont=1;
var pX=0,pY=0;
var aleatorio=parseInt(150*Math.random())+1;
console.log(aleatorio);


var seleccion=0;

bulb.onclick=function(){
	document.getElementById("eleccion").innerHTML='<img id="player" src="imagenes/Bulbasaur_icon.png"/>';
	document.getElementById("name").innerHTML='Bulbasaur';
	document.getElementById("atacar").innerHTML='Látigo Cepa';
	seleccion=1;
	document.getElementById("k1").innerHTML='<img id="b1" class="attack" src="imagenes/grass_atack.png"/>';
	document.getElementById("k2").innerHTML='<img id="b2" class="attack" src="imagenes/grass_atack.png"/>';
	document.getElementById("k3").innerHTML='<img id="b3" class="attack" src="imagenes/grass_atack.png"/>';
	document.getElementById("k4").innerHTML='<img id="b4" class="attack" src="imagenes/grass_atack.png"/>';
	document.getElementById("k5").innerHTML='<img id="b5" class="attack" src="imagenes/grass_atack.png"/>';
	document.getElementById("k6").innerHTML='<div id="enemy"><img src="imagenes/MissingNo_icon.png"/></div><img id="b6" class="attack" src="imagenes/grass_atack.png"/>';
	enemigo(aleatorio);
	document.getElementById("k7").innerHTML='<img id="b7" class="attack" src="imagenes/grass_atack.png"/>';
	document.getElementById("k8").innerHTML='<img id="b8" class="attack" src="imagenes/grass_atack.png"/>';
	document.getElementById("k9").innerHTML='<img id="b9" class="attack" src="imagenes/grass_atack.png"/>';
	document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/fire_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
	tipoEnemigo(aleatorio);
}
charm.onclick=function(){
	document.getElementById("eleccion").innerHTML='<img id="player" src="imagenes/Charmander_icon.png"/>';
	document.getElementById("atacar").innerHTML='Ascuas';
	seleccion=2;
	enemigo(aleatorio);
	tipoEnemigo(aleatorio);
}
squir.onclick=function(){
	document.getElementById("eleccion").innerHTML='<img id="player" src="imagenes/Squirtle_icon.png"/>';
	document.getElementById("name").innerHTML='Squirtle';
	document.getElementById("atacar").innerHTML='Pistola Agua';
	seleccion=3;
	document.getElementById("k1").innerHTML='<img id="b1" class="attack" src="imagenes/water_atack.png"/>';
	document.getElementById("k2").innerHTML='<img id="b2" class="attack" src="imagenes/water_atack.png"/>';
	document.getElementById("k3").innerHTML='<img id="b3" class="attack" src="imagenes/water_atack.png"/>';
	document.getElementById("k4").innerHTML='<img id="b4" class="attack" src="imagenes/water_atack.png"/>';
	document.getElementById("k5").innerHTML='<img id="b5" class="attack" src="imagenes/water_atack.png"/>';
	document.getElementById("k6").innerHTML='<div id="enemy"><img src="imagenes/MissingNo_icon.png"/></div><img id="b6" class="attack" src="imagenes/water_atack.png"/>';
	enemigo(aleatorio);
	document.getElementById("k7").innerHTML='<img id="b7" class="attack" src="imagenes/water_atack.png"/>';
	document.getElementById("k8").innerHTML='<img id="b8" class="attack" src="imagenes/water_atack.png"/>';
	document.getElementById("k9").innerHTML='<img id="b9" class="attack" src="imagenes/water_atack.png"/>';
	document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/normal_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
	tipoEnemigo(aleatorio);
}

function mover(e){
	pX=e.pageX;
	pY=e.pageY;
	charm.style.left=pX+"px";
	charm.style.top=pY+"px";
	//console.log("X: "+pX+" Y: "+pY);
	//console.log("Mover");
	cont=0;
}

function parar(e){
	charm.style.left=pX+"px";
	charm.style.top=pY+"px";
	//console.log("X: "+pX+" Y: "+pY);
	//console.log("Parado");
	cont=1;
}

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    console.log(data);
    e.target.appendChild(document.getElementById(data));
    equipo.style.display="none";
    eleccion.style.border="none";
    //enemy.style.display="block";
}



var boton=document.getElementById("start");
boton.onclick=function(){
	var batalla=document.getElementById("batalla");
	batalla.style.display="block";
	equipo.style.display="none";
	var b1=document.getElementById("b1");
	b1.style.display="none";
	var b2=document.getElementById("b2");
	b2.style.display="none";
	var b3=document.getElementById("b3");
	b3.style.display="none";
	var b4=document.getElementById("b4");
	b4.style.display="none";
	var b5=document.getElementById("b5");
	b5.style.display="none";
	var b6=document.getElementById("b6");
	b6.style.display="none";
	var b7=document.getElementById("b7");
	b7.style.display="none";
	var b8=document.getElementById("b8");
	b8.style.display="none";
	var b9=document.getElementById("b9");
	b9.style.display="none";
	var a1=document.getElementById("a1");
	a1.style.display="none";
	var a2=document.getElementById("a2");
	a2.style.display="none";
	var a3=document.getElementById("a3");
	a3.style.display="none";
	var a4=document.getElementById("a4");
	a4.style.display="none";
	var a5=document.getElementById("a5");
	a5.style.display="none";
	var a6=document.getElementById("a6");
	a6.style.display="none";
	var a7=document.getElementById("a7");
	a7.style.display="none";
	var a8=document.getElementById("a8");
	a8.style.display="none";
	var a9=document.getElementById("a9");
	a9.style.display="none";
}

var ataq=document.getElementById("atacar");
ataq.onclick = function atacar(){
	b1.style.display="block";
	b2.style.display="block";
	b3.style.display="block";
	b4.style.display="block";
	b5.style.display="block";
	b6.style.display="block";
	b7.style.display="block";
	b8.style.display="block";
	b9.style.display="block";
}



function enemigo(a){
	switch(a){
		case 1:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Bulbasaur_icon.png"/>';
			document.getElementById("ename").innerHTML='Bulbasaur';
			break;
		case 2:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Ivysaur_icon.png"/>';
			document.getElementById("ename").innerHTML='Ivysaur';
			break;
		case 3:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Venusaur_icon.png"/>';
			document.getElementById("ename").innerHTML='Venusaur';
			break;
		case 4:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Charmander_icon.png"/>';
			document.getElementById("ename").innerHTML='Charmander';
			break;
		case 5:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Charmeleon_icon.png"/>';
			document.getElementById("ename").innerHTML='Charmeleon';
			break;
		case 6:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Charizard_icon.png"/>';
			document.getElementById("ename").innerHTML='Charizard';
			break;
		case 7:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Squirtle_icon.png"/>';
			document.getElementById("ename").innerHTML='Squirtle';
			break;
		case 8:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Wartortle_icon.png"/>'
			document.getElementById("ename").innerHTML='Wartortle';
			break;
		case 9:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Blastoise_icon.png"/>';
			document.getElementById("ename").innerHTML='Blastoise';
			break;
		case 10:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Caterpie_icon.png"/>';
			document.getElementById("ename").innerHTML='Caterpie';
			break;
		case 11:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Metapod_icon.png"/>';
			document.getElementById("ename").innerHTML='Metapod';
			break;
		case 12:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Butterfree_icon.png"/>';
			document.getElementById("ename").innerHTML='Butterfree';
			break;
		case 13:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Weedle_icon.png"/>';
			document.getElementById("ename").innerHTML='Weedle';
			break;
		case 14:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Kakuna_icon.png"/>';
			document.getElementById("ename").innerHTML='Kakuna';
			break;
		case 15:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Beedrill_icon.png"/>';
			document.getElementById("ename").innerHTML='Beedrill';
			break;
		case 16:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Pidgey_icon.png"/>';
			document.getElementById("ename").innerHTML='Pidgey';
			break;
		case 17:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Pidgeotto_icon.png"/>';
			document.getElementById("ename").innerHTML='Pidgeotto';
			break;
		case 18:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Pidgeot_icon.png"/>';
			document.getElementById("ename").innerHTML='Pidgeot';
			break;
		case 19:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Rattata_icon.png"/>';
			document.getElementById("ename").innerHTML='Rattata';
			break;
		case 20:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Raticate_icon.png"/>';
			document.getElementById("ename").innerHTML='Raticate';
			break;
		case 21:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Spearow_icon.png"/>';
			document.getElementById("ename").innerHTML='Spearow';
			break;
		case 22:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Fearow_icon.png"/>';
			document.getElementById("ename").innerHTML='Fearow';
			break;
		case 23:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Ekans_icon.png"/>';
			document.getElementById("ename").innerHTML='Ekans';
			break;
		case 24:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Arbok_icon.png"/>';
			document.getElementById("ename").innerHTML='Arbok';
			break;
		case 25:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Pikachu_icon.png"/>';
			document.getElementById("ename").innerHTML='Pikachu';
			break;
		case 26:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Raichu_icon.png"/>';
			document.getElementById("ename").innerHTML='Raichu';
			break;
		case 27:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Sandshrew_icon.png"/>';
			document.getElementById("ename").innerHTML='Sandshrew';
			break;
		case 28:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Sandslash_icon.png"/>';
			document.getElementById("ename").innerHTML='Sandslash';
			break;
		case 29:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Nidoran♀_icon.png"/>';
			document.getElementById("ename").innerHTML='Nidoran♀';
			break;
		case 30:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Nidorina_icon.png"/>';
			document.getElementById("ename").innerHTML='Nidorina';
			break;
		case 31:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Nidoqueen_icon.png"/>';
			document.getElementById("ename").innerHTML='Nidoqueen';
			break;
		case 32:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Nidoran♂_icon.png"/>';
			document.getElementById("ename").innerHTML='Nidoran♂';
			break;
		case 33:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Nidorino_icon.png"/>';
			document.getElementById("ename").innerHTML='Nidorino';
			break;
		case 34:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Nidoking_icon.png"/>';
			document.getElementById("ename").innerHTML='Nidoking';
			break;
		case 35:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Clefairy_icon.png"/>';
			document.getElementById("ename").innerHTML='Clefairy';
			break;
		case 36:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Clefable_icon.png"/>';
			document.getElementById("ename").innerHTML='Clefable';
			break;
		case 37:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Vulpix_icon.png"/>';
			document.getElementById("ename").innerHTML='Vulpix';
			break;
		case 38:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Ninetales_icon.png"/>';
			document.getElementById("ename").innerHTML='Ninetales';
			break;
		case 39:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Jigglypuff_icon.png"/>';
			document.getElementById("ename").innerHTML='Jigglypuff';
			break;
		case 40:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Wigglytuff_icon.png"/>';
			document.getElementById("ename").innerHTML='Wigglytuff';
			break;
		case 41:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Zubat_icon.png"/>';
			document.getElementById("ename").innerHTML='Zubat';
			break;
		case 42:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Golbat_icon.png"/>';
			document.getElementById("ename").innerHTML='Golbat';
			break;
		case 43:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Oddish_icon.png"/>';
			document.getElementById("ename").innerHTML='Oddish';
			break;
		case 44:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Gloom_icon.png"/>';
			document.getElementById("ename").innerHTML='Gloom';
			break;
		case 45:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Vileplume_icon.png"/>';
			document.getElementById("ename").innerHTML='Vileplume';
			break;
		case 46:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Paras_icon.png"/>';
			document.getElementById("ename").innerHTML='Paras';
			break;
		case 47:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Parasect_icon.png"/>';
			document.getElementById("ename").innerHTML='Parasect';
			break;
		case 48:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Venonat_icon.png"/>';
			document.getElementById("ename").innerHTML='Venonat';
			break;
		case 49:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Venomoth_icon.png"/>';
			document.getElementById("ename").innerHTML='Venomoth';
			break;
		case 50:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Diglett_icon.png"/>';
			document.getElementById("ename").innerHTML='Diglett';
			break;
		case 51:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Dugtrio_icon.png"/>';
			document.getElementById("ename").innerHTML='Dugtrio';
			break;
		case 52:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Meowth_icon.png"/>';
			document.getElementById("ename").innerHTML='Meowth';
			break;
		case 53:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Persian_icon.png"/>';
			document.getElementById("ename").innerHTML='Persian';
			break;
		case 54:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Psyduck_icon.png"/>';
			document.getElementById("ename").innerHTML='Psyduck';
			break;
		case 55:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Golduck_icon.png"/>';
			document.getElementById("ename").innerHTML='Golduck';
			break;
		case 56:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Mankey_icon.png"/>';
			document.getElementById("ename").innerHTML='Mankey';
			break;
		case 57:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Primeape_icon.png"/>';
			document.getElementById("ename").innerHTML='Primeape';
			break;
		case 58:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Growlithe_icon.png"/>';
			document.getElementById("ename").innerHTML='Growlithe';
			break;
		case 59:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Arcanine_icon.png"/>';
			document.getElementById("ename").innerHTML='Arcanine';
			break;
		case 60:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Poliwag_icon.png"/>';
			document.getElementById("ename").innerHTML='Poliwag';
			break;
		case 61:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Poliwhirl_icon.png"/>';
			document.getElementById("ename").innerHTML='Poliwhirl';
			break;
		case 62:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Poliwrath_icon.png"/>';
			document.getElementById("ename").innerHTML='Poliwrath';
			break;
		case 63:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Abra_icon.png"/>';
			document.getElementById("ename").innerHTML='Abra';
			break;
		case 64:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Kadabra_icon.png"/>';
			document.getElementById("ename").innerHTML='Kadabra';
			break;
		case 65:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Alakazam_icon.png"/>';
			document.getElementById("ename").innerHTML='Alakazam';
			break;
		case 66:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Machop_icon.png"/>';
			document.getElementById("ename").innerHTML='Machop';
			break;
		case 67:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Machoke_icon.png"/>';
			document.getElementById("ename").innerHTML='Machoke';
			break;
		case 68:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Machamp_icon.png"/>';
			document.getElementById("ename").innerHTML='Machamp';
			break;
		case 69:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Bellsprout_icon.png"/>';
			document.getElementById("ename").innerHTML='Bellsprout';
			break;
		case 70:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Weepinbell_icon.png"/>';
			document.getElementById("ename").innerHTML='Weepinbell';
			break;
		case 71:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Victreebel_icon.png"/>';
			document.getElementById("ename").innerHTML='Victreebel';
			break;
		case 72:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Tentacool_icon.png"/>';
			document.getElementById("ename").innerHTML='Tentacool';
			break;
		case 73:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Tentacruel_icon.png"/>';
			document.getElementById("ename").innerHTML='Tentacruel';
			break;
		case 74:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Geodude_icon.png"/>';
			document.getElementById("ename").innerHTML='Geodude';
			break;
		case 75:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Graveler_icon.png"/>';
			document.getElementById("ename").innerHTML='Graveler';
			break;
		case 76:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Golem_icon.png"/>';
			document.getElementById("ename").innerHTML='Golem';
			break;
		case 77:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Ponyta_icon.png"/>';
			document.getElementById("ename").innerHTML='Ponyta';
			break;
		case 78:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Rapidash_icon.png"/>';
			document.getElementById("ename").innerHTML='Rapidash';
			break;
		case 79:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Slowpoke_icon.png"/>';
			document.getElementById("ename").innerHTML='Slowpoke';
			break;
		case 80:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Slowbro_icon.png"/>';
			document.getElementById("ename").innerHTML='Slowbro';
			break;
		case 81:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Magnemite_icon.png"/>';
			document.getElementById("ename").innerHTML='Magnemite';
			break;
		case 82:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Magneton_icon.png"/>';
			document.getElementById("ename").innerHTML='Magneton';
			break;
		case 83:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Farfetchd_icon.png"/>';
			document.getElementById("ename").innerHTML='Farfetch d';
			break;
		case 84:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Doduo_icon.png"/>';
			document.getElementById("ename").innerHTML='Doduo';
			break;
		case 85:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Dodrio_icon.png"/>';
			document.getElementById("ename").innerHTML='Dodrio';
			break;
		case 86:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Seel_icon.png"/>';
			document.getElementById("ename").innerHTML='Seel';
			break;
		case 87:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Dewgong_icon.png"/>';
			document.getElementById("ename").innerHTML='Dewgong';
			break;
		case 88:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Grimer_icon.png"/>';
			document.getElementById("ename").innerHTML='Grimer';
			break;
		case 89:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Muk_icon.png"/>';
			document.getElementById("ename").innerHTML='Muk';
			break;
		case 90:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Shellder_icon.png"/>';
			document.getElementById("ename").innerHTML='Shellder';
			break;
		case 91:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Cloyster_icon.png"/>';
			document.getElementById("ename").innerHTML='Cloyster';
			break;
		case 92:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Gastly_icon.png"/>';
			document.getElementById("ename").innerHTML='Gastly';
			break;
		case 93:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Haunter_icon.png"/>';
			document.getElementById("ename").innerHTML='Haunter';
			break;
		case 94:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Gengar_icon.png"/>';
			document.getElementById("ename").innerHTML='Gengar';
			break;
		case 95:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Onix_icon.png"/>';
			document.getElementById("ename").innerHTML='Onix';
			break;
		case 96:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Drowzee_icon.png"/>';
			document.getElementById("ename").innerHTML='Drowzee';
			break;
		case 97:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Hypno_icon.png"/>';
			document.getElementById("ename").innerHTML='Hypno';
			break;
		case 98:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Krabby_icon.png"/>';
			document.getElementById("ename").innerHTML='Krabby';
			break;
		case 99:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Kingler_icon.png"/>';
			document.getElementById("ename").innerHTML='Kingler';
			break;
		case 100:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Voltorb_icon.png"/>';
			document.getElementById("ename").innerHTML='Voltorb';
			break;
		case 101:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Electrode_icon.png"/>';
			document.getElementById("ename").innerHTML='Electrode';
			break;
		case 102:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Exeggcute_icon.png"/>';
			document.getElementById("ename").innerHTML='Exeggcute';
			break;
		case 103:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Exeggutor_icon.png"/>';
			document.getElementById("ename").innerHTML='Exeggutor';
			break;
		case 104:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Cubone_icon.png"/>';
			document.getElementById("ename").innerHTML='Cubone';
			break;
		case 105:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Marowak_icon.png"/>';
			document.getElementById("ename").innerHTML='Marowak';
			break;
		case 106:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Hitmonlee_icon.png"/>';
			document.getElementById("ename").innerHTML='Hitmonlee';
			break;
		case 107:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Hitmonchan_icon.png"/>';
			document.getElementById("ename").innerHTML='Hitmonchan';
			break;
		case 108:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Lickitung_icon.png"/>';
			document.getElementById("ename").innerHTML='Lickitung';
			break;
		case 109:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Koffing_icon.png"/>';
			document.getElementById("ename").innerHTML='Koffing';
			break;
		case 110:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Weezing_icon.png"/>';
			document.getElementById("ename").innerHTML='Weezing';
			break;
		case 111:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Rhyhorn_icon.png"/>';
			document.getElementById("ename").innerHTML='Rhyhorn';
			break;
		case 112:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Rhydon_icon.png"/>';
			document.getElementById("ename").innerHTML='Rhydon';
			break;
		case 113:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Chansey_icon.png"/>';
			document.getElementById("ename").innerHTML='Chansey';
			break;
		case 114:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Tangela_icon.png"/>';
			document.getElementById("ename").innerHTML='Tangela';
			break;
		case 115:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Kangaskhan_icon.png"/>';
			document.getElementById("ename").innerHTML='Kanghaskhan';
			break;
		case 116:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Horsea_icon.png"/>';
			document.getElementById("ename").innerHTML='Horsea';
			break;
		case 117:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Seadra_icon.png"/>';
			document.getElementById("ename").innerHTML='Seadra';
			break;
		case 118:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Goldeen_icon.png"/>';
			document.getElementById("ename").innerHTML='Goldeen';
			break;
		case 119:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Seaking_icon.png"/>';
			document.getElementById("ename").innerHTML='Seaking';
			break;
		case 120:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Staryu_icon.png"/>';
			document.getElementById("ename").innerHTML='Staryu';
			break;
		case 121:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Starmie_icon.png"/>';
			document.getElementById("ename").innerHTML='Starmie';
			break;
		case 122:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Mr._Mime_icon.png"/>';
			document.getElementById("ename").innerHTML='MR. Mime';
			break;
		case 123:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Scyther_icon.png"/>';
			document.getElementById("ename").innerHTML='Scyther';
			break;
		case 124:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Jynx_icon.png"/>';
			document.getElementById("ename").innerHTML='Jynx';
			break;
		case 125:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Electabuzz_icon.png"/>';
			document.getElementById("ename").innerHTML='Electabuzz';
			break;
		case 126:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Magmar_icon.png"/>';
			document.getElementById("ename").innerHTML='Magmar';
			break;
		case 127:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Pinsir_icon.png"/>';
			document.getElementById("ename").innerHTML='Pinsir';
			break;
		case 128:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Tauros_icon.png"/>';
			document.getElementById("ename").innerHTML='Tauros';
			break;
		case 129:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Magikarp_icon.png"/>';
			document.getElementById("ename").innerHTML='Magikarp';
			break;
		case 130:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Gyarados_icon.png"/>';
			document.getElementById("ename").innerHTML='Gyarados';
			break;
		case 131:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Lapras_icon.png"/>';
			document.getElementById("ename").innerHTML='Lapras';
			break;
		case 132:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Ditto_icon.png"/>';
			document.getElementById("ename").innerHTML='Ditto';
			break;
		case 133:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Eevee_icon.png"/>';
			document.getElementById("ename").innerHTML='Eevee';
			break;
		case 134:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Vaporeon_icon.png"/>';
			document.getElementById("ename").innerHTML='Vaporeon';
			break;
		case 135:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Jolteon_icon.png"/>';
			document.getElementById("ename").innerHTML='Jolteon';
			break;
		case 136:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Flareon_icon.png"/>';
			document.getElementById("ename").innerHTML='Flareon';
			break;
		case 137:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Porygon_icon.png"/>';
			document.getElementById("ename").innerHTML='Porygon';
			break;
		case 138:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Omanyte_icon.png"/>';
			document.getElementById("ename").innerHTML='Omanyte';
			break;
		case 139:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Omastar_icon.png"/>';
			document.getElementById("ename").innerHTML='Omastar';
			break;
		case 140:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Kabuto_icon.png"/>';
			document.getElementById("ename").innerHTML='Kabuto';
			break;
		case 141:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Kabutops_icon.png"/>';
			document.getElementById("ename").innerHTML='Kabutops';
			break;
		case 142:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Aerotactyl_icon.png"/>';
			document.getElementById("ename").innerHTML='Aerodactyl';
			break;
		case 143:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Snorlax_icon.png"/>';
			document.getElementById("ename").innerHTML='Snorlax';
			break;
		case 144:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Articuno_icon.png"/>';
			document.getElementById("ename").innerHTML='Articuno';
			break;
		case 145:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Zapdos_icon.png"/>';
			document.getElementById("ename").innerHTML='Zapdos';
			break;
		case 146:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Moltres_icon.png"/>';
			document.getElementById("ename").innerHTML='Moltres';
			break;
		case 147:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Dratini_icon.png"/>';
			document.getElementById("ename").innerHTML='Dratini';
			break;
		case 148:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Dragonair_icon.png"/>';
			document.getElementById("ename").innerHTML='Dragonair';
			break;
		case 149:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Dragonite_icon.png"/>';
			document.getElementById("ename").innerHTML='Dragonite';
			break;
		case 150:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Mewtwo_icon.png"/>';
			document.getElementById("ename").innerHTML='Mewtwo';
			break;
		case 151:
			document.getElementById("enemy").innerHTML='<img src="imagenes/Mew_icon.png"/>';
			document.getElementById("ename").innerHTML='Mew';
			break;
		default:
			document.getElementById("enemy").innerHTML='<img src="imagenes/MissingNo_icon.png"/>';
			document.getElementById("ename").innerHTML='MissingNo';
			break;
	}
	console.log(document.getElementById("enemy"));
}

function tipoEnemigo(a){
	console.log(a);
	switch(a){
		case 4:
		case 5:
		case 37:
		case 38:
		case 58:
		case 59:
		case 77:
		case 78:
		case 126:
		case 136:
		case 6:
		case 105:
		case 146:
			document.getElementById("c1").innerHTML='<img class="attack" src="imagenes/fire_atack.png"/>';
			document.getElementById("c2").innerHTML='<img class="attack" src="imagenes/fire_atack.png"/>';
			document.getElementById("c3").innerHTML='<img class="attack" src="imagenes/fire_atack.png"/>';
			if(seleccion==1){
				document.getElementById("c4").innerHTML='<img class="attack" src="imagenes/fire_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else if(seleccion==2){
				document.getElementById("c4").innerHTML='<img class="attack" src="imagenes/fire_atack.png"/><img id="player" src="imagenes/Charmander_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else{
				document.getElementById("c4").innerHTML='<img class="attack" src="imagenes/fire_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}
			document.getElementById("c5").innerHTML='<img class="attack" src="imagenes/fire_atack.png"/>';
			document.getElementById("c6").innerHTML='<img class="attack" src="imagenes/fire_atack.png"/>';
			document.getElementById("c7").innerHTML='<img class="attack" src="imagenes/fire_atack.png"/>';
			document.getElementById("c8").innerHTML='<img class="attack" src="imagenes/fire_atack.png"/>';
			document.getElementById("c9").innerHTML='<img class="attack" src="imagenes/fire_atack.png"/>';
			break;
		case 7:
		case 8:
		case 9:
		case 54:
		case 55:
		case 60:
		case 61:
		case 86:
		case 90:
		case 98:
		case 99:
		case 116:
		case 117:
		case 118:
		case 119:
		case 120:
		case 129:
		case 134:
		case 62:
		case 72:
		case 73:
		case 79:
		case 80:
		case 87:
		case 91:
		case 121:
		case 130:
		case 131:
			document.getElementById("c1").innerHTML='<img id="a1" class="attack" src="imagenes/water_atack.png"/>';
			document.getElementById("c2").innerHTML='<img id="a2" class="attack" src="imagenes/water_atack.png"/>';
			document.getElementById("c3").innerHTML='<img id="a3" class="attack" src="imagenes/water_atack.png"/>';
			if(seleccion==1){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/water_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else if(seleccion==2){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/water_atack.png"/><img id="player" src="imagenes/Charmander_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else{
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/water_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}
			document.getElementById("c5").innerHTML='<img id="a5" class="attack" src="imagenes/water_atack.png"/>';
			document.getElementById("c6").innerHTML='<img id="a6" class="attack" src="imagenes/water_atack.png"/>';
			document.getElementById("c7").innerHTML='<img id="a7" class="attack" src="imagenes/water_atack.png"/>';
			document.getElementById("c8").innerHTML='<img id="a8" class="attack" src="imagenes/water_atack.png"/>';
			document.getElementById("c9").innerHTML='<img id="a9" class="attack" src="imagenes/water_atack.png"/>';
			break;
		case 114:
		case 1:
		case 2:
		case 3:
		case 43:
		case 44:
		case 45:
		case 59:
		case 70:
		case 71:
		case 102:
		case 103:
			document.getElementById("c1").innerHTML='<img id="a1" class="attack" src="imagenes/grass_atack.png"/>';
			document.getElementById("c2").innerHTML='<img id="a2" class="attack" src="imagenes/grass_atack.png"/>';
			document.getElementById("c3").innerHTML='<img id="a3" class="attack" src="imagenes/grass_atack.png"/>';
			if(seleccion==1){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/grass_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else if(seleccion==2){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/grass_atack.png"/><img id="player" src="imagenes/Charmander_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else{
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/grass_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}
			document.getElementById("c5").innerHTML='<img id="a5" class="attack" src="imagenes/grass_atack.png"/>';
			document.getElementById("c6").innerHTML='<img id="a6" class="attack" src="imagenes/grass_atack.png"/>';
			document.getElementById("c7").innerHTML='<img id="a7" class="attack" src="imagenes/grass_atack.png"/>';
			document.getElementById("c8").innerHTML='<img id="a8" class="attack" src="imagenes/grass_atack.png"/>';
			document.getElementById("c9").innerHTML='<img id="a9" class="attack" src="imagenes/grass_atack.png"/>';
			break;
		case 10:
		case 11:
		case 127:
		case 12:
		case 13:
		case 14:
		case 15:
		case 46:
		case 47:
		case 48:
		case 49:
		case 123:
			document.getElementById("c1").innerHTML='<img id="a1" class="attack" src="imagenes/bug_atack.png"/>';
			document.getElementById("c2").innerHTML='<img id="a2" class="attack" src="imagenes/bug_atack.png"/>';
			document.getElementById("c3").innerHTML='<img id="a3" class="attack" src="imagenes/bug_atack.png"/>';
			if(seleccion==1){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/bug_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else if(seleccion==2){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/bug_atack.png"/><img id="player" src="imagenes/Charmander_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else{
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/bug_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}
			document.getElementById("c5").innerHTML='<img id="a5" class="attack" src="imagenes/bug_atack.png"/>';
			document.getElementById("c6").innerHTML='<img id="a6" class="attack" src="imagenes/bug_atack.png"/>';
			document.getElementById("c7").innerHTML='<img id="a7" class="attack" src="imagenes/bug_atack.png"/>';
			document.getElementById("c8").innerHTML='<img id="a8" class="attack" src="imagenes/bug_atack.png"/>';
			document.getElementById("c9").innerHTML='<img id="a9" class="attack" src="imagenes/bug_atack.png"/>';
			break;
		case 25:
		case 26:
		case 100:
		case 101:
		case 125:
		case 135:
		case 81:
		case 82:
		case 145:
			document.getElementById("c1").innerHTML='<img id="a1" class="attack" src="imagenes/electric_atack.png"/>';
			document.getElementById("c2").innerHTML='<img id="a2" class="attack" src="imagenes/electric_atack.png"/>';
			document.getElementById("c3").innerHTML='<img id="a3" class="attack" src="imagenes/electric_atack.png"/>';
			if(seleccion==1){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/electric_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else if(seleccion==2){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/electric_atack.png"/><img id="player" src="imagenes/Charmander_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else{
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/electric_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}
			document.getElementById("c5").innerHTML='<img id="a5" class="attack" src="imagenes/electric_atack.png"/>';
			document.getElementById("c6").innerHTML='<img id="a6" class="attack" src="imagenes/electric_atack.png"/>';
			document.getElementById("c7").innerHTML='<img id="a7" class="attack" src="imagenes/electric_atack.png"/>';
			document.getElementById("c8").innerHTML='<img id="a8" class="attack" src="imagenes/electric_atack.png"/>';
			document.getElementById("c9").innerHTML='<img id="a9" class="attack" src="imagenes/electric_atack.png"/>';
			break;
		case 147:
		case 148:
		case 149:
			document.getElementById("c1").innerHTML='<img id="a1" class="attack" src="imagenes/dragon_atack.png"/>';
			document.getElementById("c2").innerHTML='<img id="a2" class="attack" src="imagenes/dragon_atack.png"/>';
			document.getElementById("c3").innerHTML='<img id="a3" class="attack" src="imagenes/dragon_atack.png"/>';
			if(seleccion==1){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/dragon_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else if(seleccion==2){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/dragon_atack.png"/><img id="player" src="imagenes/Charmander_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else{
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/dragon_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}
			document.getElementById("c5").innerHTML='<img id="a5" class="attack" src="imagenes/dragon_atack.png"/>';
			document.getElementById("c6").innerHTML='<img id="a6" class="attack" src="imagenes/dragon_atack.png"/>';
			document.getElementById("c7").innerHTML='<img id="a7" class="attack" src="imagenes/dragon_atack.png"/>';
			document.getElementById("c8").innerHTML='<img id="a8" class="attack" src="imagenes/dragon_atack.png"/>';
			document.getElementById("c9").innerHTML='<img id="a9" class="attack" src="imagenes/dragon_atack.png"/>';
			break;
		case 92:
		case 93:
		case 94:
			document.getElementById("c1").innerHTML='<img id="a1" class="attack" src="imagenes/ghost_atack.png"/>';
			document.getElementById("c2").innerHTML='<img id="a2" class="attack" src="imagenes/ghost_atack.png"/>';
			document.getElementById("c3").innerHTML='<img id="a3" class="attack" src="imagenes/ghost_atack.png"/>';
			if(seleccion==1){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/ghost_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else if(seleccion==2){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/ghost_atack.png"/><img id="player" src="imagenes/Charmander_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else{
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/ghost_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}
			document.getElementById("c5").innerHTML='<img id="a5" class="attack" src="imagenes/ghost_atack.png"/>';
			document.getElementById("c6").innerHTML='<img id="a6" class="attack" src="imagenes/ghost_atack.png"/>';
			document.getElementById("c7").innerHTML='<img id="a7" class="attack" src="imagenes/ghost_atack.png"/>';
			document.getElementById("c8").innerHTML='<img id="a8" class="attack" src="imagenes/ghost_atack.png"/>';
			document.getElementById("c9").innerHTML='<img id="a9" class="attack" src="imagenes/ghost_atack.png"/>';
			break;
		case 35:
		case 36:
		case 94:
			document.getElementById("c1").innerHTML='<img id="a1" class="attack" src="imagenes/fairy_atack.png"/>';
			document.getElementById("c2").innerHTML='<img id="a2" class="attack" src="imagenes/fairy_atack.png"/>';
			document.getElementById("c3").innerHTML='<img id="a3" class="attack" src="imagenes/fairy_atack.png"/>';
			if(seleccion==1){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/fairy_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else if(seleccion==2){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/fairy_atack.png"/><img id="player" src="imagenes/Charmander_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else{
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/fairy_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}
			document.getElementById("c5").innerHTML='<img id="a5" class="attack" src="imagenes/fairy_atack.png"/>';
			document.getElementById("c6").innerHTML='<img id="a6" class="attack" src="imagenes/fairy_atack.png"/>';
			document.getElementById("c7").innerHTML='<img id="a7" class="attack" src="imagenes/fairy_atack.png"/>';
			document.getElementById("c8").innerHTML='<img id="a8" class="attack" src="imagenes/fairy_atack.png"/>';
			document.getElementById("c9").innerHTML='<img id="a9" class="attack" src="imagenes/fairy_atack.png"/>';
			break;
		case 124:
		case 144:
			document.getElementById("c1").innerHTML='<img id="a1" class="attack" src="imagenes/ice_atack.png"/>';
			document.getElementById("c2").innerHTML='<img id="a2" class="attack" src="imagenes/ice_atack.png"/>';
			document.getElementById("c3").innerHTML='<img id="a3" class="attack" src="imagenes/ice_atack.png"/>';
			if(seleccion==1){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/ice_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else if(seleccion==2){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/ice_atack.png"/><img id="player" src="imagenes/Charmander_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else{
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/ice_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}
			document.getElementById("c5").innerHTML='<img id="a5" class="attack" src="imagenes/ice_atack.png"/>';
			document.getElementById("c6").innerHTML='<img id="a6" class="attack" src="imagenes/ice_atack.png"/>';
			document.getElementById("c7").innerHTML='<img id="a7" class="attack" src="imagenes/ice_atack.png"/>';
			document.getElementById("c8").innerHTML='<img id="a8" class="attack" src="imagenes/ice_atack.png"/>';
			document.getElementById("c9").innerHTML='<img id="a9" class="attack" src="imagenes/ice_atack.png"/>';
			break;
		case 56:
		case 57:
		case 66:
		case 67:
		case 68:
		case 106:
		case 107:
			document.getElementById("c1").innerHTML='<img id="a1" class="attack" src="imagenes/fighting_atack.png"/>';
			document.getElementById("c2").innerHTML='<img id="a2" class="attack" src="imagenes/fighting_atack.png"/>';
			document.getElementById("c3").innerHTML='<img id="a3" class="attack" src="imagenes/fighting_atack.png"/>';
			if(seleccion==1){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/fighting_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else if(seleccion==2){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/fighting_atack.png"/><img id="player" src="imagenes/Charmander_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else{
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/fighting_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}
			document.getElementById("c5").innerHTML='<img id="a5" class="attack" src="imagenes/fighting_atack.png"/>';
			document.getElementById("c6").innerHTML='<img id="a6" class="attack" src="imagenes/fighting_atack.png"/>';
			document.getElementById("c7").innerHTML='<img id="a7" class="attack" src="imagenes/fighting_atack.png"/>';
			document.getElementById("c8").innerHTML='<img id="a8" class="attack" src="imagenes/fighting_atack.png"/>';
			document.getElementById("c9").innerHTML='<img id="a9" class="attack" src="imagenes/fighting_atack.png"/>';
			break;
		case 63:
		case 64:
		case 65:
		case 96:
		case 97:
		case 150:
		case 151:
		case 122:
			document.getElementById("c1").innerHTML='<img id="a1" class="attack" src="imagenes/psychic_atack.png"/>';
			document.getElementById("c2").innerHTML='<img id="a2" class="attack" src="imagenes/psychic_atack.png"/>';
			document.getElementById("c3").innerHTML='<img id="a3" class="attack" src="imagenes/psychic_atack.png"/>';
			if(seleccion==1){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/psychic_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else if(seleccion==2){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/psychic_atack.png"/><img id="player" src="imagenes/Charmander_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else{
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/psychic_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}
			document.getElementById("c5").innerHTML='<img id="a5" class="attack" src="imagenes/psychic_atack.png"/>';
			document.getElementById("c6").innerHTML='<img id="a6" class="attack" src="imagenes/psychic_atack.png"/>';
			document.getElementById("c7").innerHTML='<img id="a7" class="attack" src="imagenes/psychic_atack.png"/>';
			document.getElementById("c8").innerHTML='<img id="a8" class="attack" src="imagenes/psychic_atack.png"/>';
			document.getElementById("c9").innerHTML='<img id="a9" class="attack" src="imagenes/psychic_atack.png"/>';
			break;
		case 74:
		case 75:
		case 76:
		case 95:
		case 138:
		case 139:
		case 140:
		case 141:
		case 142:
			document.getElementById("c1").innerHTML='<img id="a1" class="attack" src="imagenes/rock_atack.png"/>';
			document.getElementById("c2").innerHTML='<img id="a2" class="attack" src="imagenes/rock_atack.png"/>';
			document.getElementById("c3").innerHTML='<img id="a3" class="attack" src="imagenes/rock_atack.png"/>';
			if(seleccion==1){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/rock_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else if(seleccion==2){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/rock_atack.png"/><img id="player" src="imagenes/Charmander_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else{
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/rock_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}
			document.getElementById("c5").innerHTML='<img id="a5" class="attack" src="imagenes/rock_atack.png"/>';
			document.getElementById("c6").innerHTML='<img id="a6" class="attack" src="imagenes/rock_atack.png"/>';
			document.getElementById("c7").innerHTML='<img id="a7" class="attack" src="imagenes/rock_atack.png"/>';
			document.getElementById("c8").innerHTML='<img id="a8" class="attack" src="imagenes/rock_atack.png"/>';
			document.getElementById("c9").innerHTML='<img id="a9" class="attack" src="imagenes/rock_atack.png"/>';
			break;
		case 27:
		case 28:
		case 50:
		case 51:
		case 104:
		case 105:
		case 111:
		case 112:
			document.getElementById("c1").innerHTML='<img id="a1" class="attack" src="imagenes/ground_atack.png"/>';
			document.getElementById("c2").innerHTML='<img id="a2" class="attack" src="imagenes/ground_atack.png"/>';
			document.getElementById("c3").innerHTML='<img id="a3" class="attack" src="imagenes/ground_atack.png"/>';
			if(seleccion==1){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/ground_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else if(seleccion==2){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/ground_atack.png"/><img id="player" src="imagenes/Charmander_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else{
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/ground_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}
			document.getElementById("c5").innerHTML='<img id="a5" class="attack" src="imagenes/ground_atack.png"/>';
			document.getElementById("c6").innerHTML='<img id="a6" class="attack" src="imagenes/ground_atack.png"/>';
			document.getElementById("c7").innerHTML='<img id="a7" class="attack" src="imagenes/ground_atack.png"/>';
			document.getElementById("c8").innerHTML='<img id="a8" class="attack" src="imagenes/ground_atack.png"/>';
			document.getElementById("c9").innerHTML='<img id="a9" class="attack" src="imagenes/ground_atack.png"/>';
			break;
		case 23:
		case 24:
		case 29:
		case 30:
		case 32:
		case 33:
		case 88:
		case 89:
		case 109:
		case 110:
		case 31:
		case 34:
		case 41:
		case 42:
			document.getElementById("c1").innerHTML='<img id="a1" class="attack" src="imagenes/poison_atack.png"/>';
			document.getElementById("c2").innerHTML='<img id="a2" class="attack" src="imagenes/poison_atack.png"/>';
			document.getElementById("c3").innerHTML='<img id="a3" class="attack" src="imagenes/poison_atack.png"/>';
			if(seleccion==1){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/poison_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else if(seleccion==2){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/poison_atack.png"/><img id="player" src="imagenes/Charmander_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else{
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/poison_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}
			document.getElementById("c5").innerHTML='<img id="a5" class="attack" src="imagenes/poison_atack.png"/>';
			document.getElementById("c6").innerHTML='<img id="a6" class="attack" src="imagenes/poison_atack.png"/>';
			document.getElementById("c7").innerHTML='<img id="a7" class="attack" src="imagenes/poison_atack.png"/>';
			document.getElementById("c8").innerHTML='<img id="a8" class="attack" src="imagenes/poison_atack.png"/>';
			document.getElementById("c9").innerHTML='<img id="a9" class="attack" src="imagenes/poison_atack.png"/>';
			break;
		case 16:
		case 17:
		case 18:
		case 21:
		case 22:
		case 84:
		case 85:
			document.getElementById("c1").innerHTML='<img id="a1" class="attack" src="imagenes/flying_atack.png"/>';
			document.getElementById("c2").innerHTML='<img id="a2" class="attack" src="imagenes/flying_atack.png"/>';
			document.getElementById("c3").innerHTML='<img id="a3" class="attack" src="imagenes/flying_atack.png"/>';
			if(seleccion==1){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/flying_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else if(seleccion==2){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/flying_atack.png"/><img id="player" src="imagenes/Charmander_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else{
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/flying_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}
			document.getElementById("c5").innerHTML='<img id="a5" class="attack" src="imagenes/flying_atack.png"/>';
			document.getElementById("c6").innerHTML='<img id="a6" class="attack" src="imagenes/flying_atack.png"/>';
			document.getElementById("c7").innerHTML='<img id="a7" class="attack" src="imagenes/flying_atack.png"/>';
			document.getElementById("c8").innerHTML='<img id="a8" class="attack" src="imagenes/flying_atack.png"/>';
			document.getElementById("c9").innerHTML='<img id="a9" class="attack" src="imagenes/flying_atack.png"/>';
			break;
		default:
			document.getElementById("c1").innerHTML='<img id="a1" class="attack" src="imagenes/normal_atack.png"/>';
			document.getElementById("c2").innerHTML='<img id="a2" class="attack" src="imagenes/normal_atack.png"/>';
			document.getElementById("c3").innerHTML='<img id="a3" class="attack" src="imagenes/normal_atack.png"/>';
			if(seleccion==1){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/normal_atack.png"/><img id="player" src="imagenes/Bulbasaur_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else if(seleccion==2){
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/normal_atack.png"/><img id="player" src="imagenes/Charmander_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}else{
				document.getElementById("c4").innerHTML='<img id="a4" class="attack" src="imagenes/normal_atack.png"/><img id="player" src="imagenes/Squirtle_icon.png" draggable="true" ondragstart="drag(event)"/>';
			}
			document.getElementById("c5").innerHTML='<img id="a5" class="attack" src="imagenes/normal_atack.png"/>';
			document.getElementById("c6").innerHTML='<img id="a6" class="attack" src="imagenes/normal_atack.png"/>';
			document.getElementById("c7").innerHTML='<img id="a7" class="attack" src="imagenes/normal_atack.png"/>';
			document.getElementById("c8").innerHTML='<img id="a8" class="attack" src="imagenes/normal_atack.png"/>';
			document.getElementById("c9").innerHTML='<img id="a9" class="attack" src="imagenes/normal_atack.png"/>';
			break;

		}

}