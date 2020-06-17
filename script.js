window.addEventListener("load", function() {

	let bg = document.getElementById("map");
	let sound = document.getElementById("soundwave");
	let button = document.getElementById("button");
	let map = document.getElementById("map").contentDocument;

	let loc1 = map.getElementById("loc1");
	let transcript1 = document.getElementById("dialogue1");
	loc1.addEventListener('click', () => {
		bg.style.opacity = '0.1';
		transcript1.style.display = 'inline';
		button.style.display = 'inline';
		sound.style.opacity = '0.7'
		audioPlayer('road.mp3', bg, transcript1, button, sound);
	})

	let loc2 = map.getElementById("loc2");
	let transcript2 = document.getElementById("dialogue2");
	loc2.addEventListener('click', () => {
		bg.style.opacity = '0.1';
		transcript2.style.display = 'inline';
		button.style.display = 'inline';
		sound.style.opacity = '0.7'
		audioPlayer('town.mp3', bg, transcript2, button, sound);
	})

	let loc3 = map.getElementById("loc3");
	let transcript3 = document.getElementById("dialogue3");
	loc3.addEventListener('click', () => {
		bg.style.opacity = '0.1';
		transcript3.style.display = 'inline';
		button.style.display = 'inline';
		sound.style.opacity = '0.7'
		audioPlayer('house.mp3', bg, transcript3, button, sound);
	})

	let loc4 = map.getElementById("loc4");
	let transcript4 = document.getElementById("dialogue4");
	loc4.addEventListener('click', () => {
		bg.style.opacity = '0.1';
		transcript4.style.display = 'inline';
		button.style.display = 'inline';
		sound.style.opacity = '0.7'
		audioPlayer('food.mp3', bg, transcript4, button, sound);
	})

	let loc5 = map.getElementById("loc5");
	let transcript5 = document.getElementById("dialogue5");
	loc5.addEventListener('click', () => {
		bg.style.opacity = '0.1';
		transcript5.style.display = 'inline';
		button.style.display = 'inline';
		sound.style.opacity = '0.7'
		audioPlayer('beach.mp3', bg, transcript5, button, sound);
	})

	let loc6 = map.getElementById("loc6");
	let transcript6 = document.getElementById("dialogue6");
	loc6.addEventListener('click', () => {
		bg.style.opacity = '0.1';
		transcript6.style.display = 'inline';
		button.style.display = 'inline';
		sound.style.opacity = '0.7'
		audioPlayer('TheReality.mp3', bg, transcript6, button, sound);
	})


})

let leftgear = document.getElementById("leftgear");

window.addEventListener("scroll", function() {
    leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
});

function audioPlayer(audio, bg, ts, btn, snd) {
	// Store the 3 buttons in some object
	var buttons = {
	    play: document.getElementById("btn-play"),
	    pause: document.getElementById("btn-pause"),
	    stop: document.getElementById("btn-stop")
	};

	// Create an instance of wave surfer with its configuration
	var Spectrum = WaveSurfer.create({
	    container: '#audio-spectrum',
	    waveColor: 'white',
	    progressColor: "#03a9f4",
	    barWidth: 2,
	});

	Spectrum.load(audio);

	// Handle Pause button
	buttons.pause.addEventListener("click", function(){
	    Spectrum.pause();
	    buttons.pause.style.color = '#e76800';
	    buttons.play.style.color = 'white';
	    buttons.stop.style.color = 'white';	    
	}, false);

	// Handle Play button
	buttons.play.addEventListener("click", function(){
	    Spectrum.play();
	    buttons.play.style.color = '#e76800';
	    buttons.pause.style.color = 'white';
	    buttons.stop.style.color = 'white';
	}, false);


	// Handle Stop button
	buttons.stop.addEventListener("click", function(){
	    Spectrum.stop();
	    buttons.pause.style.color = 'white';
	    buttons.play.style.color = 'white';
		bg.style.opacity = '1';
		ts.style.display = 'none';
		btn.style.display = 'none';
		snd.style.opacity = '0';
		Spectrum.destroy();
	}, false);


	// If you want a responsive mode (so when the user resizes the window)
	// the spectrum will be still playable
	window.addEventListener("resize", function(){
	    // Get the current progress according to the cursor position
	    var currentProgress = Spectrum.getCurrentTime() / Spectrum.getDuration();

	    // Reset graph
	    Spectrum.empty();
	    Spectrum.drawBuffer();
	    // Set original position
	    Spectrum.seekTo(currentProgress);
	}, false);

}