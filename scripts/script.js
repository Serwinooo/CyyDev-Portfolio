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

    // Modal logic for the second image
    var modal2 = document.getElementById("myModal2");
    var img2 = document.getElementById("myImg2");
    var modalImg2 = document.getElementById("img02");
    var captionText2 = document.getElementById("caption2");
    var span2 = document.getElementsByClassName("close2")[0];

    img2.onclick = function() {
        modal2.style.display = "block";
        modalImg2.src = this.src;
        captionText2.innerHTML = 'Cyydev Cover Photo';
        modal2.style.zIndex = '5';
    }

    span2.onclick = function() {
        modal2.style.display = "none";
    }

    // Show the notification on load
    var notification = document.getElementById('notification');
    notification.style.display = 'block';

    // Handle the okay button click
    var okayButton = document.getElementById('okay-button');
    okayButton.addEventListener('click', function() {
        notification.style.display = 'none';
    });
});
