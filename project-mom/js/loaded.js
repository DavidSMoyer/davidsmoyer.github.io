
// When the page loads, remove the "preload" class from the body, allowing transitions and animations to play
window.onload = function()
{
	var x = document.getElementsByClassName("preload");
	x[0].classList.remove("preload");
    console.log("worked");
}
