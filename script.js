function showMessage() {
    document.getElementById("message").innerText = "Hello! Thanks for visiting my page 😊";
}
// Function to add a scroll effect
function revealOnScroll() {
    let sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        let sectionTop = section.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 50) {
            section.classList.add("visible");
        }
    });
}

// Listen for scroll events
window.addEventListener("scroll", revealOnScroll);

// Ensure animations trigger on page load
document.addEventListener("DOMContentLoaded", revealOnScroll);
