// script.js

window.onload = function () {

    var form = document.querySelector(".login-box");

    form.onsubmit = function (event) {

        event.preventDefault();

        var usernameInput = document.querySelector("input[type='text']");
        var passwordInput = document.querySelector("input[type='password']");

        var username = usernameInput.value;
        var password = passwordInput.value;

        if (username === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (username === "admin" && password === "1234") {
            alert("Login successful");
        } else {
            alert("Incorrect username or password");
        }
    };

};
