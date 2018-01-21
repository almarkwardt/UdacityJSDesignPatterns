cats = [
	{
		name: "Dr. Fuzzles",
		clicks: 0,
		photo: "Resources/DrFuzzles.jpeg"
	},
	{
		name: "CatFace",
		clicks: 0,
		photo: "Resources/CatFace.jpeg"
	},
	{
		name: "CrankyPants",
		clicks: 0,
		photo: "Resources/CrankyPants.jpeg"
	},
	{
		name: "Snowball",
		clicks: 0,
		photo: "Resources/Snowball.jpg"
	},
	{
		name: "Stripey",
		clicks: 0,
		photo: "Resources/Stripey.jpeg"
	}
];

selectedCatIndex = 0;

var SetSelection = function(selectedIndex) {
	selectedCatIndex = selectedIndex;
	UpdatePage();
};

var UpdateSelector = function(catCollection, chosenIndex) {
	var selectorElement = document.getElementById("SelectorArea");

	selectorElement.innerHTML = "";

	for(var catIter = 0; catIter < catCollection.length; ++catIter)
	{
		var selectionElement = document.createElement("div");
		selectionElement.setAttribute("id", "Cat." + catIter);
		selectionElement.textContent = catCollection[catIter].name;
		selectionElement.addEventListener("click", (function(selectionIndex) {
			return function() {
				SetSelection(selectionIndex);
			};
		})(catIter));

		selectorElement.appendChild(selectionElement);
	}
};

var IncrementClicks = function(cat) {
	cat.clicks++;
	UpdatePage();
};

var UpdateCat = function(cat) {
	var nameElement = document.getElementById("CatArea.Name");
	var clicksElement = document.getElementById("CatArea.Clicks");
	var photoElement = document.getElementById("CatArea.Photo");

	photoElement.innerHTML = "";

	nameElement.textContent = cat.name;
	clicksElement.textContent = cat.clicks;
	var imageElement = document.createElement("img");
	imageElement.setAttribute("src", cat.photo);
	imageElement.setAttribute("width", "50%");
	imageElement.addEventListener("click", (function(thisCat) {
		return function() {
			IncrementClicks(thisCat);
		};
	})(cat));

	photoElement.appendChild(imageElement);
};

var UpdatePage = function() {
	UpdateSelector(cats, selectedCatIndex);
	UpdateCat(cats[selectedCatIndex]);
};

document.addEventListener("DOMContentLoaded", function() {
	UpdatePage();
});
