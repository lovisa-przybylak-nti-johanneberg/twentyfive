const hamMenu = document.querySelector('#nav-icon');

const offScreen = document.querySelector('.off-screen');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
})


/*button = document.getElementById('nav-icon');
button.addEventListener('click', function() { 
    this.classList.toggle('open');
    showMenu();}
)


function showMenu(){
    let menu = document.querySelector('nav.off-screen');
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle('visible');

} */
