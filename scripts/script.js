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

function changeMode() {
    if (checkbox.checked) {
        for (let i = 0; i < navbarLinks.length; i++) {
            navbarLinks[i].style.color = 'black';
        }

        document.body.classList.add('dark');
    
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = '#cfcfcf';
        }
    } else {
        for (let i = 0; i < navbarLinks.length; i++) {
            navbarLinks[i].style.color = '';
        }

        document.body.classList.remove('dark');

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = '';
        }
    }
}

checkbox.addEventListener('change', changeMode);

