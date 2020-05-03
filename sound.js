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
	var flute = document.getElementById("flute"); 
	var audio3 = document.getElementById("audio3"); 

	var effects = document.getElementById("effects"); 

	flute.autoplay = true;
	flute.loop = true;
	flute.load();

	for (var i = 0; i <= effectsName.length - 1; i++) {
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
		case 38: //"up arrow"
			playEffect('gunshot.wav');
			break;

		case 65://"s"
			playEffect('tom1.wav');
			break;

		case 83://"a"
			playEffect('tom2.wav');
			break;

		case 81://"q"
			playEffect('plate.wav');
			break;

		case 80://"p"
			playEffect('doorbell.wav');
			break;

		case 77://"m"
			playEffect('msn_sound.mp3');
			break;

		case 78://"n"
			playEffect('msn_nudge.mp3');
			break;

		case 79://"o"
			playEffect('police_sirens.mp3');
			break;

		case 68://"d"
			audio3.play();
			audio3.loop = true;
			break;

		case 90:
			stop(audio1);
			stop(audio3);
			break;
	}
}

function highVolume(music){
	document.getElementById(music).volume = 1.0;
}

function lowVolume(music){
	document.getElementById(music).volume =  0.3;
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

function startBackgroundMusic(music){
	audio = document.getElementById(music);
	audio.play();
	audio.loop = true;
}

function stopBackgroundMusic(music){
	audio = document.getElementById(music);
	stop(audio);
}

function pauseBackgroundMusic(music){
	audio = document.getElementById(music);
	audio.pause();
}