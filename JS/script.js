let count = 1;
let direction = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
},8000)

function nextImage() {

    count += direction;
    // Inverte a direção quando chegar nos extremos
    if(count === 4) {
        direction = -1;
    }else if (count === 1) {
        direction = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});



