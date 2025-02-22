document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".theme-toggle");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Load Dark Mode Preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

    // Toggle Dark Mode
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }
    });

    // Mobile Menu Toggle
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
