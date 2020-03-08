//smooth scrolling function - jQuery
//not supported on safari

// $(document).ready(function(){   
//     $("a").on('click', function(event) {
        
//       // make sure hash is not empty
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();
  
//         // Store hash
//         var hash = this.hash;
  
//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (1500) - msec to scroll
//         $('html, body').animate({
//           scrollTop: $(hash).offset().top
//         }, 1500, function(){
     
//           // change URL to add #hash
//           window.location.hash = hash;
//         });
//       }
//     });
//   });
  
// open and close the contact form 
function open_form() {
document.getElementById("contact_form").style.display = "block";
}

function close_form() {
document.getElementById("contact_form").style.display = "none";
this.Close();
}

  //slideshow
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

  