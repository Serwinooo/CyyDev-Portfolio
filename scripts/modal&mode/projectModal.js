// Get the modal
var customModal = document.getElementById("customModal");

// Get the buttons that trigger the modal
var triggers = document.querySelectorAll('.open-modal');

// Get the close button
var closeBtn = document.querySelector('.close-modal');

// When a trigger is clicked, show the modal with corresponding content
triggers.forEach(function(trigger, index) {
    trigger.addEventListener('click', function() {
        // Get the project content related to the clicked trigger
        var projectContent = document.querySelectorAll('.project-content')[index].innerHTML;
        
        // Set the modal content
        customModal.querySelector('.modal-content-container').innerHTML = projectContent;
        
        // Display the modal
        customModal.style.display = "block";
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function() {
    customModal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
    
    if (event.target == customModal) {
        customModal.style.display = "none";

    }
});
