const inputUserName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

inputUserName.addEventListener("input", handlerInput);

function handlerInput(event) {
  const trimValue = event.currentTarget.value.trim();
  nameOutput.textContent = trimValue ? trimValue : "Anonymous";
}
