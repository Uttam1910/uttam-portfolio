document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('aside nav ul li a');

    // Function to set the active link based on the current URL
    function setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop(); // Get the current page name
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Run the function once to set the initial active link
    setActiveLink();
});

function toggleFlip(card) {
    card.classList.toggle('flipped');
}

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;

//     console.log("Sending email...");
//     console.log("Name: " + name);
//     console.log("Email: " + email);
//     console.log("Message: " + message);

//     Email.send({
//         SecureToken: "d0833c96-fce6-41ac-9335-50924126bb9f",
//         To: 'ut224365@gmail.com',
//         From: email,
//         Subject: `New message from ${name}`,
//         Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
//     }).then(
//         message => {
//             console.log("Mail sent successfully:", message);
//             alert("Mail sent successfully");
//         }
//     ).catch(
//         error => {
//             console.error("Error sending email:", error);
//             alert("Error sending email: " + error.message);
//         }
//     );
// });
