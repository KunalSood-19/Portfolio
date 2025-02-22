document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".theme-toggle");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Dark Mode Toggle
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Mobile Menu Toggle
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
