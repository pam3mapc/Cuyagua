window.addEventListener("load", function() {

	let map = document.getElementById("map").contentDocument;
	let loc = map.getElementById("loc1");
	console.log(loc);
	let road = document.getElementById("road");
	loc.addEventListener('click', () => {
		road.play();
	})
})

let leftgear = document.getElementById("leftgear");

window.addEventListener("scroll", function() {
    leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
});
