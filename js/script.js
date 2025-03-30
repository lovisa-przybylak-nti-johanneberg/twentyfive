document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".styrelsebilder img").forEach(img => {
        let container = document.createElement("div");
        container.classList.add("image-container");

        let text = document.createElement("span");
        text.classList.add("image-text");
        text.innerText = img.alt; // Använd alt-texten för att fylla texten

        img.parentNode.insertBefore(container, img);
        container.appendChild(img);
        container.appendChild(text);
    });
});

