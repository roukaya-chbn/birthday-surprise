function checkPassword(){

    let password = document.getElementById("password-input").value;


    if(password === "1008"){

        document.getElementById("password-page").style.display = "none";

        document.getElementById("birthday-page").style.display = "flex";

    }

    else{

        document.getElementById("error-message").innerHTML =
        "Wrong password. Try again.";

    }

}
