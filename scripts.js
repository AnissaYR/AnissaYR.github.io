var script = document.createElement('script');
script.src = "https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js";
document.head.appendChild(script);

// Function to initialize Typed.js
function initializeTyped() {
    var typed = new Typed(".element", {
        strings: ["Anissa Yulidha Rodiyah", "Informatics Student"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });
}

// Wait for the Typed.js script to load, then initialize Typed.js
script.onload = initializeTyped;
