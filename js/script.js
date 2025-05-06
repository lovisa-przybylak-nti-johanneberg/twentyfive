document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelectorAll(".styrelsebilder img").forEach(img => {
        let container = document.createElement("div");
        container.classList.add("image-container");

        let text = document.createElement("span");
        text.classList.add("image-text");
        text.innerText = img.alt;

        img.parentNode.insertBefore(container, img);
        container.appendChild(img);
        container.appendChild(text);
    }); 
});

function toggleMenu() {
    document.querySelector('nav').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('open');
  }