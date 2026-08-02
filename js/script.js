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
const canvas = document.getElementById("fireworks");

const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let particles = [];


function createFirework(){

    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height / 2;


    for(let i = 0; i < 60; i++){

        particles.push({

            x:x,
            y:y,

            speedX:
            (Math.random()-0.5)*8,

            speedY:
            (Math.random()-0.5)*8,

            life:100

        });

    }

}


function animateFireworks(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach((p,index)=>{


        p.x += p.speedX;

        p.y += p.speedY;

        p.life--;


        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            3,
            0,
            Math.PI*2
        );


        ctx.fillStyle =
        "white";

        ctx.fill();


        if(p.life <= 0){

            particles.splice(index,1);

        }


    });


    requestAnimationFrame(
        animateFireworks
    );

}


setInterval(
    createFirework,
    1200
);


animateFireworks();
