document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".theme-toggle");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const contactForm = document.querySelector(".contact-form");

   
    // Mobile Menu Toggle
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Form Submission
    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(contactForm);

            try {
                const response = await fetch("your-backend-url", {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    alert("Your message has been sent successfully!");
                    contactForm.reset();
                } else {
                    alert("Error sending message. Please try again later.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Could not send message. Check your connection.");
            }
        });
    }
});
