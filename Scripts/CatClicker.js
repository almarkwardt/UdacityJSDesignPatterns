clickCount = 0;

var catPhotoElement = document.getElementById("TheCatPhoto");
catPhotoElement.addEventListener("click", function() {
	var counterElement = document.getElementById("TheClickCounter");
	clickCount++;
	counterElement.textContent = clickCount;
});
