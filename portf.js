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



function toggleChat() {
    const chatBox = document.querySelector(".chat-box");
    chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";
}

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();
    if (message === "") return;

    const chatBody = document.getElementById("chat-body");

    // User message
    const userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.textContent = message;
    chatBody.appendChild(userMessage);

    // Scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;

    // Clear input field
    userInput.value = "";

    // AI Response (Simulated)
    setTimeout(() => {
        const botMessage = document.createElement("p");
        botMessage.classList.add("bot-message");
        const response = generateResponse(message.toLowerCase());
        botMessage.textContent = response;
        chatBody.appendChild(botMessage);
        chatBody.scrollTop = chatBody.scrollHeight;

        // If the message is a navigation command, redirect to the corresponding page
        handleNavigation(message.toLowerCase());

    }, 1000);
}

// AI Responses & Page Navigation
function generateResponse(input) {
    const responses = {
        "hello": "Hi there! How can I help? 😊",
        "who are you": "I'm an AI Assistant here to assist you!",
        "what can you do": "I can answer questions and help you navigate!",
        "bye": "Goodbye! Have a great day! 😊",
        "open home": "Opening Home Page... 🏠",
        "go to about": "Navigating to About Page... ℹ️",
        "open projects": "Taking you to Projects Page... 🚀",
        "go to skills": "Heading to Skills Page... 🎨",
        "open contact": "Opening Contact Page... 📞"
    };

    return responses[input] || "I'm not sure about that, but I'm learning!";
}

// Handle Navigation to Pages
function handleNavigation(input) {
    const pages = {
        "open home": "portf.html",
        "go to about": "about.html",
        "open projects": "projects.html",
        "go to skills": "skills.html",
        "open contact": "contact.html"
    };

    if (pages[input]) {
        setTimeout(() => {
            window.location.href = pages[input]; // Redirect to the correct page
        }, 1500);
    }
}

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



document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".theme-toggle");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Load Dark Mode Preference from LocalStorage
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



