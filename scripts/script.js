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

    var notification = document.getElementById('notification');
    notification.style.display = 'block';

    // Handle the okay button click
    var okayButton = document.getElementById('okay-button');
    okayButton.addEventListener('click', function() {
        notification.style.display = 'none';
    });
});