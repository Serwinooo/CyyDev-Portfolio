document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired'); // Debugging log

    // Initialize EmailJS
    emailjs.init("Zmorfzx6Mu5bRHaEt");

    // Modal logic for the contact form
    var contactForm = document.getElementById('contactForm');
    var modal3 = document.getElementById("myModal3");
    var span3 = document.getElementsByClassName("close3")[0];
    var modalMessage = document.getElementById("modalMessage");

    contactForm.addEventListener('submit', function(e) {
        console.log('Form submission triggered'); // Debugging log
        e.preventDefault(); // Prevent the default form submission
        console.log('Default prevented'); // Debugging log

        var email = document.getElementById('email').value;
        var fullName = document.getElementById('fullName').value;
        var subject = document.getElementById('subject').value;
        var content = document.getElementById('content').value;

        var templateParams = {
            from_name: fullName,
            from_email: email,
            subject: subject,
            message: content
        };

        emailjs.send('service_u5lk3vw', 'template_2e7fh6l', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                modalMessage.textContent = "Your message has been sent successfully!";
                modal3.style.display = "block";
                contactForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                modalMessage.textContent = "Failed to send your message. Please try again.";
                modal3.style.display = "block";
            });
    });

    span3.onclick = function() {
        modal3.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
    }
});
