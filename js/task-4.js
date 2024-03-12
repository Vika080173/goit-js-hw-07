const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("All form fields must be filled in");
  } else {
    const info = {
      email: email.value,
      password: password.value,
    };
    console.log(info);
    event.currentTarget.reset();
  }
}
