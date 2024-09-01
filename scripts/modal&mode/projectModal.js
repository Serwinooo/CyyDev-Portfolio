// Get the modal
var customModal = document.getElementById("customModal");

// Get the images that trigger the modal
var triggers = document.querySelectorAll('.open-modal');

// Get the close button
var closeBtn = document.querySelector('.close-modal');

var projectMade = document.querySelectorAll('.project-content');

// When an image is clicked, show the modal with corresponding content
triggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        // Get the project content related to the clicked image
for (let i = 0; i < projectMade.length; i++){

    var projectContent = projectMade[i].innerHTML;

}
        
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