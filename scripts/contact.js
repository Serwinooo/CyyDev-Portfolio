document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("Zmorfzx6Mu5bRHaEt");
    
    var contactForm = document.getElementById('contactForm');
    var modal = document.getElementById("myModal3");
    var span = document.getElementsByClassName("close3")[0];
    var modalMessage = document.getElementById("modalMessage");

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        
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
                modal.style.display = "block";
                contactForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                modalMessage.textContent = "Failed to send your message. Please try again.";
                modal.style.display = "block";
            });
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});