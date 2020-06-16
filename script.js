let map = document.getElementById("map").contentDocument;
let loc = map.getElementById("loc1");
let road = document.getElementById("road");
loc.addEventListener('click', () => {
	road.play();
})

