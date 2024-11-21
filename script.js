let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top < offset+height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active')
            })
        }
    })
}
menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Select all social links
const socialLinks = document.querySelectorAll(".social");

// Apply hover effect with timeout
socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        link.classList.add("hover-active"); // Add hover effect
        setTimeout(() => {
            link.classList.remove("hover-active"); // Remove hover effect after timeout
        }, 1000); // Timeout duration in milliseconds
    });

    link.addEventListener("mouseleave", () => {
        link.classList.remove("hover-active"); // Ensure hover effect is removed immediately on mouse leave
    });
});
/*Clock*/
// function updateClock() {
//     const clockElement = document.getElementById("real-time-clock");
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
    
//     clockElement.textContent = `${hours}:${minutes}:${seconds}`;
// }
// // Update the clock every second
// setInterval(updateClock, 1000);
// // Initialize the clock on page load
// updateClock();


/*Contact*/
// Check if EmailJS is loaded
// Initialize EmailJS
emailjs.init("kDLRNLvOKtrXs5RrR"); // Replace with your actual EmailJS User ID

// Check if EmailJS is loaded
if (typeof emailjs !== "undefined") {
    console.log("EmailJS library loaded successfully!");
} else {
    console.error("EmailJS library failed to load!");
}

// Add event listener to the form
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission from refreshing the page

    // Collect form data
    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phno").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate required fields
    if (!fullName || !email || !message) {
        alert("Please fill in all required fields (Name, Email, Message).");
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Prepare data for EmailJS
    const templateParams = {
        fullname: fullName,
        email: email,
        phone: phone || "Not provided", // Provide default value if phone is optional
        subject: subject || "No subject", // Provide default value if subject is optional
        message: message,
    };

    // Send email using EmailJS
    emailjs
        .send('service_dczfgqh', 'template_cr8v9gg', templateParams)
        .then((response) => {
            console.log("Email sent successfully!", response.status, response.text);
            alert("Message sent successfully!");

            // Optionally reset the form after successful submission
            const form = document.querySelector("form");
            if (form) form.reset();
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Failed to send the message. Please try again later.");
        });
});
