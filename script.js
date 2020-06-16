var leftgear = document.getElementById("leftgear");

window.addEventListener("scroll", function() {
    leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
});

let map = document.getElementById("map").contentDocument;
let loc = map.getElementById("loc1");
let road = document.getElementById("road");
loc.addEventListener('click', () => {
	road.play();
})
