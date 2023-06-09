


let users = [];

let elList = document.querySelector(".cards");

fetch("https://restcountries.com/v3.1/all")
	.then((res) => res.json())
	.then((data) => {
		users = data;
		renderUi(users);
	});

function renderUi(array) {
	array.forEach((item) => {
		let elCard = document.createElement("li");
		// console.log(item);
		elCard.className = "card";
		elCard.innerHTML = `
                <img src="${item.flags.png}" class="img">
                <p class=""> ${item.name.official}</p>
                <p class="">population: ${item.population}</p>
                <p class="">region : ${item.region}</p>
                </li>
             `;
		elList.appendChild(elCard);
	});
}


let elForm = document.querySelector(".form");

elForm.addEventListener("change", (evt) => {
	evt.preventDefault();
	let value = evt.target.value;
	elList.innerHTML = "";
	if (value == "all") {
		renderUi(users);
		search(users);
	} else {
		let newItem = users.filter((item) => {
			return value == item.region;
		});
		renderUi(newItem);
		search(newItem);
	}
});


let elSearch = document.querySelector(".search");
function search(array) {
	elSearch.addEventListener("keyup", (evt) => {
		evt.preventDefault();
		let value = evt.target.value;
		elList.innerHTML = "";
		const newItem = array.filter((item) => {
			return item.name.official.includes(value);
		});
		renderUi(newItem);
	});
}








fetch("https://fakestoreapi.com/products")
	.then((res) => res.json())
	.then((data) => {
		users = data;
		renderUi(users);
		select(users);
	});