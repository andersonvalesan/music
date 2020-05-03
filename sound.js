window.onload = function (){

	document.addEventListener('keydown', play);
	
	var effectsName = [
		'gunshot.wav',
		'tom1.wav',
		'tom2.wav',
		'plate.wav',
		'doorbell.wav',
		'msn_sound.mp3',
		'msn_nudge.mp3',
		'police_sirens.mp3'
	];

	var audio1 = document.getElementById("audio1"); 
	var audio2 = document.getElementById("audio2"); 
	var audio3 = document.getElementById("audio3"); 

	var effects = document.getElementById("effects"); 

	audio2.autoplay = true;
	audio2.load();

	for (var i = effectsName.length - 1; i >= 0; i--) {
		var br = document.createElement("br");
		var btn = document.createElement("BUTTON");
		btn.setAttribute('onclick','playEffect("'+effectsName[i]+'")');
		btn.classList.add("btn");
		btn.classList.add("btn-outline-success");
		btn.innerHTML = effectsName[i];                   
		effects.appendChild(btn);
		btn.parentNode.insertBefore(br, btn.nextSibling);
	}
	
}

function play(e){
	switch(e.keyCode){
		case 38:
			playEffect('gunshot.wav');
			break;

		case 65:
			playEffect('tom1.wav');
			break;

		case 83:
			playEffect('tom2.wav');
			break;

		case 81:
			playEffect('plate.wav');
			break;

		case 80:
			playEffect('doorbell.wav');
			break;

		case 77:
			playEffect('msn_sound.mp3');
			break;

		case 78:
			playEffect('msn_nudge.mp3');
			break;

		case 79:
			playEffect('police_sirens.mp3');
			break;

		case 68:
			audio3.play();
			audio3.loop = true;
			break;

		case 90:
			stop(audio1);
			stop(audio3);
			break;
	}
}

function stop(audio){
	audio.pause();
	audio.currentTime = 0;
}

function playEffect(src){
	stop(audio1);
	audio1.src = src;
	audio1.loop = false;
	audio1.play();
}

function startBackgroundMusic(){
	audio2.play();
	audio2.loop = true;
}

function stopBackgroundMusic(){
	stop(audio2);
}

function pauseBackgroundMusic(){
	audio2.pause();
}