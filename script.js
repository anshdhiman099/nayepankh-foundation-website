// ===============================
// Dark Mode
// ===============================

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

    });

}


// ===============================
// Volunteer Form
// ===============================

const volunteerForm = document.getElementById("volunteerForm");

if (volunteerForm) {

    volunteerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const successMessage =
            document.getElementById("successMessage");

        successMessage.innerHTML =
            "✅ Thank You for Registering! We will contact you soon.";

        successMessage.style.color = "green";
        successMessage.style.marginTop = "20px";
        successMessage.style.fontSize = "20px";

        volunteerForm.reset();

    });

}
// ===============================
// Contact Form
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const contactSuccess =
            document.getElementById("contactSuccess");

        contactSuccess.innerHTML =
            "✅ Your message has been sent successfully!";

        contactSuccess.style.color = "green";
        contactSuccess.style.fontSize = "20px";
        contactSuccess.style.marginTop = "20px";

        contactForm.reset();

    });

}
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
