window.addEventListener("load", function() {

	let bg = document.getElementById("map");
	let map = document.getElementById("map").contentDocument;
	let loc1 = map.getElementById("loc1");
	let road = document.getElementById("road");
	let transcript = document.getElementById("dialogue");
	let button = document.getElementById("button");
	loc1.addEventListener('click', () => {
		bg.style.opacity = '0.1';
		transcript.style.display = 'inline';
		button.style.display = 'inline';
		audioPlayer('road.mp3', bg, transcript, button);
	})

	let loc2 = map.getElementById("loc2");
	let town = document.getElementById("town");
	loc2.addEventListener('click', () => {
		town.play();
	})

	let loc3 = map.getElementById("loc3");
	let house = document.getElementById("house");
	loc3.addEventListener('click', () => {
		house.play();
	})

})

let leftgear = document.getElementById("leftgear");

window.addEventListener("scroll", function() {
    leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
});

function audioPlayer(audio, bg, ts, btn) {
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
	}, false);

	// Handle Play button
	buttons.play.addEventListener("click", function(){
	    Spectrum.play();
	}, false);


	// Handle Stop button
	buttons.stop.addEventListener("click", function(){
	    Spectrum.stop();
		bg.style.opacity = '1';
		ts.style.display = 'none';
		btn.style.display = 'none';
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