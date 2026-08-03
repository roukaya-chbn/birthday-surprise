function checkPassword() {

    let password = document.getElementById("password-input").value;

    if (password === "1008") {

        document.getElementById("password-page").style.display = "none";
        document.getElementById("birthday-page").style.display = "flex";

    } else {

        document.getElementById("error-message").innerHTML =
            "Wrong password. Try again.";

    }

}

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



function startFireworks(){

    const canvas = document.getElementById("fireworks");

    const ctx = canvas.getContext("2d");


    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;


    let particles = [];


    

