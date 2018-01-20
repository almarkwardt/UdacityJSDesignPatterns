cat1ClickCount = 0;
cat1Name = "Dr. Fuzzles";
cat2ClickCount = 0;
cat2Name = "CatFace"

var UpdateCat = function(catDOMElement, name, clickCount) {
	var nameElement = catDOMElement.getElementsByClassName("Name")[0];
	nameElement.textContent = name;
	var counterElement = catDOMElement.getElementsByClassName("Counter")[0];
	counterElement.textContent = clickCount;
};

var UpdatePage = function() {
	var cat1Element = document.getElementById("Cat1");
	UpdateCat(cat1Element, cat1Name, cat1ClickCount);

	var cat2Element = document.getElementById("Cat2");
	UpdateCat(cat2Element, cat2Name, cat2ClickCount);
};

var cat1PhotoElement = document.getElementById("Cat1").getElementsByClassName("Photo")[0];
cat1PhotoElement.addEventListener("click", function() {
	cat1ClickCount++;
	UpdatePage();
});

var cat2PhotoElement = document.getElementById("Cat2").getElementsByClassName("Photo")[0];
cat2PhotoElement.addEventListener("click", function() {
	cat2ClickCount++;
	UpdatePage();
});

document.addEventListener("DOMContentLoaded", function() {
	UpdatePage();
});
