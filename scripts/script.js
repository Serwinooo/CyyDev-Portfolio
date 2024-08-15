document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired for script.js'); // Debugging log

    // Modal logic for the first image
    var modal1 = document.getElementById("myModal");
    var img1 = document.getElementById("myImg");
    var modalImg1 = document.getElementById("img01");
    var captionText1 = document.getElementById("caption");
    var span1 = document.getElementsByClassName("close")[0];

    img1.onclick = function() {
        modal1.style.display = "block";
        modalImg1.src = this.src;
        captionText1.innerHTML = 'Cyydev Profile';
    }

    span1.onclick = function() {
        modal1.style.display = "none";
    }

    var modalCert = document.getElementById("certModal");
    var modalImgCert = document.getElementById("img-cert");
    var captionTextCert = document.getElementById("caption-cert");
    var spanCert = document.getElementsByClassName("close-cert")[0];

    var images = document.querySelectorAll(".cert-image");
    images.forEach(function(img) {
        img.onclick = function() {
            modalCert.style.display = "block";
            modalImgCert.src = this.src;
            modalImgCert.style.filter = "none";
            spanCert.style.zIndex = '4';
            modalImgCert.style.transform = "scale(1)";

            if (this.id === "special-cert") {
                modalImgCert.style.height = "80%";
                modalImgCert.style.width = "90%";
            } else {
                modalImgCert.style.width = "90%";
                modalImgCert.style.height = "70%";
                modalImgCert.style.maxWidth = "900px";
               
            }

            captionTextCert.innerHTML = 'Cyydev Certificate';
        }
    });

    spanCert.onclick = function() {
        modalCert.style.display = "none";
        modalImgCert.style.filter = "";
        modalImgCert.style.width = "";
        modalImgCert.style.maxWidth = "";
        modalImgCert.style.height = "";
    }

    var notification = document.getElementById('notification');
    notification.style.display = 'block';

    var okayButton = document.getElementById('okay-button');
    okayButton.addEventListener('click', function() {
        notification.style.display = 'none';
    });
});

const checkbox = document.getElementById("checkbox");
const navbarLinks = document.querySelectorAll('.navbar-nav a');
const cards = document.querySelectorAll('.card');
const intro = document.querySelector('.intro');
const cardHeader = document.querySelector('.card-header');

function changeMode() {
    if (checkbox.checked) {
        for (let i = 0; i < navbarLinks.length; i++) {
            navbarLinks[i].style.color = 'black';
        }

        document.body.classList.add('dark');
    
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = '#cfcfcf';
        }

        intro.style.color = '#000';
        intro.style.borderColor = '#000';
        cardHeader.style.color = '#000';

    } else {
        for (let i = 0; i < navbarLinks.length; i++) {
            navbarLinks[i].style.color = '';
        }

        document.body.classList.remove('dark');

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = '';
        }

        intro.style.color = '';
        intro.style.borderColor = '';
        cardHeader.style.color = '';
    }
}

checkbox.addEventListener('change', changeMode);

// Get the modal
var customModal = document.getElementById("customModal");

// Get the images that trigger the modal
var triggers = document.querySelectorAll('.open-modal');

// Get the close button
var closeBtn = document.querySelector('.close-modal');

// When an image is clicked, show the modal with corresponding content
triggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        // Get the project content related to the clicked image
        var projectContent = this.nextElementSibling.innerHTML;
        
        // Inject the project content into the modal's content container
        customModal.querySelector('.modal-content-container').innerHTML = projectContent;
        
        // Display the modal
        customModal.style.display = "block";
    });
});

// When the close button is clicked, hide the modal
closeBtn.addEventListener('click', function() {
    customModal.style.display = "none";
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', function(event) {
    if (event.target == customModal) {
        customModal.style.display = "none";
    }
});

