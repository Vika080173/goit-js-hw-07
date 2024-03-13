
const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", function () {
  const trimmedInput = this.value.trim();

  if (trimmedInput !== "") {
    outputEl.textContent = trimmedInput;
  } else {
    outputEl.textContent = "Anonymous";
  }
});
