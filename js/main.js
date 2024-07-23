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

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    fetch('http://localhost:3000/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        alert('Message sent successfully!');
    })
    .catch(error => {
        alert('Error sending message.');
        console.error('Error:', error);
    });
});
