
altura=screen.height-250;
ancho=screen.width-120;

var time=210;
var evil = Math.random()*altura;
var pY=0;
var score = 0;
var level = 1;
var player = document.getElementById("player");
var bullet = document.getElementById("bullet");
var enemy = document.getElementById("enemy");
var cambio = 0;
var impactos=49;
var velocidad=1000-(level*100);

enemy.style.top=evil+"px";

var cambi=setInterval("revom()",velocidad);
var tiempo=setInterval("temporizador()",1000);



function mover(e){
	pY=e.pageY-10;
	player.style.top=pY+"px";
}

document.onmousemove=mover;

function revom(e){
	if(level<10){
		evil +=(Math.random()*200)-100;
		if(evil<altura && evil>0){
			enemy.style.top=evil+"px";
		}
	}else{
		if(parseInt(bullet.style.top)<(altura/2)){
			enemy.style.top=(altura-50)+"px";
		}else{
			enemy.style.top=100+"px"
		}
	}
}


function marcador(){
	console.log("Impacto");
	console.log("Diana: " +diana+" entre "+eviltop+" y "+evilbottom);
	enemy.style.top=evil+"px";
	evil = Math.random()*altura;
	document.getElementById("elife").innerHTML = '';
	var limit=parseInt(evilbottom)+80;
	console.log("Limite 1: "+limit+" "+parseInt(diana));
	switch(level){
		case 1:
			if(((limit)<parseInt(diana)) && (parseInt(diana)<(limit+40))){
				impactos=impactos-30;
				score = score +50;
			}else{
				limit=parseInt(evilbottom)+40;
				if(((limit)<parseInt(diana)) && (parseInt(diana)<(limit+120))){
					impactos=impactos-15;
					score = score +20;
				}else{
					impactos=impactos-8;
					score = score +5;
				}
			}
			break;
		case 2:
			if(((limit)<parseInt(diana)) && (parseInt(diana)<(limit+40))){
				impactos=impactos-20;
				score = score +50;
			}else{
				limit=parseInt(evilbottom)+40;
				if(((limit)<parseInt(diana)) && (parseInt(diana)<(limit+120))){
					impactos=impactos-10;
					score = score +20;
				}else{
					impactos=impactos-4;
					score = score +5;
				}
			}
			break;
		case 3:
			if(((limit)<parseInt(diana)) && (parseInt(diana)<(limit+40))){
				impactos=impactos-10;
				score = score +50;
			}else{
				limit=parseInt(evilbottom)+40;
				if(((limit)<parseInt(diana)) && (parseInt(diana)<(limit+120))){
					impactos=impactos-5;
					score = score +20;
				}else{
					impactos=impactos-2;
					score = score +5;
				}
			}
			break;
		case 4:
			if(((limit)<parseInt(diana)) && (parseInt(diana)<(limit+40))){
				impactos=impactos-4;
				score = score +50;
			}else{
				limit=parseInt(evilbottom)+40;
				if(((limit)<parseInt(diana)) && (parseInt(diana)<(limit+120))){
					impactos=impactos-2;
					score = score +20;
				}else{
					impactos=impactos-1;
					score = score +5;
				}
			}
			break;
		case 5:
			if(((limit)<parseInt(diana)) && (parseInt(diana)<(limit+40))){
				impactos=impactos-2;
				score = score +50;
			}else{
				limit=parseInt(evilbottom)+40;
				if(((limit)<parseInt(diana)) && (parseInt(diana)<(limit+120))){
					impactos=impactos-1;
					score = score +20;
				}
			}
			break;
		default:
			if(((limit)<parseInt(diana)) && (parseInt(diana)<(limit+40))){
				impactos=impactos-1;
				score = score +50;
			}
			break;
	}

	if(impactos<=0){
		score+=500*level;
		level++;
		impactos=49;
		if(level<10){
			velocidad=1000-(level*100);
		}else{
			velocidad=1;
		}
		
	}
	for(var i=1; i<impactos; i++){
		document.getElementById("elife").innerHTML += '#';
	}
	diana=null;
}


function trayectoria(){
	if(posicion<ancho){
		posicion+=3;
	}
	bullet.style.left=posicion+"px";
	if( posicion >= ancho ){
		posicion = 0;
	    bullet.style.display= "none";
		diana=bullet.style.top;
		bullet.style.top=0;
		
		eviltop=parseInt(enemy.style.top)+100+"px";
		evilbottom=parseInt(enemy.style.top)-100+"px";
		if((parseInt(eviltop)>parseInt(diana)) && (parseInt(diana)>parseInt(evilbottom))){
			var impacto=marcador();
		}else{
			console.log("No hay impacto:"+diana+" no está entre "+eviltop+" y "+evilbottom);
		}
	}
}


function disparar(e){
	if (e.keyCode == 32) {
		clearInterval( cambio );
		bullet.style.top=pY+"px";
		console.log("Disparo: "+pY);
	    bullet.style.display="block";
	    posicion=150;
	    cambio=setInterval("trayectoria()",1);
	}
}

document.addEventListener("keydown",disparar);

function temporizador(e){
	if(time>0){
		time--;
		document.getElementById("score").innerHTML = 'Puntuación: '+score;
		document.getElementById("score").innerHTML += ' - Nivel: '+level;
		document.getElementById("score").innerHTML += ' - Tiempo restante: '+time;
	}else{
		document.getElementById("score").innerHTML = 'Puntuación: '+score;
		document.getElementById("score").innerHTML += ' - Nivel: '+level;
		document.getElementById("score").innerHTML += ' - Tiempo restante: '+time;
		document.getElementById("score").innerHTML += '<br><span style="text-transform:uppercase; font-size: 120px"> game over </span> ';
		enemy.style.display="none";
		enemy.style.top="-200px";
	}
	
}