const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "root" && password === "Ir0n_m@n42") {
        alert("You have successfully logged in.");
        location.replace("https://jacksoncraft859.github.io");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
