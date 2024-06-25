/* $(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
  */

  document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("Zmorfzx6Mu5bRHaEt");
    
    var contactForm = document.getElementById('contactForm');
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
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

    // Video modal functionality
    var openVideoModalBtn = document.querySelector('.open-video-modal');
    var videoModal = document.getElementById("videoModal");
    var closeVideoModalBtn = document.getElementsByClassName("close-video-modal")[0];

    openVideoModalBtn.addEventListener('click', function(e) {
        e.preventDefault();
        videoModal.style.display = "block";
        videoModal.style.zIndex = "999";
        modalMessage.style.display = "none";
        modal.style.display = "none";
    });

    closeVideoModalBtn.onclick = function() {
        videoModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == videoModal) {
            videoModal.style.display = "none";
        }
    }
});

// Slider functionality
document.addEventListener('DOMContentLoaded', function () {
    var openSliderBtn = document.querySelector('.open-slider');
    var closeSliderBtn = document.querySelector('.close-slider');
    var sliderContainer = document.getElementById('slider');

    openSliderBtn.addEventListener('click', function (e) {
        e.preventDefault();
        sliderContainer.style.display = 'block';
    });

    closeSliderBtn.addEventListener('click', function () {
        sliderContainer.style.display = 'none';
    });
    
    window.addEventListener('click', function (e) {
        if (e.target == sliderContainer) {
            sliderContainer.style.display = 'none';
        }
    });
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

var socMed = document.querySelector('#socMed');
var socs = document.querySelectorAll('.soc');

function mySoc() {
    socs.forEach(function(soc) {
        if (soc.style.display == 'inline-block') {
            soc.style.display = 'none';
        } else {
            soc.style.display = 'inline-block';
        }
    });
}

socMed.addEventListener('click', mySoc);
