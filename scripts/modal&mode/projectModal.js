var customModal = document.getElementById("customModal");
var triggers = document.querySelectorAll('.open-modal');
var closeBtn = document.querySelector('.close-modal');
// Store the original content of the modal for reuse
var originalModalContent = customModal.querySelector('.modal-content-container').innerHTML;
// When a trigger is clicked, show the modal with corresponding content
triggers.forEach(function(trigger, index) {
    trigger.addEventListener('click', function() {
        var projectContent = document.querySelectorAll('.project-content')[index].innerHTML;
        customModal.querySelector('.modal-content-container').innerHTML = projectContent;
        customModal.style.display = "block";
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function() {
    customModal.style.display = "none";
    stopVideos(); 
    resetModalContent(); 
});

// Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target == customModal) {
        customModal.style.display = "none";
        stopVideos(); 
        resetModalContent(); 
    }
});

// Function to stop videos when the modal is closed
function stopVideos() {
    var iframes = customModal.querySelectorAll('iframe');
    iframes.forEach(function(iframe) {
        iframe.src = ''; // Clear the iframe src to stop the video
    });
}

// Function to reset the modal content
function resetModalContent() {
    customModal.querySelector('.modal-content-container').innerHTML = originalModalContent;
}
