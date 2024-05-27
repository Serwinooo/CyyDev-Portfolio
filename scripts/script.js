/* $(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
  */

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
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}