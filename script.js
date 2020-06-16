window.addEventListener("load", function() {

	let map = document.getElementById("map").contentDocument;
	let loc1 = map.getElementById("loc1");
	let road = document.getElementById("road");
	loc1.addEventListener('click', () => {
		road.play();
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

/*let leftgear = document.getElementById("leftgear");

window.addEventListener("scroll", function() {
    leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
});

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'
});

wavesurfer.load('road.mp3');*/