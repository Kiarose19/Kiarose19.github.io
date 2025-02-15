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

// Initialize Lucide icons
lucide.createIcons();

// Function to filter projects by category
function filterProjects(category) {
    let projects = document.querySelectorAll(".project-card");

    projects.forEach((project) => {
        if (category === "all" || project.dataset.category === category) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });

    projects.forEach((project) => {
        observer.observe(project);
    });
});

