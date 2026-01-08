document.querySelector("form").addEventListener("submit", function (e) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.hidden = true;
    errorMessage.textContent = "";


    if (!email.includes("@")) {
        errorMessage.textContent = "E-pastam jāietver @ simbols.";
        errorMessage.hidden = false;
        e.preventDefault();
        return;
    }


    if (password.length < 8) {
        errorMessage.textContent = "Parolei jābūt vismaz 8 rakstzīmes garai.";
    } else if (!/[A-Z]/.test(password)) {
        errorMessage.textContent = "Parolei jāietver vismaz viens lielais burts.";
    } else if (!/[0-9]/.test(password)) {
        errorMessage.textContent = "Parolei jāietver vismaz viens cipars.";
    } else if (!/[^A-Za-z0-9]/.test(password)) {
        errorMessage.textContent = "Parolei jāietver vismaz viena speciālā rakstzīme.";
    }

    if (errorMessage.textContent !== "") {
        errorMessage.hidden = false;
        e.preventDefault();
    }
});

