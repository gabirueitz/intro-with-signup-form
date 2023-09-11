const inputs = document.querySelectorAll("input");
const email = document.getElementById("email");
const emailFormat = /\S+@\S+\.\S+/;

function emailFormatValidation(email) {
	if (email.value.match(emailFormat)) {
		email.parentElement.classList.remove("wrong");
	} else {
		email.parentElement.classList.add("wrong");
	}
}

document.addEventListener("submit", (e) => {
	e.preventDefault();

	emailFormatValidation(email);

	for (const input of inputs) {
		if (input.value.length === 0) {
			input.parentElement.classList.add("empty");
		} else {
			input.parentElement.classList.remove("empty");
		}
	}
});
