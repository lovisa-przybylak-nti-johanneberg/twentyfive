button = document.getElementById('nav-icon');
button.addEventListener('click', function() { 
    this.classList.toggle('open');
    showMenu();}
)


let layer = document.querySelector(".fade-layer");
layer.addEventListener("click", showMenu);


function showMenu(){
    let menu = document.querySelector("nav.hamburger");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");

}