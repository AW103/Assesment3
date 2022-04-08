console.log("hello world");
let donGato = document.querySelector("#donGato")
let complimentList = document.querySelector("#complimentList");
let compliment = document.getElementsByClassName("compliment")
complimentList.style.display = "none"

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted successfully. Don Gato thanks you.")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const showCompliment = (event) => {
	console.log("Don Gato!");
	let index = Math.floor(Math.random() * 7)
	alert(complimentList.children[index].innerHTML);
}

donGato.addEventListener("mouseover", showCompliment)