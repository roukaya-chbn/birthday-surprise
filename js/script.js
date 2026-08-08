function checkPassword() {

    const passwordInput = document.getElementById("password-input");
    const passwordPage = document.getElementById("password-page");
    const birthdayPage = document.getElementById("birthday-page");
    const errorMessage = document.getElementById("error-message");

    const password = passwordInput.value;

    if (password === "birthday") {

        passwordPage.style.display = "none";
        birthdayPage.style.display = "flex";

    } else {

        errorMessage.textContent = "Wrong password. Try again.";

    }
}


    

