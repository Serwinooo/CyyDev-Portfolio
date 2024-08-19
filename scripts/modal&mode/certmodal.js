document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired for script.js'); // Debugging log

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

    // var notification = document.getElementById('notification');
    // notification.style.display = 'block';

    // var okayButton = document.getElementById('okay-button');
    // okayButton.addEventListener('click', function() {
    //     notification.style.display = 'none';
    // });
});