let textArea = document.getElementById("textarea")
let fancy = document.getElementById("fancy")
let boring = document.getElementById("boring")
let biggerButton = document.getElementById("bigger")
let mooButton = document.getElementById("moo")

biggerButton.addEventListener("click", function() {
	textArea.style.fontSize = "24pt"
})

mooButton.addEventListener("click", function() {
	textArea.value = textArea.value.toUpperCase();
	let currValue = textArea.value;
	let currArr = currValue.split(".")
	currArr.push("-Moo")
	textArea.value = currArr.join("");
	textArea.value = textArea.value.toUpperCase();

})

fancy.onchange = function() {
	if(fancy.checked){
		textArea.style.fontWeight = "bold"
		textArea.style.color = "blue"
		textArea.style.textDecoration = "underline"
	}
}

boring.onchange = function() {
	if(boring.checked){
		textArea.style.fontWeight = "normal"
	}
}

